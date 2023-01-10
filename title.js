import * as THREE from 'three';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'




// loader
const  loader = new FontLoader();
var pivot = new THREE.Object3D();
const scene = new THREE.Scene()
scene.background = new THREE.Color('rgb(0,3,30)');
const canvas = document.getElementById('title-three');
canvas.style.zIndex = 2;
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z =0;
camera.position.x = -0.5;
camera.position.y = 0;
camera.lookAt(new THREE.Vector3(0, 0, 0));


loader.load('./Star_Jedi_Regular.json',function(font){
    const geometry = new TextGeometry( 'MetaMorphosis', {
		font: font,
		size: 70,
		height: 6,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 6,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
	const m1 =new THREE.MeshBasicMaterial({color:'rgb(211, 211, 211)'})
	const m2 = new THREE.MeshBasicMaterial({color:'rgb(26, 17, 16)'})
	const TextMesh = new THREE.Mesh(geometry,[
		m1,  //front
		m2 //side
	])

	
	

	TextMesh.castShadow = true;
	pivot.add(TextMesh)

	TextMesh.position.y = 200
	TextMesh.position.x = 500
	TextMesh.position.z = -430
	TextMesh.rotation.x = 4
	TextMesh.rotation.y = 4.725
	TextMesh.rotation.z = 4
	// const textFolder = gui.addFolder('TextMesh')
	// textFolder.add(TextMesh.position,'x',-100,500);
	// textFolder.add(TextMesh.position,'y',-100,500);
	// textFolder.add(TextMesh.position,'z',-200,500);
	// textFolder.add(TextMesh.rotation,'x', 0, Math.PI * 2);
	// textFolder.add(TextMesh.rotation,'y', 0, Math.PI * 2);
	// textFolder.add(TextMesh.rotation,'z', 0, Math.PI * 2);

	// textFolder.open()
	
 
})



const light = new THREE.AmbientLight({color:0xffffff});
light.position.set(0,0,40);


scene.add(light);    
scene.add(camera);
scene.add(pivot);




window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

// render.renderer(scene,camera)

function animate() {
    requestAnimationFrame(animate)
	// particleSystem.rotation.y += 0.001;
	// pivot.rotation.y -= 0.00450;
    render()
	stats.update()

}

function render() {
    renderer.render(scene, camera)
}
// render();
animate()








