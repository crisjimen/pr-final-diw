window.onload = () => {
    const link = document.querySelector("a[href='register1.html']");
    
    if (link) {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.body.style.transition = "opacity 1s ease";
            document.body.style.opacity = 0;

            setTimeout(() => {
                window.location.href = 'register1.html';
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


