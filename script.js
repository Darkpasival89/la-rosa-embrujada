// Event listener para cuando la página esté lista
document.addEventListener("DOMContentLoaded", function() {
    const flower = document.querySelector(".flower");
    const fallingPetal = document.querySelector(".falling-petal");
  
    // Verifica si los elementos existen
    if (!flower || !fallingPetal) {
      console.error("Los elementos .flower o .falling-petal no se encontraron.");
      return;
    }
  
    let previousTitle = document.title; // Guardamos el título original
  
    // Animación de rotación de la flor
    let angle = 0;
    function rotateFlower() {
      angle += 0.1;
      flower.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(rotateFlower);
    }
    rotateFlower();
  
    // Reiniciar la animación del pétalo que cae
    fallingPetal.addEventListener('animationiteration', () => {
      fallingPetal.style.left = `${Math.random() * 80 + 10}vw`;
    });
  
    // Cambiar el título cuando el usuario cambia de pestaña o ventana
    window.addEventListener('blur', () => {
      previousTitle = document.title;
      document.title = '¡No te vayas! ¡Vuelve! 🥹😭'; // Cambia el título al salir
    });
  
    window.addEventListener('focus', () => {
      document.title = previousTitle; // Restablece el título cuando vuelve
    });
  });