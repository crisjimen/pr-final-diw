window.onload = () => {
    const link = document.querySelector("a[href='register.html']");
    
    if (link) {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.body.style.transition = "opacity 1s ease";
            document.body.style.opacity = 0;

            setTimeout(() => {
                window.location.href = 'register.html';
            }, 500);
        });

    }
};

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

//Mostrar diferentes partes del documento según la sección en la que se clica
const navLinks = document.querySelectorAll('.form__sidebar h2');

const forms = document.querySelectorAll('.form__main')

navLinks.forEach(navLink => {

    navLink.addEventListener('click', (e) => {
    //Se despliegan diferentes tarjetas dependiendo del link que se clique
    e.preventDefault();
    navLinks.forEach(link => link.classList.remove('selected'));
    e.target.classList.add('selected');

    if(e.target.textContent.includes('Basic \nInformation')){
        forms[0].style.display='flex';
        forms[1].style.display='none';
        forms[2].style.display='none';
    }

    if(e.target.textContent.includes('Personal \nIdentification')){
        forms[0].style.display='none';
        forms[1].style.display='flex';
        forms[2].style.display='none';
    }

    if(e.target.textContent.includes('Security \n& Payment')){
        forms[0].style.display='none';
        forms[1].style.display='none';
        forms[2].style.display='flex';
    }

    
});
});

//Función para que los botones de 'next' lleven a la siguiente sección
const btn1 = document.querySelector('.btnNext:nth-of-type(1) button');
btn1.addEventListener('click', (e) => {
    forms[0].style.display='none';
    forms[1].style.display='flex';
    forms[2].style.display='none';

    navLinks.forEach(link => link.classList.remove('selected'));
    navLinks[1].classList.add('selected');
}); 

const btn2 = document.querySelector('#btn2 button');
btn2.addEventListener('click', (e) => {
    forms[1].style.display='none';
    forms[2].style.display='flex';

    navLinks[1].classList.remove('selected');
    navLinks[2].classList.add('selected')
});

//Ir a la página principal cuando se da al boton de register
const btnRegister = document.querySelector('.btnRegister');

btnRegister.addEventListener('click', (e) => {
    e.preventDefault;
    window.location.href = 'main.html';
})





