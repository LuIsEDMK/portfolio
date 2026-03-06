// Typing Effect Animation

(function() {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingElement = null;
    let texts = [];
    
    // Inicializar quando DOM estiver pronto
    document.addEventListener('DOMContentLoaded', function() {
        typingElement = document.getElementById('typing-text');
        texts = window.typingTexts || [
            'Insights Estratégicos',
            'Soluções de ML',
            'Visualizações Impactantes',
            'Valor de Negócio'
        ];
        
        if (typingElement) {
            // Iniciar após 1 segundo
            setTimeout(type, 1000);
        }
    });
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            // Pausa no final da palavra
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Próxima palavra
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
})();
