const currentLang = window.__portfolioLang || new URLSearchParams(window.location.search).get("lang") || "en";
const isSpanish = currentLang === "es";

const translations = {
  viewProject: isSpanish ? "Ver Proyecto" : "View Project",
  viewCode: isSpanish ? "Ver Código" : "View Code",
  teamRole: {
    "Web Developer": "Desarrollador Web",
    "UI/UX Designer": "Diseñadora UI/UX"
  },
  teamBio: {
    "Full-stack developer with 5+ years of experience in modern web technologies. Specializes in React.js, Node.js, and cloud deployment.":
      "Desarrollador full stack con más de 5 años de experiencia en tecnologías web modernas. Especializado en React.js, Node.js y despliegue en la nube.",
    "Creative designer focused on user experience and modern design principles. Expert in Figma, Adobe Creative Suite, and design systems.":
      "Diseñadora creativa enfocada en experiencia de usuario y principios de diseño moderno. Experta en Figma, Adobe Creative Suite y sistemas de diseño."
  },
  process: {
    Discovery: "Descubrimiento",
    Planning: "Planificación",
    Design: "Diseño",
    Development: "Desarrollo",
    Testing: "Pruebas",
    Launch: "Lanzamiento",
    "We start by understanding your business goals, target audience, and project requirements.":
      "Comenzamos entendiendo tus objetivos de negocio, tu audiencia y los requisitos del proyecto.",
    "We create a detailed project plan, wireframes, and technical specifications.":
      "Creamos un plan detallado del proyecto, wireframes y especificaciones técnicas.",
    "Our designers create beautiful, user-centered designs that align with your brand.":
      "Nuestros diseñadores crean propuestas atractivas, centradas en el usuario y alineadas con tu marca.",
    "We build your website using modern technologies and best practices.":
      "Desarrollamos tu sitio con tecnologías modernas y buenas prácticas.",
    "We thoroughly test your website across all devices and browsers.":
      "Probamos tu sitio a fondo en todos los dispositivos y navegadores.",
    "We deploy your website and provide ongoing support and maintenance.":
      "Publicamos tu sitio y brindamos soporte y mantenimiento continuo."
  }
};

const projectDescriptionEs = {
  SalesScoreKeeper:
    "Aplicación web para seguimiento de ventas y comisiones. Sistema completo de gestión comercial con métricas y reportes. Diseño de <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> y desarrollo de Rocketmedia.",
  "Explorer Tours Bonaire":
    "Sitio web para tours guiados en Bonaire. Experiencias relajadas en grupos pequeños para mostrar la belleza natural, historia y cultura de la isla.",
  "Floristería Roquetes":
    "<strong>Demo e-commerce</strong> para una floristería (flores y plantas). Usa IA para describir características y cuidados de cada planta; pruébalo en la página del producto Ficus.",
  "305 Expo":
    "Consorcio de empresas especializadas en Miami que ofrece soluciones completas en comunicación visual, exhibiciones y entornos comerciales, integrando todo el proceso internamente.",
  "Precision Property Management":
    "Sitio completo para gestión de propiedades en Florida. Diseño profesional y desarrollo full stack con foco en experiencia de usuario y funcionalidades inmobiliarias.",
  "Volta Coffee":
    "<strong>Demo CMS</strong> para una cafetería de especialidad en Barcelona. Prueba el panel de administración: haz clic en el engranaje inferior e inicia sesión con usuario <strong>admin</strong> y contraseña <strong>volta2024</strong>.",
  "Lead Form Demo":
    "<strong>Demo de captación de leads</strong> para registrar datos de contacto y negocio, y generar al instante una ficha de lead lista para flujos de CRM.",
  "Image Converter App":
    "<strong>Convertidor de imágenes</strong> para transformar archivos entre WebP, PNG y JPG, con control de calidad, renombrado y opciones de redimensionado.",
  "MindCare AI App":
    "MindCare AI es una app web de bienestar emocional que combina seguimiento de estado de ánimo, actividades de mindfulness y un asistente de IA con enfoque terapéutico.",
  "Roi Calculator App":
    "Aplicación web para calcular retorno de inversión. Interfaz intuitiva con gráficos interactivos y cálculos financieros avanzados.",
  "La Wash Londres 81":
    "Sitio web para lavandería y tintorería en Barcelona. Diseño elegante y funcional con sistema de reservas online e información de servicios.",
  "Metro X USA":
    "Plataforma web para empresa de transporte y logística. Diseño moderno y responsive con funcionalidades de seguimiento y gestión de servicios.",
  "Woodrock Design":
    "Sitio de interiores personalizados en madera y piedra para cocinas, baños, closets y más. Diseños a medida para elevar espacios con elegancia natural.",
  "SSK Email Template in HTML":
    "Plantilla de email en HTML para SSK. Diseño responsive compatible con múltiples clientes de correo. Diseño de <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> y desarrollo de Rocketmedia.",
  "SSK Mail Signature":
    "Plantilla de firma profesional para el equipo de SSK. Diseño de <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> y desarrollo de Rocketmedia.",
  "Restoration Maintenance Email Template":
    "Plantilla de email en HTML para empresa de mantenimiento. Diseño profesional y funcional para campañas de email marketing."
};

// Portfolio Data
const portfolioData = {
  projects: [
    {
      title: "SalesScoreKeeper",
      description: "Web application for sales and commission tracking. Complete commercial management system with metrics and reports. Design by <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> and development by Rocketmedia.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773024893/rocketMedia/sustitution-webp/ssk_wbfiab.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://salesscorekeeper.com/",
      repo: null,
      featured: true,
      categories: ["website"]
    },
    {
      title: "Explorer Tours Bonaire",
      description: "Website for guided island tours in Bonaire. Relaxed, small-group experiences showcasing the island's natural beauty, history, and culture.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773028402/rocketMedia/sustitution-webp/etb_suoxgd.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://etbonaire.com/",
      repo: null,
      featured: true,
      categories: ["website"]
    },
    {
      title: "Floristería Roquetes",
      description: "<strong>E-commerce demo</strong> for a flower shop (flowers and plants). Uses AI to describe each plant's characteristics and care tips—try it on the Ficus product page.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773409924/rocketMedia/sustitution-webp/floristeria_jjk1jr.webp",
      technologies: ["React.js", "E-commerce", "AI", "Vercel"],
      link: "https://e-commerce-demo-eight-gold.vercel.app/",
      repo: null,
      featured: true,
      categories: ["website", "fullstack"]
    },
    {
      title: "305 Expo",
      description: "A Miami-based consortium of specialized companies delivering complete solutions in visual communication, exhibits, and commercial environments. 305 Expo integrates every stage in-house for unmatched efficiency and consistency.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773024596/rocketMedia/sustitution-webp/305_wvvzad.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://305expo.com/",
      repo: null,
      featured: true,
      categories: ["website"]
    },
    {
      title: "Precision Property Management",
      description: "Complete website for property management in Florida. Professional design and full-stack development with focus on user experience and real estate management functionalities.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773025492/rocketMedia/sustitution-webp/precision_x08aoc.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://ppmfla.com/",
      repo: null,
      featured: true,
      categories: ["website"]
    },
    {
      title: "Volta Coffee",
      description: "<strong>CMS demo</strong> for a specialty coffee roastery in Barcelona. Try the admin panel: click the gear icon at the bottom, then log in with user <strong>admin</strong> and password <strong>volta2024</strong>.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773024596/rocketMedia/sustitution-webp/volta_xsz4dj.webp",
      technologies: ["React.js", "CMS", "Vercel"],
      link: "https://volta-theta.vercel.app/",
      repo: null,
      featured: false,
      categories: ["website", "fullstack"]
    },
    {
      title: "Lead Form Demo",
      description: "<strong>Lead generation demo</strong> to capture contact and business details, and instantly create a branded lead card ready for CRM workflows.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1777980129/rocketMedia/sustitution-webp/demo-form_qnwesq.png",
      technologies: ["HTML5", "Lead Generation", "PDF"],
      link: "https://demo-lead-form.vercel.app/",
      repo: null,
      featured: false,
      categories: ["website", "app", "fullstack"]
    },
    {
      title: "Image Converter App",
      description: "<strong>Image converter app</strong> to convert files between WebP, PNG, and JPG with quality controls, renaming tools, and resizing options.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1777981251/rocketMedia/sustitution-webp/converter-imgs_qzf436.webp",
      technologies: ["HTML5", "Image Conversion", "WebP", "PNG", "JPG"],
      link: "https://img-converter-app-24vj.vercel.app/",
      repo: null,
      featured: false,
      categories: ["website", "app"]
    },
    {
      title: "MindCare AI App",
      description: "MindCare AI is an emotional wellness web app combining mood tracking, mindfulness activities, and an AI assistant with a therapeutic approach to support daily mental health.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1772389001/rocketMedia/app_mzi3nh.webp",
      technologies: ["React.js", "AI", "Vercel"],
      link: "https://mind-care-ai-one.vercel.app/",
      repo: null,
      featured: true,
      wideCard: true,
      categories: ["app", "fullstack"]
    },
    {
      title: "Roi Calculator App",
      description: "Web application for calculating return on investment. Intuitive interface with interactive charts and advanced financial calculations.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1772424988/rocketMedia/roi_d4rg89.webp",
      technologies: ["React.js", "CSS3", "Chart.js"],
      link: "https://new-roi-calculator.vercel.app/",
      repo: "https://github.com/avdbp/roi-calculator",
      featured: false,
      wideCard: true,
      categories: ["app", "fullstack"]
    },
    {
      title: "La Wash Londres 81",
      description: "Website for laundry and dry cleaning services in Barcelona. Elegant and functional design with online booking system and service information.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773025489/rocketMedia/sustitution-webp/lawash_ol9asv.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://lawash-londresbcn.es/",
      repo: null,
      featured: false,
      categories: ["website"]
    },
    {
      title: "Metro X USA",
      description: "Web platform for transportation and logistics company. Modern and responsive design with tracking and service management functionalities.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773025490/rocketMedia/sustitution-webp/metrox_wnpbk8.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://metroxusa.com/",
      repo: null,
      featured: false,
      categories: ["website"]
    },
    {
      title: "Woodrock Design",
      description: "Custom wood and stone interiors website for kitchens, bathrooms, closets, and more. Tailored designs crafted to elevate lifestyle with natural elegance.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773025491/rocketMedia/sustitution-webp/wr_udrcda.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://woodrockusa.com/",
      repo: null,
      featured: false,
      categories: ["website"]
    },
    {
      title: "SSK Email Template in HTML",
      description: "HTML email template for SSK. Responsive design compatible with multiple email clients. Design by <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> and development by Rocketmedia.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752497/rocketMedia/003_-_Captura_ayal4m.webp",
      technologies: ["HTML5", "CSS3", "Email Marketing", "Responsive Design"],
      link: "https://ssk-mails.vercel.app/",
      repo: "https://github.com/avdbp/ssk-mails",
      featured: false,
      categories: ["other"]
    },
    {
      title: "SSK Mail Signature",
      description: "Professional email signature template for SSK team members. Design by <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> and development by Rocketmedia.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1773027497/rocketMedia/sustitution-webp/firmaAlex_cbu1z5.webp",
      technologies: ["HTML5", "CSS3", "Email Marketing", "Responsive Design"],
      link: "https://mail-signature-demo-uxys.vercel.app/",
      repo: "https://github.com/avdbp/mail-signature-demo",
      featured: false,
      categories: ["other"]
    },
    {
      title: "Restoration Maintenance Email Template",
      description: "HTML email template for maintenance company. Professional and functional design for email marketing campaigns.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752497/rocketMedia/007_-_Captura_rgho7l.webp",
      technologies: ["HTML5", "CSS3", "Email Marketing", "Responsive Design"],
      link: "https://restomain-email.vercel.app/",
      repo: "https://github.com/avdbp/restomain-email",
      featured: false,
      categories: ["other"]
    }
    
  ],
  
  team: [
    {
      name: "Alejandro Van den Bussche",
      role: "Web Developer",
      bio: "Full-stack developer with 5+ years of experience in modern web technologies. Specializes in React.js, Node.js, and cloud deployment.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1727992809/rocketMedia/alejandro_a6gkqs.png",
      skills: ["React.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript", "WordPress", "Elementor"]
    },
    {
      name: "Daniela Van den Bussche",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user experience and modern design principles. Expert in Figma, Adobe Creative Suite, and design systems.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1727994820/rocketMedia/daniela_vvtr0p.png",
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping"]
    }
  ],
  
  process: [
    {
      step: 1,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements."
    },
    {
      step: 2,
      title: "Planning",
      description: "We create a detailed project plan, wireframes, and technical specifications."
    },
    {
      step: 3,
      title: "Design",
      description: "Our designers create beautiful, user-centered designs that align with your brand."
    },
    {
      step: 4,
      title: "Development",
      description: "We build your website using modern technologies and best practices."
    },
    {
      step: 5,
      title: "Testing",
      description: "We thoroughly test your website across all devices and browsers."
    },
    {
      step: 6,
      title: "Launch",
      description: "We deploy your website and provide ongoing support and maintenance."
    }
  ]
};

// Render Projects with Repo buttons (filter: 'all' | 'website' | 'app' | 'fullstack' | 'other')
function renderProjects(filter) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  const filterValue = filter || 'all';
  let projects = filterValue === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => {
        const cats = Array.isArray(p.categories) ? p.categories : [p.category || 'other'];
        return cats.includes(filterValue);
      });
  // Orden: primero cards normales (verticales), luego wide (horizontales)
  projects = [...projects].sort((a, b) => (a.wideCard ? 1 : 0) - (b.wideCard ? 1 : 0));
  
  projectsGrid.innerHTML = projects.map(project => {
    const isWide = project.wideCard === true;
    const cardClass = isWide ? 'project-card project-card--wide' : 'project-card';
    if (isWide) {
      return `
    <div class="${cardClass}">
      <div class="project-card--wide__image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${isSpanish ? (projectDescriptionEs[project.title] || project.description) : project.description}</p>
        <div class="project-tags">
          ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.link}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">${translations.viewProject}</a>
          ${project.repo ? `<a href="${project.repo}" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">${translations.viewCode}</a>` : ''}
        </div>
      </div>
    </div>`;
    }
    return `
    <div class="${cardClass}">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${isSpanish ? (projectDescriptionEs[project.title] || project.description) : project.description}</p>
        <div class="project-tags">
          ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.link}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">${translations.viewProject}</a>
          ${project.repo ? `<a href="${project.repo}" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">${translations.viewCode}</a>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
  
  console.log('✅ Projects rendered:', projects.length, 'filter:', filterValue);
}

function initProjectFilters() {
  const container = document.querySelector('.projects-filter');
  if (!container) return;
  const buttons = container.querySelectorAll('.projects-filter__btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter') || 'all';
      buttons.forEach(b => b.classList.remove('is-active'));
      this.classList.add('is-active');
      renderProjects(filter);
    });
  });
}

// Render Team
function renderTeam() {
  const teamGrid = document.getElementById('team-grid');
  if (!teamGrid) return;
  
  teamGrid.innerHTML = portfolioData.team.map(member => {
    // Check if this is Alejandro to add social links
    const isAlejandro = member.name === "Alejandro Van den Bussche";
    const isDaniela = member.name === "Daniela Van den Bussche";
    
    return `
      <div class="team-member">
        <div class="member-image">
          <img src="${member.image}" alt="${member.name}" loading="lazy">
        </div>
        <div class="member-content">
          <h3 class="team-member__name">${member.name}</h3>
          <p class="team-member__role">${isSpanish ? (translations.teamRole[member.role] || member.role) : member.role}</p>
          <p class="team-member__bio">${isSpanish ? (translations.teamBio[member.bio] || member.bio) : member.bio}</p>
          <div class="team-member__skills">
            ${member.skills.map(skill => `<span class="team-member__skill">${skill}</span>`).join('')}
          </div>
          ${isAlejandro ? `
            <div class="team-member__social" style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem;">
              <a href="https://github.com/avdbp" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #333; border-radius: 50%; color: white; text-decoration: none; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alejandrovdb/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #0077b5; border-radius: 50%; color: white; text-decoration: none; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 8px rgba(0,119,181,0.3)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          ` : ''}
          ${isDaniela ? `
            <div class="team-member__social" style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem;">
              <a href="#" class="social-link" aria-label="LinkedIn" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #0077b5; border-radius: 50%; color: white; text-decoration: none; transition: all 0.2s ease; cursor: not-allowed; opacity: 0.6;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 2px 4px rgba(0,119,181,0.2)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'" title="LinkedIn profile coming soon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
  
  console.log('✅ Team rendered with social links for Alejandro and Daniela');
}

// Render Process
function renderProcess() {
  const processGrid = document.getElementById('process-grid');
  if (!processGrid) return;
  
  processGrid.innerHTML = portfolioData.process.map(step => `
    <div class="process-step">
      <div class="process-step__number">${step.step}</div>
      <h3 class="process-step__title">${isSpanish ? (translations.process[step.title] || step.title) : step.title}</h3>
      <p class="process-step__description">${isSpanish ? (translations.process[step.description] || step.description) : step.description}</p>
    </div>
  `).join('');
  
  console.log('✅ Process rendered');
}

// Initialize based on current page
function initializePage() {
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('projects.html')) {
    console.log('📁 Projects page detected');
    renderProjects('all');
    initProjectFilters();
  } else if (currentPage.includes('about.html')) {
    console.log('👥 About page detected');
    renderTeam();
    renderProcess();
  }
  
  console.log('✅ Page initialized');
}

// Wait for DOM to be ready
function waitAndInitialize() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
  } else {
    initializePage();
  }
}

// Start initialization
waitAndInitialize();
