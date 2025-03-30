import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

// Crear el renderizador con antialiasing para mejorar la calidad de la imagen
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Obtener el contenedor
const container = document.getElementById("scene-container");
container.appendChild(renderer.domElement);

// Función para actualizar el tamaño del renderizador y la cámara
function updateSize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

// Llamar a la función al inicio y cuando la ventana cambie de tamaño
updateSize();
window.addEventListener("resize", updateSize);

// Geometría del cubo
const geometry = new THREE.BoxGeometry(3, 3, 3);
const edges = new THREE.EdgesGeometry(geometry);
const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const line = new THREE.LineSegments(edges, material);
scene.add(line);

// Ajustar la posición de la cámara
camera.position.set(10, 10, 5);
camera.lookAt(0, 0, 0);

// Animación
function animate() {
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);