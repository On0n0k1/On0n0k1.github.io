// import { useEffect, useRef } from 'react'
// import * as THREE from 'three'

// const PARTICLE_COUNT = 120
// const CONNECTION_DISTANCE = 150
// const PARTICLE_SPEED = 0.15

// interface Particle {
//   velocity: THREE.Vector3
// }

// export function useThreeBackground(containerRef: React.RefObject<HTMLDivElement | null>) {
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
//   const animFrameRef = useRef<number>(0)

//   useEffect(() => {
//     const container = containerRef.current
//     if (!container) return

//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     camera.position.z = 400

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     renderer.setClearColor(0x000000, 0)
//     container.appendChild(renderer.domElement)
//     rendererRef.current = renderer

//     // Particles
//     const positions = new Float32Array(PARTICLE_COUNT * 3)
//     const particleData: Particle[] = []

//     for (let i = 0; i < PARTICLE_COUNT; i++) {
//       const x = (Math.random() - 0.5) * window.innerWidth
//       const y = (Math.random() - 0.5) * window.innerHeight
//       const z = (Math.random() - 0.5) * 200

//       positions[i * 3] = x
//       positions[i * 3 + 1] = y
//       positions[i * 3 + 2] = z

//       particleData.push({
//         velocity: new THREE.Vector3(
//           (Math.random() - 0.5) * PARTICLE_SPEED,
//           (Math.random() - 0.5) * PARTICLE_SPEED,
//           (Math.random() - 0.5) * PARTICLE_SPEED * 0.2,
//         ),
//       })
//     }

//     const particleGeo = new THREE.BufferGeometry()
//     particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

//     const particleMat = new THREE.PointsMaterial({
//       color: 0x818cf8,
//       size: 2.5,
//       transparent: true,
//       opacity: 0.8,
//       sizeAttenuation: false,
//     })

//     const points = new THREE.Points(particleGeo, particleMat)
//     scene.add(points)

//     // Lines between nearby particles
//     const lineGeo = new THREE.BufferGeometry()
//     const maxLines = PARTICLE_COUNT * PARTICLE_COUNT
//     const linePositions = new Float32Array(maxLines * 6)
//     const lineColors = new Float32Array(maxLines * 6)
//     lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
//     lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

//     const lineMat = new THREE.LineSegments(
//       lineGeo,
//       new THREE.LineBasicMaterial({ vertexColors: true, transparent: true }),
//     )
//     scene.add(lineMat)

//     const halfW = window.innerWidth / 2
//     const halfH = window.innerHeight / 2

//     function animate() {
//       animFrameRef.current = requestAnimationFrame(animate)

//       const pos = particleGeo.attributes.position.array as Float32Array

//       for (let i = 0; i < PARTICLE_COUNT; i++) {
//         const ix = i * 3
//         pos[ix] += particleData[i].velocity.x
//         pos[ix + 1] += particleData[i].velocity.y
//         pos[ix + 2] += particleData[i].velocity.z

//         if (pos[ix] > halfW || pos[ix] < -halfW) particleData[i].velocity.x *= -1
//         if (pos[ix + 1] > halfH || pos[ix + 1] < -halfH) particleData[i].velocity.y *= -1
//         if (pos[ix + 2] > 100 || pos[ix + 2] < -100) particleData[i].velocity.z *= -1
//       }
//       particleGeo.attributes.position.needsUpdate = true

//       // Rebuild lines
//       let lineIdx = 0
//       for (let i = 0; i < PARTICLE_COUNT; i++) {
//         for (let j = i + 1; j < PARTICLE_COUNT; j++) {
//           const ix = i * 3
//           const jx = j * 3
//           const dx = pos[ix] - pos[jx]
//           const dy = pos[ix + 1] - pos[jx + 1]
//           const dz = pos[ix + 2] - pos[jx + 2]
//           const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

//           if (dist < CONNECTION_DISTANCE) {
//             const alpha = 1 - dist / CONNECTION_DISTANCE
//             const li = lineIdx * 6
//             linePositions[li] = pos[ix]
//             linePositions[li + 1] = pos[ix + 1]
//             linePositions[li + 2] = pos[ix + 2]
//             linePositions[li + 3] = pos[jx]
//             linePositions[li + 4] = pos[jx + 1]
//             linePositions[li + 5] = pos[jx + 2]

//             const r = 0.38
//             const g = 0.40
//             const b = 0.78
//             lineColors[li] = r * alpha
//             lineColors[li + 1] = g * alpha
//             lineColors[li + 2] = b * alpha
//             lineColors[li + 3] = r * alpha
//             lineColors[li + 4] = g * alpha
//             lineColors[li + 5] = b * alpha
//             lineIdx++
//           }
//         }
//       }

//       lineGeo.setDrawRange(0, lineIdx * 2)
//       lineGeo.attributes.position.needsUpdate = true
//       lineGeo.attributes.color.needsUpdate = true

//       renderer.render(scene, camera)
//     }

//     animate()

//     function onResize() {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//     }

//     window.addEventListener('resize', onResize)

//     return () => {
//       cancelAnimationFrame(animFrameRef.current)
//       window.removeEventListener('resize', onResize)
//       renderer.dispose()
//       if (container.contains(renderer.domElement)) {
//         container.removeChild(renderer.domElement)
//       }
//     }
//   }, [containerRef])
// }
