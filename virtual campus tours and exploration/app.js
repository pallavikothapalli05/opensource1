// Event listener for profile form
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const interests = document.getElementById("interests").value;
    showRecommendations(interests);
});

// Initialize the 3D campus model using Three.js
const canvas = document.getElementById("campusModel");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a simple 3D cube as an example (could be replaced by a real 3D campus model)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

//Sign up page - Pallavi Added
// Function to redirect to the tour page when the user clicks "Start Tour"
function startTour() {
    // Redirecting to a new page where campus blocks will be displayed
    window.location.href = "tour.html";
}

