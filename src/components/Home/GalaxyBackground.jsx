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
    const starCount = 1800;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorBlue = new THREE.Color("#4b7bec");
    const colorGold = new THREE.Color("#00F5FF");
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

    // --- 3. Interactive Object Group ---
    const objectGroup = new THREE.Group();
    objectGroup.position.x = width > 768 ? 1.8 : 0;
    objectGroup.position.y = 0;
    scene.add(objectGroup);

    const totalCount = 4200;
    const saturnPos = new Float32Array(totalCount * 3);
    const githubPos = new Float32Array(totalCount * 3);
    const currentPos = new Float32Array(totalCount * 3);
    const particleColors = new Float32Array(totalCount * 3);
    const dispersionVector = new Float32Array(totalCount * 3);

    const amber = new THREE.Color("#00F5FF");
    const gold = new THREE.Color("#9D4EDD");

    // --- 4. Official Vector GitHub Logo Path ---
    const githubSvgString = `
      <svg viewBox="0 0 100 100">
        <path d="M 50 2 A 48 48 0 1 0 50 98 A 48 48 0 1 0 50 2 Z M 50 10 A 40 40 0 1 1 50 90 A 40 40 0 1 1 50 10 Z" />
        <path d="M 50 22 C 34.5 22 22 34.5 22 50 C 22 62.4 30 72.9 41.2 76.6 C 42.6 76.9 43.1 76 43.1 75.3 C 43.1 74.6 43.1 72.8 43 70.2 C 35.3 71.9 33.6 66.5 33.6 66.5 C 32.4 63.3 30.6 62.5 30.6 62.5 C 28.1 60.8 30.8 60.8 30.8 60.8 C 33.6 61 35.1 63.7 35.1 63.7 C 37.6 68 41.6 66.7 43.2 66 C 43.4 64.2 44.2 63 45 62.2 C 38.8 61.5 32.3 59.1 32.3 48.4 C 32.3 45.3 33.4 42.8 35.2 40.8 C 34.9 40.1 33.9 37.2 35.5 33.3 C 35.5 33.3 37.9 32.5 43.3 36.2 C 45.6 35.5 48.1 35.2 50.5 35.2 C 52.9 35.2 55.4 35.5 57.7 36.2 C 63.1 32.5 65.5 33.3 65.5 33.3 C 67.1 37.2 66.1 40.1 66.1 40.1 C 67.6 42.8 68.7 45.3 68.7 48.4 C 68.7 59.2 62.2 61.5 56 62.2 C 57 63.1 57.9 64.8 57.9 67.5 C 57.9 71.4 57.8 74.6 57.8 75.3 C 57.8 76 58.3 76.9 59.7 76.6 C 70.9 72.9 78.9 62.4 78.9 50 C 78.9 34.5 66.4 22 50 22 Z" />
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
          const nx = ((pt.x - 50) / 50) * 1.85;
          const ny = -((pt.y - 50) / 50) * 1.85;
          sampledPoints.push({ x: nx, y: ny });
        });
      });
    });

    // --- 5. Generate Saturn & GitHub Target Maps ---
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
      githubPos[i * 3] = targetPoint.x + (Math.random() - 0.5) * 0.02;
      githubPos[i * 3 + 1] = targetPoint.y + (Math.random() - 0.5) * 0.02;
      githubPos[i * 3 + 2] = (Math.random() - 0.5) * 0.06;

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

    // 7. Scroll Progress Controller
    let scrollProgress = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = window.innerHeight * 0.85;
      scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    };
    window.addEventListener("scroll", handleScroll);

    // 8. Resize Listener
    const handleResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      objectGroup.position.x = w > 768 ? 1.8 : 0;
    };
    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let currentScale = 1;
    let rotX = 0;
    let rotY = 0;
    let currentHoverBurst = 0;

    const animate = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      galaxyStars.rotation.y += 0.0005;
      galaxyStars.rotation.x = -mouse.y * 0.12;
      galaxyStars.position.x = mouse.x * 0.2;

      const initialSaturnTiltZ = Math.PI / 6;
      objectGroup.rotation.z = initialSaturnTiltZ * (1 - scrollProgress);

      // Hover expansion factor (active only near top of page)
      const targetHoverBurst = mouse.isHovered && scrollProgress < 0.1 ? 0.35 : 0.0;
      currentHoverBurst += (targetHoverBurst - currentHoverBurst) * 0.15;

      if (scrollProgress < 0.15) {
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
        // Un-rotate object completely on scroll so GitHub logo sits upright
        rotX += (0 - rotX) * 0.08;
        rotY += (0 - rotY) * 0.08;
        currentScale += (1.0 - currentScale) * 0.06;
      }

      objectGroup.rotation.x = rotX;
      objectGroup.rotation.y = rotY;
      objectGroup.scale.set(currentScale, currentScale, currentScale);

      // --- CLEAN DIRECT INTERPOLATION ---
      const posAttr = particleGeo.attributes.position;
      const posArr = posAttr.array;

      // Easing curve for scroll-based morphing
      const morphEase = 1 - Math.pow(1 - scrollProgress, 3);

      for (let i = 0; i < totalCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        // Base Saturn position + mouse hover burst explosion offset
        const originX = saturnPos[ix] + dispersionVector[ix] * currentHoverBurst;
        const originY = saturnPos[iy] + dispersionVector[iy] * currentHoverBurst;
        const originZ = saturnPos[iz] + dispersionVector[iz] * currentHoverBurst;

        // Target GitHub coordinates
        const targetX = githubPos[ix];
        const targetY = githubPos[iy];
        const targetZ = githubPos[iz];

        // Direct smooth linear blend between Saturn (with hover burst) and GitHub Logo
        posArr[ix] = originX + (targetX - originX) * morphEase;
        posArr[iy] = originY + (targetY - originY) * morphEase;
        posArr[iz] = originZ + (targetZ - originZ) * morphEase;
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