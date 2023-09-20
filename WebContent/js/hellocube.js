import * as THREE from "../../node_modules/three/build/three.module.js";


function main(){

    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({antialias : true, canvas});

    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const meterial = new THREE.MeshBasicMaterial({color : 0xffcb6b });

    const cube = new THREE.Mesh(geometry, Material);

    scene.add(cube);

    renderer.render(scene, camera);

}

main();
