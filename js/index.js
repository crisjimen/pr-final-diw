const buttons = document.querySelectorAll('.header__buttons button');

buttons.forEach((button) => {

    button.addEventListener('click', (e)=> {
        e.preventDefault();

        if(e.target.classList.contains('register')){
            window.location.href = 'pages/register.html';
        }

        if(e.target.classList.contains('login')){
            window.location.href = 'pages/login.html'
        }

    })

});

//EL cursor lleva un pequeño círculo que lo sigue
document.addEventListener("mousemove", function(e) {
    const cursor = document.querySelector('.cursor');

    requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});

//Quitar el cursor cuando entra a un input o a un button
document.querySelectorAll("input,button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        document.querySelector(".cursor").style.opacity = "0";
    });
    element.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").style.opacity = "1";
    });
});