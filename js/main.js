document.addEventListener('DOMContentLoaded', () => {

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

    /*Cambiar el valor de los participantes */
    const participantsBar = document.getElementById("participants");
    const selectedValue = document.getElementById("selectedValue");

    participantsBar.addEventListener("input", function () {
        selectedValue.textContent = participantsBar.value;
    });

    /*Cambiar el valor de la apuesta */
    const betAmountBar = document.getElementById("bet-amount");
    const selectedAmount = document.getElementById("selectedAmount");

    betAmountBar.addEventListener("input", function () {
        selectedAmount.textContent = betAmountBar.value;
    });

    /*Cuando se pulsa al boton de crear apuesta aparece una notificacion*/
    const createPoolButton = document.getElementById('create-pool-button');
    const notificationBar =document.getElementsByClassName('alert');
    const closeNotification = document.getElementsByClassName('close-notification');

    createPoolButton.addEventListener('click', () => {
        createPoolCard.classList.add('hidden');
        overlay.classList.add('hidden');

        //Mostrar la notificacion
        notificationBar[0].classList.remove('opacity-0', 'translate-y-[-100%]');
        notificationBar[0].classList.add('translate-y-[0]');

        setTimeout(() => {
            notificationBar[0].classList.add('opacity-0', 'translate-y-[-100%]');
        }, 4000);
    });

    closeNotification[0].addEventListener('click', () => {
        notificationBar[0].classList.add('opacity-0', 'translate-y-[-100%]');
    });

    //Mostrar pantalla del asistente
    const assistantBtn = document.getElementById('assistant-gif');
    const assistantCard = document.getElementById('assistant-container');

    assistantBtn.addEventListener('click', () => {

        assistantCard.classList.toggle('hidden');
        assistantCard.classList.toggle('scale-0');
        assistantCard.classList.toggle('scale-100');

        assistantBtn.classList.toggle('rounded-full');
        assistantBtn.classList.toggle('rounded-br-full');
        assistantBtn.classList.toggle('rounded-tr-full');
        assistantBtn.classList.toggle('shadow-none');
    });
})