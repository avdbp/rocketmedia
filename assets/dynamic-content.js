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
  
  teamGrid.innerHTML = portfolioData.team.map(member => `
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
      </div>
    </div>
  `).join('');
  
  console.log('✅ Team rendered');
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
