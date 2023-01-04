import * as THREE from 'three'
import { Color } from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
//sizes
const sizes = {
  width:window.innerWidth,
  height:window.innerHeight
}
// Scene
const scene = new THREE.Scene();


// // Geometry 
// const geometry = new THREE.BoxGeometry(2,2,2);


// // Materails
// const material = new THREE.MeshStandardMaterial({
//   color:"red",
// })

// const mesh = new THREE.Mesh(geometry,material);

// scene.add(mesh)

//adding camera 
const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height);
camera.position.z = 14
scene.add(camera)

const light = new THREE.PointLight(0xffffff,1,100);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight)
light.position.set(0,10,10);
scene.add(light)

// docker-container
const dockerTexture = new THREE.TextureLoader().load("docker1.webp");
const docker = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({map:dockerTexture}));
docker.position.set(7,-2,1 )
scene.add(docker);

//renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGL1Renderer({canvas});
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera);
renderer.setPixelRatio(2);
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.enablePan=false
controls.enableZoom=false
// controls.autoRotate = true
controls.autoRotateSpeed = 10



//resizes
window.addEventListener('resize',()=>{
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
 
  camera.aspect = sizes.width/sizes.height
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width,sizes.height)
})

// space background
const spcaeTexture = new THREE.TextureLoader().load('space5.png')
scene.background = spcaeTexture;


// Text-commands
// const loader = new FontLoader();

// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

// 	const geometry = new TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );

//   const textMaterial = new THREE.MeshStandardMaterial({color:0xffffff});
//   const textMesh = new THREE.Mesh(geometry,textMaterial);
//   // scene.add(textMesh);


// } );




const loop = ()=>{
  controls.update()
  docker.rotation.x += -0.006
  renderer.render(scene,camera);
  window.requestAnimationFrame(loop);
}

loop();
