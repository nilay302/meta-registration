import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'
import { GUI } from 'dat.gui'
import Stats from 'three/examples/jsm/libs/stats.module'
// import {sceneTwo} from '/title.js'
const scene = new THREE.Scene()
// scene.add(new THREE.AxesHelper(5))
scene.background = new THREE.Color('rgb(0,3,30)');
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
// const gui = new GUI()
var pivot = new THREE.Object3D();
const loader = new FontLoader();


loader.load( './Star_Jedi_Regular.json', function ( font ) {

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

	TextMesh.position.y = -11
	TextMesh.position.x = 600
	TextMesh.position.z = -190
	TextMesh.rotation.x = 4
	TextMesh.rotation.y = 4.8
	TextMesh.rotation.z = 4
	// const textFolder = gui.addFolder('TextMesh')
	// textFolder.add(TextMesh.position,'x',-100,500);
	// textFolder.add(TextMesh.position,'y',-100,500);
	// textFolder.add(TextMesh.position,'z',-200,500);
	// textFolder.add(TextMesh.rotation,'x', 0, Math.PI * 2);
	// textFolder.add(TextMesh.rotation,'y', 0, Math.PI * 2);
	// textFolder.add(TextMesh.rotation,'z', 0, Math.PI * 2);

	// textFolder.open()
	
 

} );
//Go-lang text
loader.load( './Star_Jedi_Regular.json', function ( font ) {

	const geometry = new TextGeometry( 'Go-LANG', {
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

	TextMesh.position.y = -11
	TextMesh.position.x = -600
	TextMesh.position.z = 174
	TextMesh.rotation.x = -4.1
	TextMesh.rotation.y = 1.8
	TextMesh.rotation.z = 4.1
	
	const PlaneGeometry = new THREE.PlaneGeometry(200,200);
	const material = new THREE.MeshBasicMaterial()
	const texture = new THREE.TextureLoader().load("./Go.jpeg")
	material.map = texture
	const plane = new THREE.Mesh(PlaneGeometry, material)
	plane.position.x = -500
	plane.position.y = 184
	plane.position.z = -9
	plane.rotation.x = 0
	plane.rotation.y = 2
	plane.rotation.z = 0


	pivot.add(plane)
	
 

} );


loader.load( './Star_Jedi_Regular.json', function ( font ) {

	const geometry = new TextGeometry( 'DoCKER', {
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

	TextMesh.position.y = -11
	TextMesh.position.x = 70
	TextMesh.position.z = 701
	TextMesh.rotation.x = -3.4
	TextMesh.rotation.y = -6
	TextMesh.rotation.z = 3.2

	const PlaneGeometry = new THREE.PlaneGeometry(200,200);
	const material = new THREE.MeshBasicMaterial()
	const texture = new THREE.TextureLoader().load("./docker-container.png")
	material.map = texture
	const plane = new THREE.Mesh(PlaneGeometry, material)
	plane.position.x = -83
	plane.position.y = 164
	plane.position.z = 570
	plane.rotation.x = -3.1
	plane.rotation.y = 0
	plane.rotation.z = -3.2


	pivot.add(plane)

	// textFolder.open()
	
 

} );


loader.load( './Star_Jedi_Regular.json', function ( font ) {

	const geometry = new TextGeometry( 'WLuG', {
		font: font,
		size: 70,
		height: 6,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 8,
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

	TextMesh.position.y = -11
	TextMesh.position.x = -90
	TextMesh.position.z = -601
	TextMesh.rotation.x = -2.9
	TextMesh.rotation.y = -3
	TextMesh.rotation.z = 3.2
	// const textFolder = gui.addFolder('TextMesh')
	// textFolder.add(TextMesh.position,'x',-500,200);
	// textFolder.add(TextMesh.position,'y',-100,500);
	// textFolder.add(TextMesh.position,'z',-200,1000);
	// textFolder.add(TextMesh.rotation,'x', -Math.PI * 2, Math.PI * 2);
	// textFolder.add(TextMesh.rotation,'y', -Math.PI * 2, Math.PI * 2);
	// textFolder.add(TextMesh.rotation,'z', -Math.PI * 2, Math.PI * 2);

	// textFolder.open()
	
 

} );

// tiitle






// scene.add(titlePivot);
scene.add(pivot)
// const stats = Stats()
// document.body.appendChild(stats.dom)
var particleGeo = new THREE.BufferGeometry();
	var particleMat = new THREE.PointsMaterial({
		color: 'rgb(255, 255, 255)',
		size: 1,
		map: new THREE.TextureLoader().load('./particle.jpg'),
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false
	});
    var particleCount = 20000;
	var particleDistance = 200;
    const vertices = [];
	for (var i=0; i<particleCount; i++) {
		var posX = (Math.random() - 0.5) * particleDistance;
		var posY = (Math.random() - 0.5) * particleDistance;
		var posZ = (Math.random() - 0.5) * particleDistance;
        vertices.push(posX,posY,posZ);
	}
    particleGeo.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
	var particleSystem = new THREE.Points(
		particleGeo,
		particleMat
	);
	particleSystem.name = 'particleSystem';

	scene.add(particleSystem);

const canvas = document.getElementById('bg');
canvas.style.zIndex = -1
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// renderer.render(sceneTwo,camera);
renderer.render(scene,camera);
// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true
// controls.enablePan=false
// controls.enableZoom=false
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}


function animate() {
    requestAnimationFrame(animate)
	particleSystem.rotation.y += 0.001;
	pivot.rotation.y -= 0.00450;
    render()
	// stats.update()

}

function render() {
    renderer.render(scene, camera)
}

animate()



