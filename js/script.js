const clockElement = document.getElementById('clock');
const timeElement = document.getElementById('time');

// Créer une instance de Hammer.js pour l'élément clock
const hammer = new Hammer(clockElement);

// Activer la détection des gestes de balayage (swipe)
hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

// Détecter le geste de balayage vers le bas
hammer.on('swipedown', function() {
  timeElement.style.color = 'red'; // Exemple de modification de la couleur de l'heure
  timeElement.style.fontSize = '4rem'; // Exemple de modification de la taille de police de l'heure
});

// Détecter le geste de balayage vers le haut
hammer.on('swipeup', function() {
  timeElement.style.color = 'blue'; // Exemple de modification de la couleur de l'heure
  timeElement.style.fontSize = '8rem'; // Exemple de modification de la taille de police de l'heure
});

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeString = hours + ':' + minutes;

  timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
