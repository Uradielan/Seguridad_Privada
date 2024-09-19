// script.js
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetIndex = Array.from(document.querySelectorAll('.description')).findIndex(desc => desc.id === targetId);

        const descriptionWrapper = document.querySelector('.description-wrapper');
        const scrollAmount = targetIndex * descriptionWrapper.clientWidth;

        // Desplazarse lateralmente usando translateX
        descriptionWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    });
});

document.addEventListener('scroll', function() {
    var historia = document.querySelector('.historia');
    var valores = document.querySelector('.valores');
    var historiaPosition = historia.getBoundingClientRect().top;
    var valoresPosition = valores.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (historiaPosition < screenPosition) {
        historia.style.visibility = 'visible';
    }
    if (valoresPosition < screenPosition) {
        valores.style.visibility = 'visible';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Somos una empresa dedicada a la seguridad privada, con más de 25 años de experiencia brindando soluciones de protección a nuestros clientes más exigentes.";
    let index = 0;
    const speed = 25;  // Velocidad del efecto de máquina de escribir
    const typingElement = document.getElementById('typewriter');

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();  // Inicia el efecto de escritura
});


// 
setTimeout(() => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = 5 * 16;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}, 1500);