import * as THREE from "../../node_modules/three/build/three.module.js";

// create scene
const scene = new THREE.Scene();

//three.perspectiveCamera ( FOV , ratio, near/far cliping plane )
// FOV : 시야각 :: 볼 수 있는 각도
// cliping plane : 깎인 평면 :: 랜더링이 될 범위를 결정한다.
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// webGL : 무료 랜더링 프로그램.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
const geometry = new THREE.ConeGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 여기가 랜더링할 수 있는 부분
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
