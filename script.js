// Theme Toggle
const html = document.documentElement;
const toggleBtn = document.querySelector('.theme-toggle');
const icon = toggleBtn.querySelector('i');
const langToggle = document.getElementById('language-toggle');

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Load saved theme or prefer system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
}

toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', e => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});



// Translation Data
const translations = {
    'pt': {
        'nav-home': 'Inicio',
        'nav-about': 'Sobre',
        'nav-stack': 'Especialidades',
        'nav-projects': 'Projectos',
        'nav-contact': 'Contacto',
        'hero-title': 'Desenvolvedora Web',
        'hero-desc': 'Transformo ideias em sistemas web reais e escaláveis, com foco em PHP Laravel, React e Node.js.',
        'hero-cta': 'Vamos trabalhar juntos?',
        'about-title': 'Sobre mim',
        'about-p1': 'Desenvolvedora Web especializada na criação de sistemas modernos, aplicações web dinâmicas e soluções escaláveis. Possui conhecimentos  sólidos em desenvolvimento back-end com PHP e desenvolvimento front-end com HTML, CSS e JavaScript, com foco em performance,  segurança e experiência do utilizador. ',
        'about-p2': 'Como desenvolvedora web com mais de 2 anos de experiência, tenho me dedicado a criar sistemas robustos e escaláveis, utilizando principalmente PHP Laravel para o back-end e React para o front-end. Minha jornada inclui a entrega de mais de 15 projetos, onde cada um deles me proporcionou aprendizados valiosos e a oportunidade de aprimorar minhas habilidades técnicas e de comunicação.',
        'formation-1':'FORMAÇÃO ACADÉMICA',
        'formacao-1':'Formou-se em Informática e Programação Web no Instituto Médio Politécnico de Engenharias e Negócios em 2025.(2024-2025)',
        'formacao-2':'Concluiu o Ensino Médio (12ª Classe) na Escola Secundária Mulovote em 2023. (2023)',
        'stat-proj': 'Projetos Entregues',
        'deliver-title': 'O que entrego:',
        'deliver-1': 'Sistemas escaláveis e manuteníveis',
        'deliver-2': 'Interfaces modernas e responsivas',
        'deliver-3': 'APIs seguras e de alta performance',
        'deliver-4': 'Soluções alinhadas ao negócio',
        'stack-title': 'Stack Tecnológica',
        'spec-fe': 'Front-end',
        'spec-fe-desc': 'HTML, Javascrip,Tailwind, animações fluidas e interfaces responsivas.',
        'spec-be': 'Back-end PHP/Laravel',
        'spec-be-desc': 'Laravel, APIs RESTful, autenticação JWT, queues e arquitetura limpa.',
        'spec-node': 'Node.js',
        'spec-node-desc': 'Express, microsserviços, WebSockets e aplicações em tempo real.',
        'spec-devops': 'DevOps',
        'spec-devops-desc': 'Docker, CI/CD, deploy em ambientes cloud e consistência entre dev/prod.',
        'spec-db': 'Bancos de Dados',
        'spec-db-desc': 'MySQL, PostgreSQL, MongoDB – modelagem, índices e queries otimizadas.',
        'spec-sec': 'Segurança',
        'spec-sec-desc': 'OWASP Top 10, autenticação segura, validação de dados e proteção contra ataques comuns.',
        'projects-title': 'Projectos Recentes',
        'proj-lib-title': 'Biblioteca Online de Livros',
        'proj-lib-desc': 'Plataforma completa desenvolvida com PHP + MySQL. Inclui busca avançada, reserva de livros e painel administrativo.',
        'proj-api-title': 'API de E-commerce',
        'proj-api-desc': 'API RESTful construída com Laravel, autenticação JWT e integração com WhatsApp Business API.',
        'proj-delivery-title': 'Aplicação de Delivery de Comida',
        'proj-delivery-desc': 'Sistema completo de delivery feito em PHP Laravel. Inclui cadastro de restaurantes, cardápio dinâmico, carrinho de compras, integração de pagamentos e rastreio em tempo real.',
        'proj-school-title': 'Plataforma de Gestão Escolar',
        'proj-school-desc': 'Plataforma educacional desenvolvida com Laravel para gestão de alunos, professores e notas. Inclui geração de boletins e área para responsáveis.',
        'proj-view': 'Ver Projeto',
        'contact-title': 'Vamos Trabalhar Juntos?',
        'contact-desc': 'Estou aberta a projectos desafiadores, parcerias e novas oportunidades.',
        'contact-fast-msg': 'Prefere enviar uma mensagem rápida?',
        'contact-wa-desc': 'Chat rápido e direto',
        'contact-li-desc': 'Veja meu perfil profissional',
        'contact-gh-desc': 'Explore meus projetos',
        'contact-send': 'Enviar Mensagem'
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-stack': 'Specialties',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-title': 'Web Developer',
        'hero-desc': 'I transform ideas into real and scalable web systems, focusing on PHP Laravel, React, and Node.js.',
        'hero-cta': 'Let\'s work together?',
        'about-title': 'About me',
        'about-p1': ' Web developer specializing in building modern systems, dynamic web applications, and scalable solutions. Strong knowledge in back-end development with PHP and front-end development with HTML, CSS, and JavaScript, focusing on performance, security, and user experience.',
        'formation-1':'ACADEMIC BACKGROUND',
        'formacao-1':'Graduated in Computer Science and Web Programming at the Instituto Médio Politécnico de Engenharias e Negócios in 2025.(2024-2025)',
        'formacao-2':'Completed High School (12th Grade) at Escola Secundária Mulovote in 2023. (2023)',
        'stat-proj': 'Projects Completed',
        'deliver-title': 'What I deliver:',
        'deliver-1': 'Scalable and maintainable systems',
        'deliver-2': 'Modern and responsive interfaces',
        'deliver-3': 'Secure and high-performance APIs',
        'deliver-4': 'Business-aligned solutions',
        'stack-title': 'Tech Stack',
        'spec-fe': 'Front-end',
        'spec-fe-desc': 'HTML, JavaScript, TypeScript, Tailwind, fluid animations and responsive interfaces.',
        'spec-be': 'Back-end PHP',
        'spec-be-desc': 'Laravel, RESTful APIs, JWT authentication, queues and clean architecture.',
        'projects-title': 'Recent Projects',
        'proj-lib-title': 'Online Library System',
        'proj-lib-desc': 'Full platform developed with PHP + MySQL. Includes advanced search, book reservations, and admin panel.',
        'proj-api-title': 'E-commerce API',
        'proj-api-desc': 'RESTful API built with Laravel, JWT authentication, and WhatsApp Business API integration.',  
        'proj-delivery-title': 'Food Delivery App',
        'proj-delivery-desc': 'Complete delivery system built with PHP. Includes restaurant registration, dynamic menu, shopping cart, payment integration, and real-time tracking.',
        'proj-school-title': 'School Management Platform',
        'proj-school-desc': 'Educational platform developed with Laravel for managing students, teachers, and grades. Includes report card generation and area for guardians.',

        'proj-view': 'View Project',
        'contact-title': 'Let\'s Work Together?',
        'contact-desc': 'I am open to challenging projects, partnerships, and new opportunities.',
        'contact-fast-msg': 'Prefer to send a quick message?',
        'contact-wa-desc': 'Quick and direct chat',
        'contact-li-desc': 'View my professional profile',
        'contact-gh-desc': 'Explore my projects',
        'contact-send': 'Send Message'
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    html.setAttribute('data-lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // Update toggle button text
    langToggle.innerHTML = lang === 'pt' ? '<i class="fas fa-language"></i> EN' : '<i class="fas fa-language"></i> PT';
}

// Language Toggle
langToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const currentLang = html.getAttribute('data-lang');
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
});

// Initialize Language
const savedLang = localStorage.getItem('language') || 'pt';
setLanguage(savedLang);
// Dados dos projetos com suas respectivas imagens
const projetos = [
    {
        id: 1,
        titulo: 'Biblioteca Online de Livros',
        descricao: 'Plataforma completa desenvolvida com PHP + MySQL. Inclui busca avançada, reserva de livros e painel administrativo.',
        tituloKey: 'proj-lib-title',
        descricaoKey: 'proj-lib-desc',
        imagens: [
            'Imagem_projectos/Biblioteca/Screenshot (560).png',
            'Imagem_projectos/Biblioteca/Screenshot (562).png',
            'Imagem_projectos/Biblioteca/Screenshot (564).png'
        ]
    },
    {
        id: 2,
        titulo: 'API de E-commerce',
        descricao: 'API RESTful construída com Laravel, autenticação JWT e integração com WhatsApp Business API.',
        tituloKey: 'proj-api-title',
        descricaoKey: 'proj-api-desc',
        imagens: [
            'Imagem_projectos/API de E-commerce/Screenshot (568).png',
            'Imagem_projectos/API de E-commerce/Screenshot (541)-RUTE97.png',
            'Imagem_projectos/API de E-commerce/Screenshot (565).png',
            'Imagem_projectos/API de E-commerce/Screenshot (566).png',
            'Imagem_projectos/API de E-commerce/Screenshot (567).png',
            'Imagem_projectos/API de E-commerce/Screenshot (545).png'
            
        ]
    },
    {
        id: 3,
        titulo: 'Aplicação de Delivery de Comida',
        descricao: 'Sistema completo de delivery feito em PHP Laravel. Inclui cadastro de restaurantes, cardápio dinâmico, integração de pagamentos e rastreio em tempo real.',
        tituloKey: 'proj-delivery-title',
        descricaoKey: 'proj-delivery-desc',
        imagens: [
            'Imagem_projectos/festfood/Screenshot (569).png',
            'Imagem_projectos/festfood/Screenshot (570).png',
            'Imagem_projectos/festfood/Screenshot (572).png',
            'Imagem_projectos/festfood/Screenshot (573).png',
            'Imagem_projectos/festfood/Screenshot (574).png',
            'Imagem_projectos/festfood/Screenshot (575).png',
            'Imagem_projectos/festfood/Screenshot (576).png',
            'Imagem_projectos/festfood/Screenshot (577).png'
        ]
    },
    {
        id: 4,
        titulo: 'Plataforma Escolar de Gestão',
        descricao: 'Plataforma educacional desenvolvida com Laravel para gestão escolar, incluindo alunos, professores e notas.',
        tituloKey: 'proj-school-title',
        descricaoKey: 'proj-school-desc',
        imagens: [
            'Imagem_projectos/Site escolar/Screenshot (559).png',
            'Imagem_projectos/Site escolar/Screenshot (550).png',
            'Imagem_projectos/Site escolar/Screenshot (551).png',
            'Imagem_projectos/Site escolar/Screenshot (552).png',
            'Imagem_projectos/Site escolar/Screenshot (553).png',
            'Imagem_projectos/Site escolar/Screenshot (554).png',
            'Imagem_projectos/Site escolar/Screenshot (555).png',
            'Imagem_projectos/Site escolar/Screenshot (556).png',
            'Imagem_projectos/Site escolar/Screenshot (557).png'
            
            
        ]
    }
];

class GaleriaProjecto {
    constructor() {
        this.currentProjectId = null;
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        // Adiciona event listeners a todos os botões "Ver Projeto"
        const botoesProjecto = document.querySelectorAll('.btn-project');
        botoesProjecto.forEach((botao, index) => {
            botao.addEventListener('click', (e) => {
                e.preventDefault();
                this.abrirGaleria(index);
            });
        });

        // Fecha galeria ao clicar no overlay ou no botão X
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {
                this.fecharGaleria();
            }
        });

        // Navegação do teclado
        document.addEventListener('keydown', (e) => {
            if (this.currentProjectId !== null) {
                if (e.key === 'ArrowLeft') this.imagemAnterior();
                if (e.key === 'ArrowRight') this.proximaImagem();
                if (e.key === 'Escape') this.fecharGaleria();
            }
        });

        // Atualiza ícone ao mudar modo de tela cheia
        document.addEventListener('fullscreenchange', () => this.updateFullscreenIcon());
    }

    abrirGaleria(indiceProjecto) {
        this.currentProjectId = indiceProjecto;
        this.currentImageIndex = 0;
        
        const projeto = projetos[indiceProjecto];
        
        // Cria o modal da galeria
        const modal = this.criarModal(projeto);
        document.body.appendChild(modal);
        
        // Animação de entrada
        setTimeout(() => {
            modal.classList.add('ativo');
        }, 10);
        
        // Atualiza a imagem
        this.atualizarImagem();
        
        // Event listeners para navegação
        const prevBtn = modal.querySelector('.galeria-anterior');
        const nextBtn = modal.querySelector('.galeria-proxima');
        const dots = modal.querySelectorAll('.galeria-dot');
        const fullBtn = modal.querySelector('.galeria-fullscreen');
        
        prevBtn.addEventListener('click', () => this.imagemAnterior());
        nextBtn.addEventListener('click', () => this.proximaImagem());
        if (fullBtn) {
            fullBtn.addEventListener('click', () => this.toggleFullscreen());
        }
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => this.irParaImagem(i));
        });
    }

    criarModal(projeto) {
        const lang = document.documentElement.getAttribute('data-lang') || 'pt';
        const titulo = translations[lang][projeto.tituloKey] || projeto.titulo;
        const descricao = translations[lang][projeto.descricaoKey] || projeto.descricao;

        const modal = document.createElement('div');
        modal.className = 'modal-galeria';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="galeria-container">
                <button class="modal-close" aria-label="Fechar galeria">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="galeria-conteudo">
                    <div class="galeria-wrapper">
                        <button class="galeria-fullscreen" aria-label="Tela cheia">
                            <i class="fas fa-expand"></i>
                        </button>
                        <div class="galeria-imagens">
                            ${projeto.imagens.map((img, i) => `
                                <img src="${img}" alt="${projeto.titulo} - Imagem ${i + 1}" 
                                     class="galeria-img ${i === 0 ? 'ativa' : ''}"
                                     loading="lazy">
                            `).join('')}
                        </div>
                        
                        <!-- Botões de navegação -->
                        <button class="galeria-anterior" aria-label="Imagem anterior">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="galeria-proxima" aria-label="Próxima imagem">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        
                        <!-- Contador de imagens -->
                        <div class="galeria-contador">
                            <span class="contador-atual">1</span> / <span class="contador-total">${projeto.imagens.length}</span>
                        </div>
                        
                        <!-- Dots de navegação -->
                        <div class="galeria-dots">
                            ${projeto.imagens.map((_, i) => `
                                <button class="galeria-dot ${i === 0 ? 'ativa' : ''}" 
                                        aria-label="Ir para imagem ${i + 1}"></button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Informações do projeto -->
                    <div class="galeria-info">
                        <h2>${titulo}</h2>
                        <p>${descricao}</p>
                    </div>
                </div>
            </div>
        `;
        
        return modal;
    }

    atualizarImagem() {
        const modal = document.querySelector('.modal-galeria');
        if (!modal) return;
        
        const projeto = projetos[this.currentProjectId];
        const imgs = modal.querySelectorAll('.galeria-img');
        const dots = modal.querySelectorAll('.galeria-dot');
        
        // Remove classe ativa de todas as imagens
        imgs.forEach(img => img.classList.remove('ativa'));
        dots.forEach(dot => dot.classList.remove('ativa'));
        
        // Adiciona classe ativa à imagem atual
        imgs[this.currentImageIndex].classList.add('ativa');
        dots[this.currentImageIndex].classList.add('ativa');
        
        // Atualiza contador
        modal.querySelector('.contador-atual').textContent = this.currentImageIndex + 1;
    }

    proximaImagem() {
        const projeto = projetos[this.currentProjectId];
        this.currentImageIndex = (this.currentImageIndex + 1) % projeto.imagens.length;
        this.atualizarImagem();
    }

    imagemAnterior() {
        const projeto = projetos[this.currentProjectId];
        this.currentImageIndex = (this.currentImageIndex - 1 + projeto.imagens.length) % projeto.imagens.length;
        this.atualizarImagem();
    }

    irParaImagem(indice) {
        this.currentImageIndex = indice;
        this.atualizarImagem();
    }

    toggleFullscreen() {
        const container = document.querySelector('.galeria-container');
        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(err => {
                console.error(`Erro: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    updateFullscreenIcon() {
        const icon = document.querySelector('.galeria-fullscreen i');
        if (icon) {
            icon.className = document.fullscreenElement ? 'fas fa-compress' : 'fas fa-expand';
        }
    }

    fecharGaleria() {
        const modal = document.querySelector('.modal-galeria');
        if (modal) {
            modal.classList.remove('ativo');
            setTimeout(() => {
                modal.remove();
                this.currentProjectId = null;
            }, 300);
        }
    }
}

// Inicializa quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    new GaleriaProjecto();

    // Lógica de Scrollspy (Destaque dos links ao rolar)
    const observerOptions = {
        rootMargin: '-20% 0px -70% 0px' // Define uma área de detecção no topo
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    // Observa todas as seções e o main que possuem um ID
    document.querySelectorAll('section[id], main[id]').forEach(section => {
        observer.observe(section);
    });
});

// Inicialização
console.log('%c✅ Portfólio Rute Uamusse carregado com sucesso!', 'color: #00d4ff; font-weight: bold');
