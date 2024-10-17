// Función para la animación del pétalo que cae
function fallingPetal() {
  const flower = document.querySelector(".flower");
  const fallingPetal = document.querySelector(".falling-petal");

  // Verifica si los elementos existen
  if (!flower || !fallingPetal) {
    console.error("Los elementos .flower o .falling-petal no se encontraron.");
    return;
  }

  // Reiniciar la animación del pétalo que cae
  fallingPetal.addEventListener('animationiteration', () => {
    fallingPetal.style.left = `${Math.random() * 80 + 10}vw`;
  });
}

// Event listener para cuando la página esté lista
document.addEventListener("DOMContentLoaded", function() {
  fallingPetal();
});

// Event listener para el botón
document.querySelector(".btn").addEventListener("click", function() {
  console.log("Botón clickado!");
});