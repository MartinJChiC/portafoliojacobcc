/// Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        });

        // Counter animation
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        const animateCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        // Intersection Observer for counter animation
        const statsSection = document.querySelector('.stats');
        let hasAnimated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounters();
                    hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);

        // Form submission with confirmation message
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    // Mostrar mensaje de confirmación
    showConfirmationMessage();
    
    // El formulario se enviará normalmente a FormSubmit
    // No hacemos e.preventDefault() para que FormSubmit funcione
});

function showConfirmationMessage() {
    // Crear el elemento del mensaje
    const message = document.createElement('div');
    message.className = 'confirmation-message';
    message.innerHTML = `
        <div class="confirmation-content">
            <div class="confirmation-icon">✓</div>
            <h3>¡Mensaje Enviado!</h3>
            <p>Gracias por contactarme. Te responderé pronto.</p>
        </div>
    `;
    
    // Agregar al body
    document.body.appendChild(message);
    
    // Mostrar con animación
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            message.remove();
        }, 300);
    }, 3000);
}

        // Form submission - FormSubmit handles the actual sending
        // No need to prevent default, let FormSubmit handle it

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });

        });
