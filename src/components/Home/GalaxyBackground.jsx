import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import "./galaxy-background.css";

const GalaxyBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6.5;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.addEventListener("webglcontextlost", (e) => {
        e.preventDefault();
        console.warn("WebGL context lost handled gracefully.");
      }, false);
    } catch (e) {
      console.warn("WebGL initialization failed:", e);
      return;
    }

    let isMounted = true;

    // Clean up any stale canvas elements from previous mounts
    while (mount.firstChild) {
      mount.removeChild(mount.firstChild);
    }
    mount.appendChild(renderer.domElement);

    // --- 2. Deep Space Galaxy Background Stars ---
    const starCount = 1800;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorBlue = new THREE.Color("#4b7bec");
    const colorGold = new THREE.Color("#f6b36a");
    const colorWhite = new THREE.Color("#ffffff");

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 32;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 32;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 4;

      const rand = Math.random();
      const c = rand > 0.8 ? colorGold : rand > 0.4 ? colorWhite : colorBlue;
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.022,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const galaxyStars = new THREE.Points(starGeo, starMat);
    scene.add(galaxyStars);



    // --- 2c. Meteor Cursor Trail Particles ---
    const cursorTrailCount = 120;
    const cursorTrailPos = new Float32Array(cursorTrailCount * 3);
    const cursorTrailColors = new Float32Array(cursorTrailCount * 3);
    const cursorTrailSizes = new Float32Array(cursorTrailCount);
    const cursorParticlesData = [];

    for (let i = 0; i < cursorTrailCount; i++) {
      cursorTrailPos[i * 3] = 999;
      cursorTrailPos[i * 3 + 1] = 999;
      cursorTrailPos[i * 3 + 2] = 0;

      const c = Math.random() > 0.4 ? colorGold : colorWhite;
      cursorTrailColors[i * 3] = c.r;
      cursorTrailColors[i * 3 + 1] = c.g;
      cursorTrailColors[i * 3 + 2] = c.b;
      cursorTrailSizes[i] = 0;

      cursorParticlesData.push({
        x: 999,
        y: 999,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        life: 0,
        maxLife: 1,
      });
    }

    const cursorTrailGeo = new THREE.BufferGeometry();
    cursorTrailGeo.setAttribute("position", new THREE.BufferAttribute(cursorTrailPos, 3));
    cursorTrailGeo.setAttribute("color", new THREE.BufferAttribute(cursorTrailColors, 3));

    const cursorTrailMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const cursorTrailMesh = new THREE.Points(cursorTrailGeo, cursorTrailMat);
    scene.add(cursorTrailMesh);

    // --- 3. Interactive Object Group ---
    const objectGroup = new THREE.Group();
    const defaultXPosition = width > 768 ? 1.8 : 0;
    objectGroup.position.x = defaultXPosition;
    objectGroup.position.y = 0;
    scene.add(objectGroup);

    const totalCount = 4200;
    const saturnPos = new Float32Array(totalCount * 3);
    const currentPos = new Float32Array(totalCount * 3);
    const particleColors = new Float32Array(totalCount * 3);
    const dispersionVector = new Float32Array(totalCount * 3);

    const amber = new THREE.Color("#f6b36a");
    const gold = new THREE.Color("#d4883b");

    // --- 5. Parse Vector SVG for Official GitHub Octocat Logo (Matching Image 2) ---
    const githubSvgString = `
      <svg viewBox="0 0 100 100">
        <path d="M 50 0 C 22.4 0 0 22.4 0 50 C 0 72.1 14.3 90.8 34.2 97.4 C 36.7 97.9 37.6 96.3 37.6 95 C 37.6 93.9 37.6 90.8 37.5 86.9 C 23.6 89.9 20.7 80.2 20.7 80.2 C 18.4 74.4 15.1 72.9 15.1 72.9 C 10.6 69.8 15.4 69.9 15.4 69.9 C 20.4 70.2 23 75 23 75 C 27.4 82.5 34.6 80.3 37.4 79 C 37.8 75.8 39.1 73.6 40.5 72.4 C 29.4 71.1 17.7 66.8 17.7 47.6 C 17.7 42.1 19.7 37.6 22.9 34.1 C 22.4 32.8 20.7 27.7 23.4 20.8 C 23.4 20.8 27.6 19.5 37.2 26 C 41.2 24.9 45.4 24.3 49.6 24.3 C 53.8 24.3 58 24.9 62 26 C 71.6 19.5 75.8 20.8 75.8 20.8 C 78.5 27.7 76.8 32.8 76.3 34.1 C 79.6 37.6 81.5 42.1 81.5 47.6 C 81.5 66.9 69.8 71.1 58.6 72.3 C 60.4 73.9 62 77 62 81.7 C 62 88.4 61.9 93.8 61.9 95 C 61.9 96.3 62.8 97.9 65.3 97.4 C 85.2 90.8 99.5 72.1 99.5 50 C 99.5 22.4 77.1 0 49.6 0 Z" />
      </svg>
    `;

    const sampledCatPoints = [];

    try {
      const svgLoader = new SVGLoader();
      const svgData = svgLoader.parse(githubSvgString);
      if (svgData && svgData.paths) {
        svgData.paths.forEach((path) => {
          const shapes = SVGLoader.createShapes(path);
          shapes.forEach((shape) => {
            const points = shape.getSpacedPoints(260);
            points.forEach((pt) => {
              const nx = ((pt.x - 50) / 50) * 1.85;
              const ny = -((pt.y - 50) / 50) * 1.85;
              sampledCatPoints.push({ x: nx, y: ny });
            });
          });
        });
      }
    } catch (e) {
      console.warn("SVG sampling warning:", e);
    }

    // Safety fallback: Parametric GitHub Octocat Logo generator if SVG parsing is empty
    if (sampledCatPoints.length === 0) {
      // 1. Head circle & Ears
      for (let p = 0; p < 1500; p++) {
        const angle = Math.random() * Math.PI * 2;
        const r = 1.05 + (Math.random() - 0.5) * 0.05;
        let px = Math.cos(angle) * r;
        let py = Math.sin(angle) * r + 0.1;
        // Ear points
        if (py > 0.7 && Math.abs(px) > 0.4) {
          py += 0.35;
        }
        sampledCatPoints.push({ x: px, y: py });
      }
    }

    // --- 6. Generate Saturn, Git Cat & Clock Target Maps ---
    const gitCatPos = new Float32Array(totalCount * 3);
    const clockPos = new Float32Array(totalCount * 3);
    const nebulaPos = new Float32Array(totalCount * 3);

    for (let i = 0; i < totalCount; i++) {
      // SATURN MESH
      let sx, sy, sz;
      const isRing = i > 2100;

      if (!isRing) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 1.05 + (Math.random() - 0.5) * 0.08;

        sx = r * Math.sin(phi) * Math.cos(theta);
        sy = r * Math.sin(phi) * Math.sin(theta);
        sz = r * Math.cos(phi);
      } else {
        const angle = Math.random() * Math.PI * 2;
        const r = 1.5 + Math.random() * 0.95;

        sx = Math.cos(angle) * r;
        sy = (Math.random() - 0.5) * 0.06;
        sz = Math.sin(angle) * r;
      }

      saturnPos[i * 3] = sx;
      saturnPos[i * 3 + 1] = sy;
      saturnPos[i * 3 + 2] = sz;

      currentPos[i * 3] = sx;
      currentPos[i * 3 + 1] = sy;
      currentPos[i * 3 + 2] = sz;

      // Radial vector for hover explosion
      const len = Math.sqrt(sx * sx + sy * sy + sz * sz) || 1;
      dispersionVector[i * 3] = (sx / len) * (1.1 + Math.random() * 2.2);
      dispersionVector[i * 3 + 1] = (sy / len) * (1.1 + Math.random() * 2.2);
      dispersionVector[i * 3 + 2] = (sz / len) * (1.1 + Math.random() * 2.2);

      // GIT CAT TARGETS (Dual Concentric Rings + Centered Octocat Silhouette matching Image 2)
      if (i < 1300) {
        // 1. Outer Concentric Ring
        const angle = Math.random() * Math.PI * 2;
        const r = 2.15 + (Math.random() - 0.5) * 0.07;
        gitCatPos[i * 3] = Math.cos(angle) * r;
        gitCatPos[i * 3 + 1] = Math.sin(angle) * r;
        gitCatPos[i * 3 + 2] = (Math.random() - 0.5) * 0.07;
      } else if (i < 2500) {
        // 2. Inner Concentric Ring
        const angle = Math.random() * Math.PI * 2;
        const r = 1.55 + (Math.random() - 0.5) * 0.07;
        gitCatPos[i * 3] = Math.cos(angle) * r;
        gitCatPos[i * 3 + 1] = Math.sin(angle) * r;
        gitCatPos[i * 3 + 2] = (Math.random() - 0.5) * 0.07;
      } else {
        // 3. Centered GitHub Octocat Silhouette
        const catPt = sampledCatPoints[i % sampledCatPoints.length] || { x: 0, y: 0 };
        const scaleCat = 0.65;
        gitCatPos[i * 3] = catPt.x * scaleCat + (Math.random() - 0.5) * 0.12;
        gitCatPos[i * 3 + 1] = catPt.y * scaleCat + (Math.random() - 0.5) * 0.12;
        gitCatPos[i * 3 + 2] = (Math.random() - 0.5) * 0.07;
      }

      // CLOCK SILHOUETTE TARGETS (Matching user's clock image)
      let cx = 0, cy = 0, cz = (Math.random() - 0.5) * 0.16;

      if (i < 2600) {
        // Outer Circle Ring (stationary)
        const angle = Math.random() * Math.PI * 2;
        const r = 1.65 + (Math.random() - 0.5) * 0.075;
        cx = Math.cos(angle) * r;
        cy = Math.sin(angle) * r;
      } else if (i < 3400) {
        // 12 Tick Marks on the perimeter (stationary)
        const tickIndex = Math.floor(Math.random() * 12);
        const tickAngle = (tickIndex * Math.PI) / 6;
        const t = Math.random() * 0.19;
        const r = 1.65 - t;
        cx = Math.cos(tickAngle) * r;
        cy = Math.sin(tickAngle) * r;
      } else if (i < 3800) {
        // Seconds hand (visually longer) - canonical template pointing up, rotated live from real time
        const t = Math.random();
        cx = (Math.random() - 0.5) * 0.05;
        cy = t * 1.15;
      } else {
        // Minutes hand (visually shorter) - canonical template pointing up, rotated live from real time
        const t = Math.random();
        cx = (Math.random() - 0.5) * 0.036;
        cy = t * 0.85;
      }

      clockPos[i * 3] = cx;
      clockPos[i * 3 + 1] = cy;
      clockPos[i * 3 + 2] = cz;

      // NEBULA STARFIELD TARGETS (Scatter for Git Resources & FAQ sections)
      const nebAngle = Math.random() * Math.PI * 2 + (i * 0.003);
      const nebDist = 0.8 + Math.pow(Math.random(), 0.6) * 5.2;
      nebulaPos[i * 3] = Math.cos(nebAngle) * nebDist + (Math.random() - 0.5) * 1.5;
      nebulaPos[i * 3 + 1] = Math.sin(nebAngle) * nebDist * 0.85 + (Math.random() - 0.5) * 1.2;
      nebulaPos[i * 3 + 2] = (Math.random() - 0.5) * 4.0;

      const c = isRing ? (Math.random() > 0.4 ? amber : colorWhite) : (Math.random() > 0.5 ? amber : gold);
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(currentPos, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const mainParticles = new THREE.Points(particleGeo, particleMat);
    objectGroup.add(mainParticles);

    // 6. Mouse Pointer Physics & Meteor Trail Emitter
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, worldX: 0, worldY: 0, isHovered: false };
    let cursorIndex = 0;

    const handlePointerMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Project mouse to 3D world coordinates for meteor trail
      const vec = new THREE.Vector3(mouse.targetX, mouse.targetY, 0.5);
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      mouse.worldX = pos.x;
      mouse.worldY = pos.y;

      // Emit meteor cursor particles
      for (let k = 0; k < 3; k++) {
        const idx = (cursorIndex + k) % cursorTrailCount;
        cursorParticlesData[idx] = {
          x: pos.x + (Math.random() - 0.5) * 0.1,
          y: pos.y + (Math.random() - 0.5) * 0.1,
          z: (Math.random() - 0.5) * 0.2,
          vx: (Math.random() - 0.5) * 0.02,
          vy: (Math.random() - 0.5) * 0.02,
          vz: (Math.random() - 0.5) * 0.02,
          life: 1.0,
          maxLife: 0.4 + Math.random() * 0.4,
        };
      }
      cursorIndex = (cursorIndex + 3) % cursorTrailCount;

      const wdx = pos.x - objectGroup.position.x;
      const wdy = pos.y - objectGroup.position.y;
      mouse.isHovered = Math.sqrt(wdx * wdx + wdy * wdy) < 1.6;
    };
    window.addEventListener("pointermove", handlePointerMove);



    // 8. Resize Listener
    const handleResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let rotX = 0;
    let rotY = 0;
    let currentHoverBurst = 0;
    let outerRingAngle = 0;
    let innerRingAngle = 0;

    const animate = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      galaxyStars.rotation.y += 0.0005;
      galaxyStars.rotation.x = -mouse.y * 0.12;
      galaxyStars.position.x = mouse.x * 0.2;



      // Update Meteor Cursor Particles safely
      if (cursorTrailGeo && cursorTrailGeo.attributes && cursorTrailGeo.attributes.position) {
        const cPosArr = cursorTrailGeo.attributes.position.array;
        for (let i = 0; i < cursorTrailCount; i++) {
          const p = cursorParticlesData[i];
          if (p && p.life > 0) {
            p.x += p.vx;
            p.y += p.vy;
            p.z += p.vz;
            p.life -= 0.025 / p.maxLife;

            cPosArr[i * 3] = p.x;
            cPosArr[i * 3 + 1] = p.y;
            cPosArr[i * 3 + 2] = p.z;
          } else {
            cPosArr[i * 3] = 999;
            cPosArr[i * 3 + 1] = 999;
            cPosArr[i * 3 + 2] = 0;
          }
        }
        cursorTrailGeo.attributes.position.needsUpdate = true;
      }

      // --- DOM SECTION BASED MORPHING TIMING ---
      const aboutEl = document.getElementById("about");
      const timelineEl = document.getElementById("timeline");
      const resourcesEl = document.getElementById("resources") || document.getElementById("faq");
      const vh = window.innerHeight;

      let saturnToCatProgress = 0;
      let catToClockProgress = 0;
      let clockToNebulaProgress = 0;

      if (aboutEl) {
        const aboutTop = aboutEl.getBoundingClientRect().top;
        const startMorphY = vh * 0.85;
        const endMorphY = vh * 0.35;
        saturnToCatProgress = Math.min(Math.max((startMorphY - aboutTop) / (startMorphY - endMorphY), 0), 1);
      }

      if (timelineEl) {
        const timelineTop = timelineEl.getBoundingClientRect().top;
        const startClockY = vh * 0.45; // Only start morphing to clock when timeline enters top-middle viewport
        const endClockY = vh * 0.15;
        catToClockProgress = Math.min(Math.max((startClockY - timelineTop) / (startClockY - endClockY), 0), 1);
      }

      if (resourcesEl) {
        const resourcesTop = resourcesEl.getBoundingClientRect().top;
        const startNebulaY = vh * 0.7; // Start scattering into nebula background for Resources & FAQ
        const endNebulaY = vh * 0.2;
        clockToNebulaProgress = Math.min(Math.max((startNebulaY - resourcesTop) / (startNebulaY - endNebulaY), 0), 1);
      }

      // Hover expansion factor (active across Saturn, Octocat & Clock states)
      const targetHoverBurst = mouse.isHovered && clockToNebulaProgress < 0.5 ? 0.35 : 0.0;
      currentHoverBurst += (targetHoverBurst - currentHoverBurst) * 0.15;

      // Independent counter-rotation for the two concentric octocat rings (silhouette stays stationary)
      outerRingAngle += 0.003;
      innerRingAngle -= 0.004;

      // Live-ticking clock hands driven by real time (floored per-second for a "ticking" motion)
      const nowSeconds = Math.floor(Date.now() / 1000);
      const secAngle = -(nowSeconds % 60) * ((Math.PI * 2) / 60);
      const minAngle = -(Math.floor(nowSeconds / 60) % 60) * ((Math.PI * 2) / 60);

      // Smoothly un-tilt Saturn to 0 so the GitHub Octocat logo is 100% perfectly straight & upright
      const initialSaturnTiltZ = Math.PI / 6;
      objectGroup.rotation.z = initialSaturnTiltZ * Math.max(0, 1 - saturnToCatProgress * 2.5);

      if (clockToNebulaProgress > 0.05) {
        // Slow ambient rotation for background nebula cloud
        rotY += 0.0015;
        rotX += (0 - rotX) * 0.08;
      } else if (saturnToCatProgress > 0.05) {
        rotX += (0 - rotX) * 0.12;
        rotY += (0 - rotY) * 0.12;
      } else {
        if (mouse.isHovered) {
          const targetRotX = -mouse.y * 0.45;
          const targetRotY = mouse.x * 0.6;
          rotX += (targetRotX - rotX) * 0.08;
          rotY += (targetRotY - rotY) * 0.08;
        } else {
          rotX += (0 - rotX) * 0.05;
          rotY += 0.003;
        }
      }

      objectGroup.rotation.x = rotX;
      objectGroup.rotation.y = rotY;

      if (particleGeo && particleGeo.attributes && particleGeo.attributes.position) {
        const posAttr = particleGeo.attributes.position;
        const posArr = posAttr.array;

        const easeCat = 1 - Math.pow(1 - saturnToCatProgress, 3);
        const easeClock = 1 - Math.pow(1 - catToClockProgress, 3);
        const easeNebula = 1 - Math.pow(1 - clockToNebulaProgress, 3);

        for (let i = 0; i < totalCount; i++) {
          const ix = i * 3;
          const iy = i * 3 + 1;
          const iz = i * 3 + 2;

          const saturnX = saturnPos[ix] + dispersionVector[ix] * currentHoverBurst;
          const saturnY = saturnPos[iy] + dispersionVector[iy] * currentHoverBurst;
          const saturnZ = saturnPos[iz] + dispersionVector[iz] * currentHoverBurst;

          let catX = gitCatPos[ix];
          let catY = gitCatPos[iy];
          const catZ = gitCatPos[iz] + dispersionVector[iz] * currentHoverBurst;

          if (i < 1300) {
            const cos = Math.cos(outerRingAngle);
            const sin = Math.sin(outerRingAngle);
            const rx = catX, ry = catY;
            catX = rx * cos - ry * sin;
            catY = rx * sin + ry * cos;
          } else if (i < 2500) {
            const cos = Math.cos(innerRingAngle);
            const sin = Math.sin(innerRingAngle);
            const rx = catX, ry = catY;
            catX = rx * cos - ry * sin;
            catY = rx * sin + ry * cos;
          }
          catX += dispersionVector[ix] * currentHoverBurst;
          catY += dispersionVector[iy] * currentHoverBurst;

          let clockX = clockPos[ix];
          let clockY = clockPos[iy];
          const clockZ = clockPos[iz] + dispersionVector[iz] * currentHoverBurst;

          if (i >= 3400 && i < 3800) {
            const cos = Math.cos(secAngle);
            const sin = Math.sin(secAngle);
            const rx = clockX, ry = clockY;
            clockX = rx * cos - ry * sin;
            clockY = rx * sin + ry * cos;
          } else if (i >= 3800) {
            const cos = Math.cos(minAngle);
            const sin = Math.sin(minAngle);
            const rx = clockX, ry = clockY;
            clockX = rx * cos - ry * sin;
            clockY = rx * sin + ry * cos;
          }
          clockX += dispersionVector[ix] * currentHoverBurst;
          clockY += dispersionVector[iy] * currentHoverBurst;

          const nebX = nebulaPos[ix];
          const nebY = nebulaPos[iy];
          const nebZ = nebulaPos[iz];

          // 1. Saturn -> Octocat
          const mid1X = saturnX + (catX - saturnX) * easeCat;
          const mid1Y = saturnY + (catY - saturnY) * easeCat;
          const mid1Z = saturnZ + (catZ - saturnZ) * easeCat;

          // 2. Octocat -> Clock
          const mid2X = mid1X + (clockX - mid1X) * easeClock;
          const mid2Y = mid1Y + (clockY - mid1Y) * easeClock;
          const mid2Z = mid1Z + (clockZ - mid1Z) * easeClock;

          // 3. Clock -> Nebula Starfield Scatter
          posArr[ix] = mid2X + (nebX - mid2X) * easeNebula;
          posArr[iy] = mid2Y + (nebY - mid2Y) * easeNebula;
          posArr[iz] = mid2Z + (nebZ - mid2Z) * easeNebula;
        }

        posAttr.needsUpdate = true;
      }

      if (!isMounted) return;

      try {
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      } catch (err) {
        console.warn("WebGL render frame skipped:", err);
      }
    };

    animate();

    return () => {
      isMounted = false;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      try {
        starGeo.dispose();
        starMat.dispose();
        cursorTrailGeo.dispose();
        cursorTrailMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        renderer.dispose();
      } catch (e) {
        // Prevent disposal crash
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="galaxy-canvas"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    />
  );
};

export default GalaxyBackground;