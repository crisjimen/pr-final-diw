
/* El panel de notificaciones aparece cuando se pulsa en el icono de notificacion*/
const icon = document.querySelector('[data-icon="iconamoon:notification"]');
const notificationPanel = document.querySelector('#notification')

icon.addEventListener('click', () => {
    notificationPanel.classList.toggle('hidden');
    notificationPanel.classList.toggle('absolute');    
});
