// Animations - Scroll Reveal, Counter Animation, Skill Bars

// Configuração do Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Observer para scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animar skill bars
            animateSkillBars(entry.target);
            
            // Animar contadores
            animateCounters(entry.target);
        }
    });
}, observerOptions);

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    initParallax();
});

// Inicializar Scroll Reveal
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => revealObserver.observe(el));
}

// Animar Skill Bars
function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) {
            // Pequeno delay para criar efeito visual
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        }
    });
}

// Animar Contadores
function animateCounters(container) {
    const counters = container.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);
            
            counter.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        }
        
        requestAnimationFrame(updateCounter);
    });
}

// Efeito Parallax para elementos flutuantes
function initParallax() {
    const parallaxElements = document.querySelectorAll('.animate-float');
    
    // Usar throttle para performance
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax(parallaxElements);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateParallax(elements) {
    const scrolled = window.pageYOffset;
    
    elements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Animação de entrada sequencial para elementos
function staggerAnimation(elements, delay = 100) {
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

// Animação de pulsar para elementos
function pulseAnimation(element, duration = 1000) {
    element.style.animation = `pulse ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// Revelar texto gradualmente (para títulos)
function revealText(element, delay = 50) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.3s ease';
        
        element.appendChild(span);
        
        setTimeout(() => {
            span.style.opacity = '1';
        }, index * delay);
    });
}

// Efeito de onda para botões
function rippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = event.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = event.clientY - rect.top - size / 2 + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Adicionar ripple effect a todos os botões
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, button[type="submit"]');
    buttons.forEach(button => {
        button.addEventListener('click', rippleEffect);
    });
});

// Exportar funções para uso global
window.animations = {
    revealObserver,
    animateSkillBars,
    animateCounters,
    staggerAnimation,
    pulseAnimation,
    revealText,
    rippleEffect
};
