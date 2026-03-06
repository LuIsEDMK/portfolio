// Main JavaScript - Navegação, Mobile Menu e funcionalidades gerais

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMobileMenu();
    initSmoothScroll();
    renderProjects();
    renderSkills();
});

// Navegação - Navbar background on scroll
function initNavigation() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(2, 6, 23, 0.95)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(15, 23, 42, 0.6)';
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Fechar menu ao clicar em um link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Renderizar Projetos
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !window.projectsData) return;
    
    const projectsHTML = window.projectsData.map((project, index) => `
        <div class="project-card group relative glass-card rounded-2xl overflow-hidden scroll-reveal border border-white/5 hover:border-${project.tags[0].color}-400/30 transition-all duration-300" style="transition-delay: ${index * 100}ms;">
            <div class="relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center">
                <i class="fas ${project.icon} text-6xl ${project.textColor}/50 project-icon"></i>
                <div class="project-overlay absolute inset-0 bg-dark/90 flex items-center justify-center gap-4">
                    <a href="${project.link}" class="w-12 h-12 rounded-full bg-${project.tags[0].color}-500 flex items-center justify-center text-white hover:bg-${project.tags[0].color}-600 transition-colors">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    <a href="${project.github}" target="_blank" class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-3">
                    ${project.tags.map(tag => `
                        <span class="px-2 py-1 text-xs rounded bg-${tag.color}-500/10 text-${tag.color}-400">${tag.name}</span>
                    `).join('')}
                </div>
                <h3 class="text-xl font-bold mb-2 ${project.hoverColor} transition-colors">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4">${project.description}</p>
                <div class="flex items-center justify-between text-sm text-gray-500">
                    <span><i class="fab fa-python mr-1"></i> ${project.tech}</span>
                    <span><i class="fas fa-star mr-1"></i> ${project.metric}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    projectsGrid.innerHTML = projectsHTML;
}

// Renderizar Habilidades
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid || !window.skillsData) return;
    
    const skillsHTML = window.skillsData.map((skill, index) => {
        const delay = index * 100;
        
        // Se tem skills com barra de progresso
        if (skill.skills) {
            return `
                <div class="glass-card rounded-2xl p-6 scroll-reveal hover:border-${skill.iconColor}-400/30 transition-colors border border-transparent" style="transition-delay: ${delay}ms;">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-${skill.iconColor}-500/10 flex items-center justify-center text-${skill.iconColor}-400 text-2xl">
                            <i class="fas ${skill.icon}"></i>
                        </div>
                        <h3 class="text-xl font-bold">${skill.category}</h3>
                    </div>
                    <div class="space-y-4">
                        ${skill.skills.map(s => `
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="text-sm font-medium text-gray-300">${s.name}</span>
                                    <span class="text-sm text-${skill.iconColor}-400">${s.level}%</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-2">
                                    <div class="skill-bar bg-gradient-to-r from-${skill.iconColor}-400 to-${skill.iconColor}-600 h-2 rounded-full" style="width: 0%" data-width="${s.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Se tem items (tags)
        return `
            <div class="glass-card rounded-2xl p-6 scroll-reveal hover:border-${skill.iconColor}-400/30 transition-colors border border-transparent" style="transition-delay: ${delay}ms;">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 rounded-xl bg-${skill.iconColor}-500/10 flex items-center justify-center text-${skill.iconColor}-400 text-2xl">
                        <i class="fas ${skill.icon}"></i>
                    </div>
                    <h3 class="text-xl font-bold">${skill.category}</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                    ${skill.items.map(item => `
                        <span class="px-3 py-1 rounded-full bg-${skill.iconColor}-500/10 text-${skill.iconColor}-300 text-sm border border-${skill.iconColor}-500/20">${item}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    skillsGrid.innerHTML = skillsHTML;
}

// Utilitário para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utilitário para throttle
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
