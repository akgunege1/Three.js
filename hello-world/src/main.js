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
const cubePosition = new THREE.Vector3(0,1,0); //I have declared the position for Cube.
cubeMesh.position.copy(cubePosition); //I have set the position for the so called Cube.
cubeMesh.scale.set(2,2,1); //You can scale the Cube via this line.
const AxesHelper = new THREE.AxesHelper(2); //With AxesHelper you can figure the which axes you'd like to work on out.

scene.add(AxesHelper); 
scene.add(cubeMesh);

//initialize Perspective Camera

const camera = new THREE.PerspectiveCamera(70, window.innerWidth/innerHeight, 0.1, 100);
camera.position.z = 5;

// console.log(cubeMesh.position.distanceTo(camera.position));  You can calculate the distance between to coordinates.

//initialize renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true  //Setting the antialias true fixes the issue.
}
);

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));  //If your devicePixelRatio is greater than 1, this helps aswell.

//instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; //Softens the movement of camera.
controls.autoRotate = false; //Automaticly rotates our cube

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/innerHeight; //Aspect ratio parameter.
  camera.updateProjectionMatrix;  //If you are updating any kind of Parameter, You call this function so it can rearrange the props size.
  renderer.setSize(window.innerWidth,window.innerHeight);
})

//renderloop
const renderloop = () => {
  controls.update(); //It updates the movement every frame so you can move the camera.
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop); //The renderloop itself
};

renderloop();
