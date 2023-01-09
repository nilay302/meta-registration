import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene()
scene.background = new THREE.Color('rgb(0,7,50)');
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 0;
camera.position.x = 1;
camera.position.y = 0;
camera.lookAt(new THREE.Vector3(0, 0, 0));

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


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.enablePan=false
controls.enableZoom=false
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}


function animate() {
    requestAnimationFrame(animate)
    // var particleSystems = scene.getObjectByName('particleSystem');
	particleSystem.rotation.y += 0.001;

    // while(camera.position.x <10){
    //     camera.position.x-=0.1;
    // }
    // particleGeo.setAttribute('position',new THREE.Float32BufferAttribute( rotation, 3 )  )
	// particleSystem.geometry.forEach(function(particle) {
	// 	particle.x += (Math.random() - 1) * 0.1;
	// 	particle.y += (Math.random() - 0.75) * 0.1;
	// 	particle.z += (Math.random()) * 0.1;

	// 	if (particle.x < -50) {
	// 		particle.x = 50;
	// 	}

	// 	if (particle.y < -50) {
	// 		particle.y = 50;
	// 	}

	// 	if (particle.z < -50) {
	// 		particle.z = 50;
	// 	}

	// 	if (particle.z > 50) {
	// 		particle.z = -50;
	// 	}
	// });
	// particleSystem.geometry.verticesNeedUpdate = true;
    render()
    

}

function render() {
    renderer.render(scene, camera)
}

animate()



// // docker-container
// const dockerTexture = new THREE.TextureLoader().load("docker1.webp");
// const docker = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({map:dockerTexture}));
// docker.position.set(7,-2,1 )
// scene.add(docker);