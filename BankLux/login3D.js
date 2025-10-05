// Logo 3D usando Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha:true, antialias:true });
renderer.setSize(150,150);
document.getElementById('logo3D').appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color:0xFFD700, metalness:0.8, roughness:0.2 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const light = new THREE.PointLight(0xFFD700, 1.5);
light.position.set(5,5,5);
scene.add(light);
const ambient = new THREE.AmbientLight(0xffffff,0.2);
scene.add(ambient);

camera.position.z = 3;

function animate(){
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene,camera);
}
animate();
