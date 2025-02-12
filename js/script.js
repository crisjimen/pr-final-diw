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

document.addEventListener("mousemove", function(e) {
    const cursor = document.querySelector('.cursor');

    requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});

document.querySelectorAll("input, textarea").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        document.querySelector(".cursor").style.opacity = "0";
    });
    element.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").style.opacity = "1";
    });
});