// Event listener para cuando la página esté lista
document.addEventListener("DOMContentLoaded", function() {
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
});