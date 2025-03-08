
/* El panel de notificaciones aparece cuando se pulsa en el icono de notificacion*/
const icon = document.querySelector('[data-icon="iconamoon:notification"]');
const notificationPanel = document.querySelector('#notification')

icon.addEventListener('click', () => {
    notificationPanel.classList.toggle('opacity-0'); 
    notificationPanel.classList.toggle('translate-y-4');  
});
