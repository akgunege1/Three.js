import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color:'red'})

//Creating Cube
const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

scene.add(cubeMesh);

//initialize Perspective Camera

const camera = new THREE.PerspectiveCamera(70, window.innerWidth/innerHeight, 0.1, 100);
camera.position.z = 5;

//initialize renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
}
);

renderer.setSize(window.innerWidth,window.innerHeight);

//instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

//renderloop
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
