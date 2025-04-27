import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Scene oluştur
const scene = new THREE.Scene();

// Kamera oluştur
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Renderer oluştur
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff); // Beyaz arka plan

document.body.appendChild(renderer.domElement);


// Küçük bir küp oluşturalım
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//Kübün kenarları belli olması için siyah bir Outline ekliyorum.
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Siyah çizgi
const lineSegments = new THREE.LineSegments(edges, lineMaterial);
scene.add(lineSegments);



// OrbitControls ekleyelim
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Daha yumuşak hareket için

// Resize olunca kamera ve renderer güncelle
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animasyon döngüsü
function animate() {
  requestAnimationFrame(animate);

  controls.update(); // Kontrolleri her frame güncelle

  renderer.render(scene, camera);
}

animate();
