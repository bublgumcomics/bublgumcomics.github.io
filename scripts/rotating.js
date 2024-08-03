// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 250 / 250, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(300, 300);
document.getElementById('threejs-canvas').appendChild(renderer.domElement);

// Add ambient light to the scene with a specific color
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Adjust color (white) and intensity (0.5)
scene.add(ambientLight);

// Add directional light to cast shadows
const light = new THREE.DirectionalLight(0xff7db4, 1);
light.position.set(0, 0, 1).normalize();
light.castShadow = false;
scene.add(light);

let model;

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load('models/bublgumlogo3d.glb', function(gltf) {
    model = gltf.scene;
    model.castShadow = true; // Enable shadow casting for the model
    model.receiveShadow = false; // Enable shadow receiving for the model
    scene.add(model);
}, undefined, function(error) {
    console.error(error);
});

// Set camera position
camera.position.z = 8;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the model
    if (model) {
        model.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}
animate();