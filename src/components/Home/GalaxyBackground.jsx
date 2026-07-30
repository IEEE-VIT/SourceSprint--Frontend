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

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // --- 2. Deep Space Galaxy Background Stars ---
    const starCount = 4500;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorBlue = new THREE.Color("#4b7bec");
    const colorGold = new THREE.Color("#f6b36a");
    const colorWhite = new THREE.Color("#ffffff");

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 36;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 36;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 4;

      const rand = Math.random();
      const c = rand > 0.85 ? colorGold : rand > 0.35 ? colorWhite : colorBlue;
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const galaxyStars = new THREE.Points(starGeo, starMat);
    scene.add(galaxyStars);

    // --- 2b. Constellations Background ---
    const constellationGroup = new THREE.Group();
    scene.add(constellationGroup);

    // Highly randomized coordinates to distribute left constellations naturally
    const constellationsData = [
      // Top-Left Constellation (Zig-zag)
      [
        new THREE.Vector3(-4.4, 2.3, 0),
        new THREE.Vector3(-3.1, 2.0, 0),
        new THREE.Vector3(-3.8, 1.3, 0),
        new THREE.Vector3(-2.6, 1.0, 0)
      ],
      // Top-Right Constellation (Zig-zag)
      [
        new THREE.Vector3(4.4, 2.3, 0),
        new THREE.Vector3(3.1, 2.0, 0),
        new THREE.Vector3(3.8, 1.3, 0),
        new THREE.Vector3(2.6, 1.0, 0)
      ],
      // Bottom-Left Constellation (Hook)
      [
        new THREE.Vector3(-3.9, -1.2, 0),
        new THREE.Vector3(-4.3, -2.1, 0),
        new THREE.Vector3(-3.0, -2.3, 0),
        new THREE.Vector3(-2.2, -1.5, 0)
      ],
      // Bottom-Right Constellation (Hook)
      [
        new THREE.Vector3(3.9, -1.2, 0),
        new THREE.Vector3(4.3, -2.1, 0),
        new THREE.Vector3(3.0, -2.3, 0),
        new THREE.Vector3(2.2, -1.5, 0)
      ]
    ];

    const starCoreGeom = new THREE.SphereGeometry(0.0035, 6, 6);
    const starGlowGeom = new THREE.SphereGeometry(0.009, 6, 6);
    const constellationStarMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6
    });
    const constellationGlowMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });

    const constellationLineMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });

    constellationGroup.position.z = -1;
    const constellationGlowMeshes = [];

    constellationsData.forEach((pts) => {
      // Create lines
      const lineGeom = new THREE.BufferGeometry().setFromPoints(pts);
      const lineMesh = new THREE.Line(lineGeom, constellationLineMat);
      constellationGroup.add(lineMesh);

      // Create glowing stars at vertices
      pts.forEach((pt) => {
        const starMesh = new THREE.Mesh(starCoreGeom, constellationStarMat);
        starMesh.position.copy(pt);
        constellationGroup.add(starMesh);

        const glowMesh = new THREE.Mesh(starGlowGeom, constellationGlowMat);
        glowMesh.position.copy(pt);
        constellationGroup.add(glowMesh);
        constellationGlowMeshes.push(glowMesh);
      });
    });

    // --- 3. Interactive Object Group ---
    const objectGroup = new THREE.Group();
    objectGroup.position.x = width > 768 ? 1.55 : 0;
    objectGroup.position.y = 0;
    scene.add(objectGroup);

    const totalCount = 4200;
    const saturnPos = new Float32Array(totalCount * 3);
    const githubPos = new Float32Array(totalCount * 3);
    const clockPos = new Float32Array(totalCount * 3);
    const dispersePos = new Float32Array(totalCount * 3);
    const currentPos = new Float32Array(totalCount * 3);
    const particleColors = new Float32Array(totalCount * 3);
    const dispersionVector = new Float32Array(totalCount * 3);

    const amber = new THREE.Color("#f6b36a");
    const gold = new THREE.Color("#d4883b");

    // --- 4. Official Upright Vector GitHub Octocat Logo Path ---
    const githubSvgString = `
      <svg viewBox="0 0 100 100">
        <path d="M 50 5 A 45 45 0 1 0 50 95 A 45 45 0 1 0 50 5 Z" />
        <path d="M 50 25 C 36 25 25 36 25 50 C 25 61.2 32.3 70.7 42.4 74 C 43.7 74.3 44.1 73.4 44.1 72.8 C 44.1 72.2 44.1 70.6 44 68.3 C 37 69.8 35.5 64.9 35.5 64.9 C 34.4 62 32.8 61.2 32.8 61.2 C 30.5 59.7 33 59.7 33 59.7 C 35.5 59.9 36.8 62.3 36.8 62.3 C 39.1 66.2 42.7 65.1 44.1 64.4 C 44.3 62.7 45 61.6 45.8 60.8 C 40.2 60.2 34.3 58 34.3 48.3 C 34.3 45.5 35.3 43.2 36.9 41.4 C 36.6 40.8 35.7 38.1 37.2 34.6 C 37.2 34.6 39.4 33.9 44.3 37.2 C 46.4 36.6 48.7 36.3 50.9 36.3 C 53.1 36.3 55.4 36.6 57.5 37.2 C 62.4 33.9 64.6 34.6 64.6 34.6 C 66.1 38.1 65.2 40.8 64.9 41.4 C 66.5 43.2 67.5 45.5 67.5 48.3 C 67.5 58 61.6 60.2 56 60.8 C 57 61.7 57.8 63.3 57.8 65.7 C 57.8 69.2 57.7 72.1 57.7 72.8 C 57.7 73.4 58.1 74.3 59.4 74 C 69.5 70.7 76.8 61.2 76.8 50 C 76.8 36 65.7 25 50 25 Z" />
      </svg>
    `;

    const svgLoader = new SVGLoader();
    const svgData = svgLoader.parse(githubSvgString);
    const sampledPoints = [];

    svgData.paths.forEach((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        const points = shape.getSpacedPoints(1800);
        points.forEach((pt) => {
          const nx = ((pt.x - 50) / 50) * 1.65;
          const ny = -((pt.y - 50) / 50) * 1.65;
          sampledPoints.push({ x: nx, y: ny });
        });
      });
    });

    // --- 5. Generate Target Maps (Saturn, GitHub, Enlarge Clock, Disperse) ---
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

      // GITHUB LOGO SILHOUETTE TARGETS
      const targetPoint = sampledPoints[i % sampledPoints.length];
      githubPos[i * 3] = targetPoint.x + (Math.random() - 0.5) * 0.04;
      githubPos[i * 3 + 1] = targetPoint.y + (Math.random() - 0.5) * 0.04;
      githubPos[i * 3 + 2] = (Math.random() - 0.5) * 0.04;

      // ENLARGED 3D CLOCK TARGET MAP (50% larger)
      let cx, cy, cz;
      const pClock = Math.random();
      if (pClock < 0.55) {
        // Clock Outer Ring Circle (Expanded Radius 1.65)
        const angle = Math.random() * Math.PI * 2;
        const r = 1.65 + (Math.random() - 0.5) * 0.08;
        cx = Math.cos(angle) * r;
        cy = Math.sin(angle) * r;
        cz = (Math.random() - 0.5) * 0.08;
      } else if (pClock < 0.82) {
        // Clock Hands (Vertical hand 12:00, Horizontal hand 3:00)
        const handChoice = Math.random();
        if (handChoice < 0.45) {
          // Vertical hour hand (0, 0) to (0, 0.85)
          const lenHand = Math.random() * 0.85;
          cx = (Math.random() - 0.5) * 0.06;
          cy = lenHand;
          cz = (Math.random() - 0.5) * 0.08;
        } else {
          // Horizontal minute hand (0, 0) to (0.70, 0)
          const lenHand = Math.random() * 0.70;
          cx = lenHand;
          cy = (Math.random() - 0.5) * 0.06;
          cz = (Math.random() - 0.5) * 0.08;
        }
      } else {
        // 12 Ticks around the enlarged clock perimeter
        const tickIdx = Math.floor(Math.random() * 12);
        const tickAngle = (tickIdx / 12) * Math.PI * 2;
        const tickLen = 1.42 + Math.random() * 0.22;
        cx = Math.cos(tickAngle) * tickLen;
        cy = Math.sin(tickAngle) * tickLen;
        cz = (Math.random() - 0.5) * 0.08;
      }
      clockPos[i * 3] = cx;
      clockPos[i * 3 + 1] = cy;
      clockPos[i * 3 + 2] = cz;

      // DISPERSE TARGET MAP (For FAQ disappearance)
      const dAngle = Math.random() * Math.PI * 2;
      const dR = 2.5 + Math.random() * 2.5;
      dispersePos[i * 3] = Math.cos(dAngle) * dR;
      dispersePos[i * 3 + 1] = Math.sin(dAngle) * dR;
      dispersePos[i * 3 + 2] = (Math.random() - 0.5) * 1.5;

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

    // 6. Mouse Pointer Physics
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false };

    const handlePointerMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;

      const targetXPos = width > 768 ? 0.35 : 0;
      const dx = mouse.targetX - targetXPos;
      const dy = mouse.targetY;
      mouse.isHovered = Math.sqrt(dx * dx + dy * dy) < 0.55;
    };
    window.addEventListener("pointermove", handlePointerMove);

    // 7. Scroll Physics Handler
    let scrollProgress = 0;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress = Math.min(1, Math.max(0, window.scrollY / totalScroll));
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 8. Resize Handler
    const handleResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      objectGroup.position.x = w > 768 ? 1.55 : 0;
    };
    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let currentScale = 1;
    let rotX = 0;
    let rotY = 0;
    let currentHoverBurst = 0;
    let constellationHover = 0;

    const animate = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      galaxyStars.rotation.y += 0.0005;
      galaxyStars.rotation.x = -mouse.y * 0.12;
      galaxyStars.position.x = mouse.x * 0.2;

      // Edge hover detection
      const distFromCenter = Math.sqrt(mouse.targetX * mouse.targetX + mouse.targetY * mouse.targetY);
      const isNearEdges = distFromCenter > 0.45;
      const targetConstellationHover = isNearEdges ? 1.0 : 0.0;
      constellationHover += (targetConstellationHover - constellationHover) * 0.1;

      constellationLineMat.opacity = 0.05 + constellationHover * 0.20;
      constellationStarMat.opacity = 0.35 + constellationHover * 0.65;

      const time = Date.now() * 0.005;
      const glowScale = 1.0 + constellationHover * (0.4 + Math.sin(time) * 0.2);
      constellationGlowMeshes.forEach((mesh) => {
        mesh.scale.set(glowScale, glowScale, glowScale);
        mesh.material.opacity = 0.08 + constellationHover * 0.32;
      });

      constellationGroup.rotation.y = Date.now() * 0.000005;
      constellationGroup.rotation.x = -mouse.y * 0.02 * constellationHover;
      constellationGroup.position.x = mouse.x * 0.03 * constellationHover;

      const targetHoverBurst = mouse.isHovered && scrollProgress < 0.1 ? 0.35 : 0.0;
      currentHoverBurst += (targetHoverBurst - currentHoverBurst) * 0.15;

      if (scrollProgress < 0.15) {
        const initialSaturnTiltZ = Math.PI / 6;
        objectGroup.rotation.z = initialSaturnTiltZ * (1 - scrollProgress / 0.15);

        if (mouse.isHovered) {
          const targetRotX = -mouse.y * 0.45;
          const targetRotY = mouse.x * 0.6;
          rotX += (targetRotX - rotX) * 0.08;
          rotY += (targetRotY - rotY) * 0.08;
          currentScale += (1.12 - currentScale) * 0.06;
        } else {
          rotX += (0 - rotX) * 0.05;
          rotY += 0.003;
          currentScale += (1.0 - currentScale) * 0.06;
        }
      } else {
        objectGroup.rotation.z += (0 - objectGroup.rotation.z) * 0.1;
        rotX += (0 - rotX) * 0.1;
        rotY += (0 - rotY) * 0.1;
        currentScale += (1.0 - currentScale) * 0.06;
      }

      objectGroup.rotation.x = rotX;
      objectGroup.rotation.y = rotY;
      objectGroup.scale.set(currentScale, currentScale, currentScale);

      // --- 4-STAGE INTERPOLATION: Saturn -> Git Cat -> Clock -> Disappear ---
      const posAttr = particleGeo.attributes.position;
      const posArr = posAttr.array;

      let fromPos, toPos, stageFactor;
      let targetOpacity = 0.88;

      if (scrollProgress < 0.18) {
        // Stage 1: Home -> About (Saturn -> Git Cat) - Forms early!
        fromPos = saturnPos;
        toPos = githubPos;
        stageFactor = Math.min(1, Math.max(0, scrollProgress / 0.18));
      } else if (scrollProgress < 0.38) {
        // Stage 1 Hold: Stays fully formed as Git Cat on About page
        fromPos = githubPos;
        toPos = githubPos;
        stageFactor = 1.0;
      } else if (scrollProgress < 0.58) {
        // Stage 2: About -> Timeline (Git Cat -> Clock) - Forms Clock by Timeline!
        fromPos = githubPos;
        toPos = clockPos;
        stageFactor = Math.min(1, Math.max(0, (scrollProgress - 0.38) / 0.20));
      } else if (scrollProgress < 0.72) {
        // Stage 2 Hold: Stays fully formed as Clock on Timeline page
        fromPos = clockPos;
        toPos = clockPos;
        stageFactor = 1.0;
      } else {
        // Stage 3: Timeline -> FAQ (Clock -> Disappear!)
        fromPos = clockPos;
        toPos = dispersePos;
        stageFactor = Math.min(1, Math.max(0, (scrollProgress - 0.72) / 0.18));
        targetOpacity = 0.88 * (1.0 - stageFactor);
      }

      particleMat.opacity = targetOpacity;

      const ease = stageFactor * stageFactor * (3 - 2 * stageFactor);

      for (let i = 0; i < totalCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        let originX = fromPos[ix];
        let originY = fromPos[iy];
        let originZ = fromPos[iz];

        if (scrollProgress < 0.1) {
          originX += dispersionVector[ix] * currentHoverBurst;
          originY += dispersionVector[iy] * currentHoverBurst;
          originZ += dispersionVector[iz] * currentHoverBurst;
        }

        posArr[ix] = originX + (toPos[ix] - originX) * ease;
        posArr[iy] = originY + (toPos[iy] - originY) * ease;
        posArr[iz] = originZ + (toPos[iz] - originZ) * ease;
      }

      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      starGeo.dispose();
      starMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      starCoreGeom.dispose();
      starGlowGeom.dispose();
      constellationStarMat.dispose();
      constellationGlowMat.dispose();
      constellationLineMat.dispose();
      renderer.dispose();
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
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
};

export default GalaxyBackground;