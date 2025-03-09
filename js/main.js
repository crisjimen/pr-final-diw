
/* El panel de notificaciones aparece cuando se pulsa en el icono de notificacion*/
const icon = document.querySelector('[data-icon="iconamoon:notification"]');
const notificationPanel = document.querySelector('#notification')

icon.addEventListener('click', () => {
    notificationPanel.classList.toggle('opacity-0'); 
    notificationPanel.classList.toggle('translate-y-4');  
});

//Mostrar pantalla de crear una nueva pool
const createPoolCard = document.querySelector('.create-pool');
const button1 = document.querySelector('.create');
const button2 = document.querySelector('.home__now-title button');
const createButtons = [button1, button2];
const overlay = document.querySelector('#overlay');

createButtons.forEach(button => {
  button.addEventListener('click', () => {
      createPoolCard.classList.remove('hidden');
      overlay.classList.remove('hidden');
  });  
});

const closeCard = document.querySelector('#close-card');
closeCard.addEventListener('click', () => {
    createPoolCard.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    createPoolCard.classList.add('hidden');
    overlay.classList.add('hidden');
});

const slider = document.getElementById("participants");
const selectedValue = document.getElementById("selectedValue");

slider.addEventListener("input", function () {
    selectedValue.textContent = slider.value;
});