// Portfolio Data
const portfolioData = {
  projects: [
    {
      title: "InspireAI",
      description: "AI-powered Salesforce solutions for modern enterprises. Design by <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> and development by Rocketmedia.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756755663/rocketMedia/010_-_Captura_copy_ozjdbp.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://inspireai.com/",
      repo: null,
      featured: true
    },
    {
      title: "SalesScoreKeeper",
      description: "Web application for sales and commission tracking. Complete commercial management system with metrics and reports. Design by <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> and development by Rocketmedia.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756753904/rocketMedia/010_-_Captura_yc1qws.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://salesscorekeeper.com/",
      repo: null,
      featured: false
    },
    {
      title: "Precision Property Management",
      description: "Complete website for property management in Florida. Professional design and full-stack development with focus on user experience and real estate management functionalities.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752497/rocketMedia/006_-_Captura_xlvxfb.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://ppmfla.com/",
      repo: null,
      featured: true
    },
    {
      title: "ROI Calculator in React",
      description: "Web application for calculating return on investment. Intuitive interface with interactive charts and advanced financial calculations.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752496/rocketMedia/002_-_Captura_ucvfbz.webp",
      technologies: ["React.js", "CSS3", "Chart.js"],
      link: "https://roi-calculator-sable.vercel.app/",
      repo: "https://github.com/avdbp/roi-calculator",
      featured: false
    },
    {
      title: "Commissions App Demo",
      description: "Demo application for commission management. Complete system for sales calculation and tracking with administrative dashboard.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752496/rocketMedia/001_-_Captura_dgfkxd.webp",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
      link: "https://commissions-app-demo-2rf1.vercel.app/",
      repo: "https://github.com/avdbp/commissions-app-demo",
      featured: false
    },
    {
      title: "VMA Immigration",
      description: "Website for immigration services. Informative platform with contact forms and resources for immigration procedures.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752497/rocketMedia/008_-_Captura_ogknrk.webp",
      technologies: ["React.js", "CSS3", "JavaScript"],
      link: "https://inmmigration-dv2dp9ppz-alejandros-projects-75565a5d.vercel.app/",
      repo: "https://github.com/avdbp/inmmigration-vma",
      featured: false
    },
    {
      title: "Floristería Emmy Sants",
      description: "Complete e-commerce for flower shop. Full-stack development with order system, inventory management and payment gateway. Collaboration with Ana Gabriela Medina.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756753367/rocketMedia/009_-_Captura_n9u52n.webp",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Netlify"],
      link: "https://floristeriaemmysants.netlify.app/",
      repo: "https://github.com/avdbp/frontend-emmy-sants",
      featured: true
    },
    {
      title: "La Wash Londres 81",
      description: "Website for laundry and dry cleaning services in Barcelona. Elegant and functional design with online booking system and service information.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752496/rocketMedia/004_-_Captura_ydev3e.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://lawash-londresbcn.es/",
      repo: null,
      featured: false
    },
    {
      title: "SSK Email Template in HTML",
      description: "HTML email template for SSK. Responsive design compatible with multiple email clients. Design by <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> and development by Rocketmedia.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752497/rocketMedia/003_-_Captura_ayal4m.webp",
      technologies: ["HTML5", "CSS3", "Email Marketing", "Responsive Design"],
      link: "https://ssk-mails.vercel.app/",
      repo: "https://github.com/avdbp/ssk-mails",
      featured: false
    },
    {
      title: "SSK Mail Signature",
      description: "Professional email signature template for SSK team members. Design by <a href='https://estefanialombardo.com/' target='_blank' rel='noopener noreferrer'>Estefania Lombardo</a> and development by Rocketmedia.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756758550/rocketMedia/010_-_Captura_copy_2_yv7xpq.webp",
      technologies: ["HTML5", "CSS3", "Email Marketing", "Responsive Design"],
      link: "https://mail-signature-demo-uxys.vercel.app/",
      repo: "https://github.com/avdbp/mail-signature-demo",
      featured: false
    },
    {
      title: "Metro X USA",
      description: "Web platform for transportation and logistics company. Modern and responsive design with tracking and service management functionalities.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752497/rocketMedia/005_-_Captura_vzcupe.webp",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript"],
      link: "https://metroxusa.com/",
      repo: null,
      featured: false
    },
    {
      title: "Restoration Maintenance Email Template",
      description: "HTML email template for maintenance company. Professional and functional design for email marketing campaigns.",
      image: "https://res.cloudinary.com/dqph2qm49/image/upload/v1756752497/rocketMedia/007_-_Captura_rgho7l.webp",
      technologies: ["HTML5", "CSS3", "Email Marketing", "Responsive Design"],
      link: "https://restomain-email.vercel.app/",
      repo: "https://github.com/avdbp/restomain-email",
      featured: false
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

// Render Projects with Repo buttons
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.link}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">View Project</a>
          ${project.repo ? `<a href="${project.repo}" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">View Code</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  
  console.log('✅ Projects rendered with repo buttons');
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
          <p class="team-member__role">${member.role}</p>
          <p class="team-member__bio">${member.bio}</p>
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
      <h3 class="process-step__title">${step.title}</h3>
      <p class="process-step__description">${step.description}</p>
    </div>
  `).join('');
  
  console.log('✅ Process rendered');
}

// Initialize based on current page
function initializePage() {
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('projects.html')) {
    console.log('📁 Projects page detected');
    renderProjects();
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
