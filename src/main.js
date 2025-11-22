import * as THREE from 'three';

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color:'red'})

//Creating Cube
const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

//initialize camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/innerHeight, 0.1, 100);
camera.position.z = 5;

//initialize renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
}
);

scene.add(cubeMesh);
scene.add(camera);

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene, camera);