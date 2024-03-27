import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;

const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube2.position.x = -2;

group.add(cube1);
group.add(cube2);
group.add(cube3);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0.7, -0.8, 1);
scene.add(mesh);

const axesHelper = new THREE.AxesHelper(2);

scene.add(axesHelper);

// Scale
mesh.scale.set(2, 0.25, 1);
// mesh.scale.x = 2;
// mesh.scale.y = 0.25;
// mesh.scale.z = 1;

/