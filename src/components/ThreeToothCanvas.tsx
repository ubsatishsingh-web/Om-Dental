import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeToothCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Size setup
    let width = container.clientWidth;
    let height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group to hold all 3D components for global rotational response
    const toothGroup = new THREE.Group();
    scene.add(toothGroup);

    // 1. CREATE PROCEDURAL HIGH-TECH TOOTH GEOMETRY
    // We deform a Cylinder to map out a clear human molar tooth with quad-cusp crown & split roots.
    const geometry = new THREE.CylinderGeometry(1.4, 0.8, 3.4, 48, 48);
    const pos = geometry.attributes.position;
    
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      // y coordinate in cylinder ranges from -1.7 to +1.7

      if (y > 0.2) {
        // --- 🦷 THE CROWN REGION ---
        // Expand the shoulder slightly for a robust shape
        const angle = Math.atan2(z, x);
        const depthFactor = (y - 0.2) / 1.5; // 0 to 1
        
        // 4 prominent dental cusps at the corners
        const cuspAmplitude = 0.22 * depthFactor;
        const radiusExp = 1.0 + 0.18 * Math.sin(4 * angle) * depthFactor;
        
        pos.setX(i, x * radiusExp);
        pos.setZ(i, z * radiusExp);
        
        // Form the occlusal valley (concave dips) by pulling down the top center
        const rCurrent = Math.sqrt(x*x + z*z) * radiusExp;
        if (rCurrent < 1.3 && y > 1.4) {
          const centerProximity = 1.0 - (rCurrent / 1.3);
          pos.setY(i, y - 0.35 * centerProximity);
        }
      } else {
        // --- 🦷 THE ROOT REGION ---
        // Split roots downwards (y <= 0.2)
        const rootProgress = (0.2 - y) / 1.9; // 0 to 1
        
        if (rootProgress > 0.15) {
          // Double bifurcated roots splitting outwards along X-axis
          const splitStrength = (rootProgress - 0.15) * 0.75;
          const rootSide = x >= 0 ? 1 : -1;
          
          let newX = x + splitStrength * rootSide;
          
          // Taper the root tips towards the bottom
          const taperFactor = Math.max(0.12, 1.0 - rootProgress * 0.78);
          newX = newX * taperFactor;
          const newZ = z * taperFactor;
          
          pos.setX(i, newX);
          pos.setZ(i, newZ);
        } else {
          // Smooth transition zone forming the trunk of the root close to the cervix
          const trunkTaper = 1.0 - rootProgress * 0.2;
          pos.setX(i, x * trunkTaper);
          pos.setZ(i, z * trunkTaper);
        }
      }
    }
    
    geometry.computeVertexNormals();

    // 2. CHOOSE ADVANCED MATERIALS
    // Translucent glass outer shell
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x93c5fd, // Light clinical blue
      transmission: 0.9,
      opacity: 1,
      roughness: 0.18,
      metalness: 0.1,
      thickness: 2.2,
      ior: 1.48, // Glass refraction
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
    });

    const toothMesh = new THREE.Mesh(geometry, glassMaterial);
    toothGroup.add(toothMesh);

    // High-tech internal glowing structural wireframe
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Sky cyan
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
    wireframeMesh.scale.set(0.99, 0.99, 0.99); // Nestle slightly inside glass
    toothGroup.add(wireframeMesh);

    // Glowing inner organic nucleus core (representing the living pulp)
    const pulpGeometry = new THREE.CylinderGeometry(0.5, 0.2, 1.8, 16, 16);
    // Deform pulp slightly to taper inside roots
    const pulpPos = pulpGeometry.attributes.position;
    for (let j = 0; j < pulpPos.count; j++) {
      let py = pulpPos.getY(j);
      let px = pulpPos.getX(j);
      let pz = pulpPos.getZ(j);
      if (py < 0) {
        const rootSide = px >= 0 ? 1 : -1;
        pulpPos.setX(j, (px + 0.12 * rootSide) * 0.5);
        pulpPos.setZ(j, pz * 0.5);
      }
    }
    pulpGeometry.computeVertexNormals();
    
    const pulpMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf43f5e, // Biomedical deep ruby pink/red core
      emissive: 0xe11d48,
      emissiveIntensity: 0.75,
      roughness: 0.5,
      transmission: 0.2,
      thickness: 0.5,
    });
    const pulpMesh = new THREE.Mesh(pulpGeometry, pulpMaterial);
    pulpMesh.position.y = -0.1;
    toothGroup.add(pulpMesh);

    // 3. CYBER OPTICAL RINGS (ORTHODONTIC RING TRACKS)
    // Horizontal glowing rings orbiting the structure to enhance the orthodontic tech vibe
    const ringGroup = new THREE.Group();
    toothGroup.add(ringGroup);

    const ringGeometry = new THREE.TorusGeometry(2.3, 0.03, 12, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.3,
    });
    
    // Slanted cyber ring
    const orthoRing1 = new THREE.Mesh(ringGeometry, ringMaterial);
    orthoRing1.rotation.x = Math.PI / 2.3;
    orthoRing1.rotation.y = Math.PI / 8;
    ringGroup.add(orthoRing1);

    // Smaller fast ring
    const ringGeometry2 = new THREE.TorusGeometry(1.9, 0.015, 8, 48);
    const orthoRing2 = new THREE.Mesh(ringGeometry2, ringMaterial);
    orthoRing2.rotation.x = -Math.PI / 3.2;
    orthoRing2.rotation.y = -Math.PI / 12;
    ringGroup.add(orthoRing2);

    // Small data particles rolling along the rings
    const particleGeometry = new THREE.SphereGeometry(0.06, 12, 12);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8, toneMapped: false });
    
    const particles: THREE.Mesh[] = [];
    for (let k = 0; k < 3; k++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      ringGroup.add(particle);
      particles.push(particle);
    }

    // 4. FLOATING DATA DOTS CLOUD (HOLOGRAPHIC SENSOR NODES)
    const dotCount = 18;
    const dotGeometry = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(dotCount * 3);
    
    for (let m = 0; m < dotCount; m++) {
      // Randomly scatter coordinates in a spherical boundary around the tooth
      const radius = 2.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      dotPositions[m * 3] = radius * Math.sin(phi) * Math.cos(theta);
      dotPositions[m * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      dotPositions[m * 3 + 2] = radius * Math.cos(phi);
    }
    
    dotGeometry.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    
    const dotMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    
    const sensorCloud = new THREE.Points(dotGeometry, dotMaterial);
    toothGroup.add(sensorCloud);

    // 5. LIGHTING (PHYSICAL GLASS REFLECTOR SETUP)
    const ambientLight = new THREE.AmbientLight(0x0c4a6e, 0.4);
    scene.add(ambientLight);

    // Direct key clinic light
    const keyLight = new THREE.DirectionalLight(0xbae6fd, 1.8);
    keyLight.position.set(5, 5, 4);
    scene.add(keyLight);

    // Cyan glowing rim light for back refraction highlights
    const rimLight = new THREE.DirectionalLight(0x0284c7, 2.0);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    // Colored accent spotlight from top
    const spotsColor = new THREE.SpotLight(0x38bdf8, 4.0, 15, Math.PI / 4, 0.5, 1);
    spotsColor.position.set(0, 6, 2);
    scene.add(spotsColor);

    // 6. ACTION INTERACTION (MOUSE TRACKING & OSCILLATION)
    let mouse = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: -Math.PI / 6 }; // Slight elegant startup angle
    let currentRotation = { x: 0, y: -Math.PI / 6 };

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize values -1 to 1
      const rect = container.getBoundingClientRect();
      const relativeX = event.clientX - rect.left;
      const relativeY = event.clientY - rect.top;
      
      mouse.x = (relativeX / width) * 2 - 1;
      mouse.y = -(relativeY / height) * 2 + 1;

      // Map to subtle rotations
      targetRotation.y = mouse.x * 0.8 - Math.PI / 6;
      targetRotation.x = -mouse.y * 0.6;
    };

    // Listen on window to tracking smooth movement easily
    window.addEventListener('mousemove', handleMouseMove);

    // Floating animation counter
    let clock = new THREE.Clock();
    setIsLoaded(true);

    // Animation Loop
    const animate = () => {
      const requestID = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous rotation
      toothGroup.rotation.y += 0.005;

      // Mouse responsive rotation damping (lerping)
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      
      // Combine continuous rotation with mouse rotation
      toothMesh.rotation.y = currentRotation.y;
      toothMesh.rotation.x = currentRotation.x;
      wireframeMesh.rotation.y = currentRotation.y;
      wireframeMesh.rotation.x = currentRotation.x;
      pulpMesh.rotation.y = currentRotation.y;
      
      // Floating motion (Up/down bounce)
      toothGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.25;

      // Spin orthoring tracks
      orthoRing1.rotation.z = elapsedTime * 0.15;
      orthoRing2.rotation.z = -elapsedTime * 0.25;

      // Drive data particles along toruses circular path
      particles.forEach((part, index) => {
        const offset = (index * Math.PI * 2) / particles.length;
        const angle = elapsedTime * 0.7 + offset;
        
        // Match the slanted torus ring radius setup (2.3 radius)
        const radius = 2.3;
        part.position.x = Math.cos(angle) * radius;
        part.position.y = Math.sin(angle) * radius * Math.cos(Math.PI / 2.3);
        part.position.z = Math.sin(angle) * radius * Math.sin(Math.PI / 2.3);
      });

      // Slowly rotate the surrounding sensors cloud
      sensorCloud.rotation.y = -elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    const animationFrameId = requestAnimationFrame(animate);

    // Responsive resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight || 500;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      glassMaterial.dispose();
      wireframeMat.dispose();
      pulpGeometry.dispose();
      pulpMaterial.dispose();
      ringGeometry.dispose();
      ringGeometry2.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Visual background glowing pulse under the tooth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-medical-500/10 blur-3xl -z-10 animate-pulse duration-4000"></div>
      
      <div ref={containerRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" id="three-canvas-holder"></div>
      
      {/* 3D Holographic Hud Label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 py-1 px-3 rounded-full border border-medical-500/10 bg-medical-950/40 text-[10px] tracking-widest text-medical-300 font-mono uppercase flex items-center gap-2 backdrop-blur-md select-none pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        Holographic smile module active
      </div>

      {!isLoaded && (
        <div className="text-medical-400 font-mono text-xs flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-medical-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Initializing 3D Mesh...
        </div>
      )}
    </div>
  );
}
