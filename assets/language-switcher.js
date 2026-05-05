(() => {
  const supportedLangs = ["en", "es"];
  const langParam = new URLSearchParams(window.location.search).get("lang");
  const currentLang = supportedLangs.includes(langParam) ? langParam : "en";
  const isSpanish = currentLang === "es";
  const path = window.location.pathname;

  const setText = (selector, text) => {
    const element = document.querySelector(selector);
    if (element && typeof text === "string") {
      element.textContent = text;
    }
  };

  const setHTML = (selector, html) => {
    const element = document.querySelector(selector);
    if (element && typeof html === "string") {
      element.innerHTML = html;
    }
  };

  const setTextAll = (selector, texts) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length || !Array.isArray(texts)) return;
    elements.forEach((el, index) => {
      if (typeof texts[index] === "string") {
        el.textContent = texts[index];
      }
    });
  };

  const addLangToHref = (href) => {
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return href;
    }

    if (href.startsWith("http://") || href.startsWith("https://")) {
      return href;
    }

    if (!href.startsWith("/")) {
      return href;
    }

    const url = new URL(href, window.location.origin);
    url.searchParams.set("lang", currentLang);
    return `${url.pathname}${url.search}`;
  };

  const localPageLabels = {
    "/": { en: "Home", es: "Inicio" },
    "/index.html": { en: "Home", es: "Inicio" },
    "/projects.html": { en: "Projects", es: "Proyectos" },
    "/tools.html": { en: "Tools", es: "Herramientas" },
    "/about.html": { en: "About", es: "Nosotros" },
    "/contact.html": { en: "Contact", es: "Contacto" }
  };

  const applySharedTranslations = () => {
    const html = document.documentElement;
    html.lang = currentLang;

    setText(".nav__menu a[href='/']", isSpanish ? "Inicio" : "Home");
    setText(".nav__menu a[href='/projects.html']", isSpanish ? "Proyectos" : "Projects");
    setText(".nav__menu a[href='/tools.html']", isSpanish ? "Herramientas" : "Tools");
    setText(".nav__menu a[href='/about.html']", isSpanish ? "Nosotros" : "About");
    setText(".nav__menu a[href='/contact.html']", isSpanish ? "Contacto" : "Contact");

    setText(".footer__menu a[href='/']", isSpanish ? "Inicio" : "Home");
    setText(".footer__menu a[href='/projects.html']", isSpanish ? "Proyectos" : "Projects");
    setText(".footer__menu a[href='/tools.html']", isSpanish ? "Herramientas" : "Tools");
    setText(".footer__menu a[href='/about.html']", isSpanish ? "Nosotros" : "About");
    setText(".footer__menu a[href='/contact.html']", isSpanish ? "Contacto" : "Contact");

    setText(".skip-link", isSpanish ? "Saltar al contenido principal" : "Skip to main content");

    const copyright = document.querySelector(".footer__copyright");
    if (copyright) {
      copyright.textContent = isSpanish
        ? "© 2025 Rocket Media. Todos los derechos reservados."
        : "© 2025 Rocket Media. All rights reserved.";
    }
  };

  const applyIndexTranslations = () => {
    if (!(path === "/" || path.endsWith("/index.html"))) return;

    document.title = isSpanish
      ? "Rocket Media | Estudio Profesional de Desarrollo y Diseño Web"
      : document.title;

    setText("#hero-title", isSpanish ? "Portafolio Rocket Media" : "Rocket Media Portfolio");
    setText(".hero__subtitle", isSpanish ? "Estudio de Desarrollo y Diseño Web" : "Web Development & Design Studio");
    setText(".hero__description", isSpanish
      ? "Creamos sitios web y aplicaciones modernas y responsivas, con código limpio y experiencia de usuario excepcional."
      : "Creating modern, responsive websites and web applications with clean code and exceptional user experience.");
    setText(".hero__text .btn--primary", isSpanish ? "Ver Proyectos" : "View Projects");

    setText("#what-we-do-title", isSpanish ? "Lo Que Hacemos" : "What We Do");
    setText(".what-we-do .section-description", isSpanish
      ? "Transformamos ideas en experiencias digitales potentes. Desde el concepto hasta el lanzamiento, creamos sitios web y aplicaciones modernas y responsivas que generan resultados."
      : "We transform ideas into powerful digital experiences. From concept to deployment, we create modern, responsive websites and web applications that drive results.");
    setText("#why-choose-title", isSpanish ? "¿Por Qué Elegir Rocket Media?" : "Why Choose Rocket Media?");
    setText("#technologies-title", isSpanish ? "Tecnologías Que Usamos" : "Technologies We Use");
    setText(".technologies .section-description", isSpanish
      ? "Trabajamos con tecnologías actuales para entregar soluciones modernas y escalables"
      : "We stay current with the latest technologies to deliver cutting-edge solutions");
    setText("#designers-title", isSpanish ? "¿Eres Diseñador Web?" : "Are You a Web Designer?");
    setText(".for-designers .section-description", isSpanish
      ? "¡Somos tu partner ideal de desarrollo! Convertimos tus diseños de Figma en sitios pixel-perfect y totalmente funcionales."
      : "We're your perfect development partner! Let us transform your Figma designs into pixel-perfect, fully functional websites. Focus on what you do best—designing—while we handle the code.");
    setText("#cta-title", isSpanish ? "¿Listo para Empezar Tu Proyecto?" : "Ready to Start Your Project?");
    setText(".cta-section .section-description-red", isSpanish
      ? "Hablemos de cómo llevar tu visión a la web con un sitio moderno, rápido y orientado a resultados."
      : "Let's discuss how we can bring your vision to life with a modern, high-performing website that drives results.");

    setTextAll(".what-we-do .service-item h3", isSpanish ? [
      "Diseño Web",
      "Desarrollo Web",
      "Diseño Responsive",
      "Mantenimiento",
      "Soluciones E-commerce",
      "Sitios Corporativos",
      "Plataformas Inmobiliarias",
      "Aplicaciones Web a Medida"
    ] : [
      "Web Design",
      "Web Development",
      "Responsive Design",
      "Maintenance",
      "E-Commerce Solutions",
      "Corporate Websites",
      "Real Estate Platforms",
      "Custom Web Applications"
    ]);

    setTextAll(".what-we-do .service-item p", isSpanish ? [
      "Diseños atractivos y centrados en el usuario que convierten visitantes en clientes",
      "Sitios modernos, rápidos y escalables construidos con tecnologías actuales",
      "Webs que se ven y funcionan perfectamente en todos los dispositivos",
      "Soporte continuo y optimización para mantener tu web al máximo nivel",
      "Tiendas online completas con pagos, inventario y seguimiento de pedidos",
      "Webs WordPress profesionales para mostrar tus servicios con elegancia",
      "Sitios para gestión de propiedades con buscadores y filtros avanzados",
      "Aplicaciones React.js a medida con funciones interactivas y datos en tiempo real"
    ] : [
      "Beautiful, user-centered designs that convert visitors into customers",
      "Modern, fast, and scalable websites built with cutting-edge technologies",
      "Websites that look and work perfectly on all devices",
      "Ongoing support and optimization to keep your site performing at its best",
      "Complete online stores with payment gateways, inventory management, and order tracking systems",
      "Professional WordPress sites for businesses, showcasing your services with elegant and functional designs",
      "Property management websites with listing systems, search filters, and client portals for real estate professionals",
      "Tailored React.js applications with interactive features, real-time data, and advanced functionalities"
    ]);

    setTextAll(".why-choose-us .benefit-item h3", isSpanish ? [
      "Entrega Rápida",
      "Calidad Premium",
      "Enfoque en Rendimiento",
      "Soporte Personalizado"
    ] : [
      "Fast Delivery",
      "Premium Quality",
      "Performance Focused",
      "Personal Support"
    ]);

    setTextAll(".why-choose-us .benefit-item p", isSpanish ? [
      "Tiempos de entrega rápidos sin comprometer la calidad",
      "Código limpio y mantenible siguiendo buenas prácticas",
      "Sitios optimizados para velocidad y experiencia de usuario",
      "Comunicación directa y acompañamiento continuo"
    ] : [
      "Quick turnaround times without compromising quality",
      "Clean, maintainable code that follows industry best practices",
      "Websites optimized for speed and user experience",
      "Direct communication and ongoing relationship"
    ]);

    setTextAll(".technologies .tech-item h3", isSpanish ? [
      "Frontend",
      "Backend",
      "Responsive",
      "Despliegue"
    ] : [
      "Frontend",
      "Backend",
      "Responsive",
      "Deployment"
    ]);

    setTextAll(".for-designers .service-item h3", isSpanish ? [
      "De Figma a Código",
      "Múltiples Tecnologías",
      "Partner White Label",
      "Responsive y Optimizado"
    ] : [
      "Figma to Code",
      "Multiple Technologies",
      "White Label Partner",
      "Responsive & Optimized"
    ]);

    setTextAll(".for-designers .service-item p", isSpanish ? [
      "Envíanos tus diseños de Figma y los convertimos en código limpio y listo para producción",
      "Desarrollamos en HTML/CSS, WordPress, React.js o la tecnología que necesite tu proyecto",
      "Trabajamos detrás de escena para que tu cliente te vea como protagonista",
      "Arquitectura limpia, código SEO-friendly y entregas rápidas para cumplir tus plazos"
    ] : [
      "Send us your Figma designs and we'll convert them into clean, production-ready code with pixel-perfect precision",
      "We develop in HTML/CSS, WordPress, React.js, or any web technology your project requires. You choose, we deliver",
      "We work behind the scenes. Your client sees you as the hero. Perfect for agencies and freelance designers",
      "Clean architecture, SEO-friendly code, and fast turnaround times to meet your deadlines"
    ]);

    setText(".cta-buttons .btn--primary", isSpanish ? "Comenzar" : "Get Started");
    setText(".cta-buttons .btn--outline", isSpanish ? "Ver Nuestro Trabajo" : "View Our Work");

    const collabBtn = document.querySelector(".for-designers__content .btn--primary");
    if (collabBtn) collabBtn.textContent = isSpanish ? "Colaboremos" : "Let's Collaborate";
  };

  const applyProjectsTranslations = () => {
    if (!path.endsWith("/projects.html")) return;

    document.title = isSpanish
      ? "Portafolio de Proyectos Web | Rocket Media"
      : document.title;

    setText("#projects-hero-title", isSpanish ? "Nuestros Proyectos" : "Our Projects");
    setText(".hero__description", isSpanish
      ? "Sitios web y aplicaciones a medida: desde diseño UI/UX y frontend hasta soluciones full stack con React, WordPress y tecnologías modernas."
      : "Custom websites and web applications: from UI/UX design and frontend development to full-stack solutions and apps built with React, WordPress, and modern technologies.");

    const filterButtons = document.querySelectorAll(".projects-filter__btn");
    if (filterButtons.length >= 5) {
      filterButtons[0].textContent = isSpanish ? "Todos" : "All projects";
      filterButtons[1].textContent = isSpanish ? "Sitios Web" : "Websites";
      filterButtons[2].textContent = isSpanish ? "Apps" : "Apps";
      filterButtons[3].textContent = isSpanish ? "Full Stack" : "Full Stack";
      filterButtons[4].textContent = isSpanish ? "Otros Proyectos Web" : "Others Web Projects";
    }
  };

  const applyAboutTranslations = () => {
    if (!path.endsWith("/about.html")) return;

    document.title = isSpanish
      ? "Sobre Rocket Media | Equipo de Desarrollo Web"
      : document.title;

    setText("#about-hero-title", isSpanish ? "Sobre Rocket Media" : "About Rocket Media");
    setText(".hero__description", isSpanish
      ? "Rocket Media es un estudio de desarrollo y diseño web enfocado en crear sitios y aplicaciones modernas, responsivas y de alto rendimiento."
      : "Rocket Media is a web development and design studio focused on creating modern, responsive websites and web applications. We specialize in clean code, exceptional user experience, and delivering projects that exceed expectations.");
    setText("#team-title", isSpanish ? "Conoce Nuestro Equipo" : "Meet Our Team");
    setText(".team__subtitle", isSpanish ? "Conoce a las mentes creativas detrás de Rocket Media" : "Get to know the creative minds behind Rocket Media");
    setText("#process-title", isSpanish ? "Nuestro Proceso" : "Our Process");
    setText(".process__subtitle", isSpanish ? "Así convertimos tu visión en realidad" : "How we bring your vision to life");
    setText("#skills-title", isSpanish ? "Habilidades y Tecnologías" : "Skills & Technologies");

    setTextAll(".skills__grid .skill-item h3", isSpanish ? [
      "HTML5 y CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Diseño UI/UX",
      "Diseño Responsive",
      "Mantenimiento Web",
      "Optimización de Rendimiento",
      "Git y Control de Versiones"
    ] : [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "UI/UX Design",
      "Responsive Design",
      "Web Maintenance",
      "Performance Optimization",
      "Git & Version Control"
    ]);

    setTextAll(".skills__grid .skill-item p", isSpanish ? [
      "Estándares web modernos y diseño adaptable",
      "JavaScript moderno con las últimas funcionalidades",
      "Desarrollo de interfaces basadas en componentes",
      "Principios de diseño centrado en el usuario",
      "Enfoque mobile-first",
      "Soporte y actualizaciones continuas",
      "Enfoque en velocidad y eficiencia",
      "Flujo de trabajo profesional de desarrollo"
    ] : [
      "Modern web standards and responsive design",
      "Modern JavaScript with latest features",
      "Component-based UI development",
      "User-centered design principles",
      "Mobile-first approach",
      "Ongoing support and updates",
      "Speed and efficiency focus",
      "Professional development workflow"
    ]);
  };

  const applyContactTranslations = () => {
    if (!path.endsWith("/contact.html")) return;

    document.title = isSpanish
      ? "Contacto Rocket Media - Estudio Profesional de Desarrollo Web"
      : document.title;

    setText(".hero__title", isSpanish ? "Contáctanos" : "Get In Touch");
    setText(".hero__description", isSpanish ? "Hablemos de tu proyecto" : "Let's discuss your project");
    setText(".section-header h2", isSpanish ? "Escríbenos" : "Contact Us");
    setText(".section-header p", isSpanish
      ? "Completa el formulario y te responderemos en menos de 24 horas"
      : "Fill out the form below and we'll get back to you within 24 hours");
    setText("label[for='name']", isSpanish ? "Nombre" : "Name");
    setText("label[for='message']", isSpanish ? "Mensaje" : "Message");
    setHTML("label[for='captcha-answer']", isSpanish
      ? "Verificación de seguridad: <span id='captcha-question'></span>"
      : "Security Check: <span id='captcha-question'></span>");
    setText("#contact-form button[type='submit']", isSpanish ? "Enviar Mensaje" : "Send Message");
    setText(".contact__direct h3", isSpanish ? "O contáctanos directamente:" : "Or contact directly:");
  };

  const applyToolsTranslations = () => {
    if (!path.endsWith("/tools.html")) return;

    document.title = isSpanish
      ? "Herramientas Web | Rocket Media"
      : document.title;

    setText("#tools-hero-title", isSpanish ? "Herramientas Web" : "Web Tools");
    setText(".tools-hero .hero__description", isSpanish
      ? "Colección en vivo de efectos CSS + JavaScript, componentes y microinteracciones para usar en proyectos reales."
      : "A live collection of CSS + JavaScript effects, components, and micro-interactions you can plug into real web projects.");
    setText("#micro-interactions-title", isSpanish ? "Microinteracciones" : "Micro-interactions");
    setText(".tools-section[aria-labelledby='micro-interactions-title'] .tools-section__description", isSpanish
      ? "Pequeñas interacciones que mejoran la experiencia de usuario y hacen la interfaz más dinámica."
      : "Small, delightful interactions that enhance user experience and make interfaces feel alive.");
    setText("#components-title", isSpanish ? "Componentes y Layouts" : "Components & Layouts");
    setText(".tools-section[aria-labelledby='components-title'] .tools-section__description", isSpanish
      ? "Componentes reutilizables y patrones de layout listos para integrar en proyectos reales."
      : "Reusable components and layout patterns that can be integrated into any project.");
    setText("#cta-title", isSpanish ? "Construyamos algo juntos" : "Let's build something together");
    setText(".tools-cta p", isSpanish
      ? "¿Eres diseñador web y necesitas un desarrollador confiable? Convierto tus diseños en webs rápidas e interactivas."
      : "Are you a web designer looking for a reliable developer? I turn your Figma/PSD layouts into fast, interactive websites. If you're a business owner, I can transform your ideas into a complete web experience.");

    const ctaBtn = document.querySelector(".tools-cta .btn--primary");
    if (ctaBtn) ctaBtn.textContent = isSpanish ? "Contactar" : "Get in touch";

    setTextAll(".tools-section .demo-card__title", isSpanish ? [
      "Pulso en Hover para Botones",
      "Inclinación 3D en Hover",
      "Subrayado Animado en Enlaces",
      "Efecto Glow en Hover",
      "Cubo 3D en Hover",
      "Animaciones de Carga y Giro",
      "Slider / Carrusel Personalizado",
      "Galería Infinita",
      "Acordeón con Imágenes",
      "Tarjeta de Perfil con Hover",
      "Flip Card 3D",
      "Efecto Typewriter"
    ] : [
      "Button Hover Pulse",
      "Card Tilt on Hover",
      "Underline Reveal on Link Hover",
      "Glow Effect on Hover",
      "3D Cube Hover Effect",
      "Spinning & Loading Animations",
      "Custom Slider / Carousel",
      "Infinite Gallery Slider",
      "Accordion with Images",
      "Profile Card Hover Effect",
      "3D Card Flip Effect",
      "Typewriter Text Effect"
    ]);

    setTextAll(".tools-section .demo-card__description", isSpanish ? [
      "Un botón con efecto de onda que se expande al pasar el cursor, creando una interacción moderna y atractiva.",
      "Efecto 3D de inclinación al pasar el cursor sobre la tarjeta para aportar profundidad e interactividad.",
      "Subrayado animado que aparece de izquierda a derecha cuando pasas el cursor sobre un enlace.",
      "Efecto de brillo sutil que aparece al pasar el cursor para destacar elementos importantes.",
      "Un cubo 3D que rota y muestra diferentes caras cuando pasas el cursor.",
      "Varias animaciones de carga para comunicar progreso y mantener una experiencia visual atractiva.",
      "Slider ligero en JavaScript vanilla con transiciones suaves y controles de navegación.",
      "Galería infinita con desplazamiento automático, animaciones fluidas y vista modal.",
      "Acordeón interactivo que alterna entre secciones de contenido e imágenes relacionadas.",
      "Tarjeta de perfil que revela información adicional al pasar el cursor.",
      "Tarjeta que gira en 3D al pasar el cursor para mostrar contenido en su reverso.",
      "Animación de texto estilo máquina de escribir que escribe y borra en bucle."
    ] : [
      "A button with a ripple effect that expands on hover, creating a modern and engaging interaction.",
      "A 3D tilt effect that activates when hovering over a card, adding depth and interactivity.",
      "An animated underline that smoothly reveals from left to right when hovering over a link.",
      "A subtle glow effect that appears around an element when hovering, creating a modern highlight.",
      "A 3D cube that rotates and reveals different faces when hovered, creating an engaging 3D interaction.",
      "Various loading and spinning animations to indicate progress and keep users engaged during wait times.",
      "A lightweight, vanilla JavaScript slider with smooth transitions and navigation controls.",
      "An auto-scrolling infinite gallery with smooth animations, hover effects, and fullscreen modal view.",
      "An interactive accordion component that switches between content sections and corresponding images.",
      "A profile card that reveals additional information when hovered, creating an engaging interaction.",
      "A card that flips in 3D space when hovered, revealing content on the back side.",
      "A text animation that types out characters one by one, creating a typewriter effect that loops infinitely."
    ]);

    setTextAll(".tools-section .accordion-title", isSpanish ? [
      "Servicio Uno",
      "Servicio Dos",
      "Servicio Tres"
    ] : [
      "Service One",
      "Service Two",
      "Service Three"
    ]);

    setTextAll(".tools-section .accordion-item-principal-text p", isSpanish ? [
      "Descripción del primer servicio con información detallada sobre lo que ofrece.",
      "Descripción del segundo servicio con información detallada sobre lo que ofrece.",
      "Descripción del tercer servicio con información detallada sobre lo que ofrece."
    ] : [
      "Description of the first service with detailed information about what it offers.",
      "Description of the second service with detailed information about what it offers.",
      "Description of the third service with detailed information about what it offers."
    ]);
  };

  const applyInternalLinks = () => {
    document.querySelectorAll("a[href^='/']").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      link.setAttribute("href", addLangToHref(href));
    });
  };

  const applyLangToggle = () => {
    const toggle = document.getElementById("lang-toggle");
    if (!toggle) return;

    const nextLang = isSpanish ? "en" : "es";
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLang);

    toggle.textContent = isSpanish ? "EN" : "ES";
    toggle.setAttribute("href", `${url.pathname}${url.search}`);
    toggle.setAttribute("aria-label", isSpanish ? "Cambiar a inglés" : "Switch to Spanish");
  };

  const applyToolsLocalLabels = () => {
    document.querySelectorAll(".footer__menu a, .nav__menu a").forEach((link) => {
      const originalHref = link.getAttribute("href");
      if (!originalHref) return;
      const cleanPath = originalHref.split("?")[0];
      const labels = localPageLabels[cleanPath];
      if (!labels) return;
      link.textContent = labels[currentLang];
    });
  };

  const applyGlobalSpanishTextReplacements = () => {
    if (!isSpanish) return;

    const replacements = new Map([
      ["View Projects", "Ver Proyectos"],
      ["Get Started", "Comenzar"],
      ["View Our Work", "Ver Nuestro Trabajo"],
      ["All projects", "Todos"],
      ["Websites", "Sitios Web"],
      ["Others Web Projects", "Otros Proyectos Web"],
      ["Hover Me", "Pásame el cursor"],
      ["Hover to Tilt", "Hover para inclinar"],
      ["This card responds to your mouse movement", "Esta tarjeta responde al movimiento del cursor"],
      ["Hover to see the underline", "Pasa el cursor para ver el subrayado"],
      ["Hover for Glow", "Hover para brillo"],
      ["Front", "Frente"],
      ["Back", "Atrás"],
      ["Right", "Derecha"],
      ["Left", "Izquierda"],
      ["Top", "Arriba"],
      ["Bottom", "Abajo"],
      ["Classic Spinner", "Spinner clásico"],
      ["Bouncing Dots", "Puntos rebotando"],
      ["Bars", "Barras"],
      ["Pulse", "Pulso"],
      ["Ripple", "Onda"],
      ["Wave", "Ola"],
      ["Chasing Dots", "Puntos orbitando"],
      ["Rotating Squares", "Cuadrados girando"],
      ["Spinner Ring", "Anillo spinner"],
      ["Dots Circle", "Círculo de puntos"],
      ["Slide 1", "Diapositiva 1"],
      ["Slide 2", "Diapositiva 2"],
      ["Slide 3", "Diapositiva 3"],
      ["← Prev", "← Anterior"],
      ["Next →", "Siguiente →"],
      ["Service One", "Servicio Uno"],
      ["Service Two", "Servicio Dos"],
      ["Service Three", "Servicio Tres"],
      ["Description of the first service with detailed information about what it offers.", "Descripción del primer servicio con información detallada sobre lo que ofrece."],
      ["Description of the second service with detailed information about what it offers.", "Descripción del segundo servicio con información detallada sobre lo que ofrece."],
      ["Description of the third service with detailed information about what it offers.", "Descripción del tercer servicio con información detallada sobre lo que ofrece."],
      ["Image 1", "Imagen 1"],
      ["Image 2", "Imagen 2"],
      ["Image 3", "Imagen 3"],
      ["John Doe", "Nombre Apellido"],
      ["Web Developer", "Desarrollador Web"],
      ["LinkedIn profile coming soon", "Perfil de LinkedIn próximamente"],
      ["Front Side", "Lado Frontal"],
      ["Back Side", "Lado Trasero"],
      ["Hover to flip", "Pasa el cursor para girar"],
      ["This is the back!", "Este es el reverso"],
      ["Ready to code!", "¡Listo para programar!"]
    ]);

    document.querySelectorAll("body *").forEach((el) => {
      if (el.children.length > 0) return;
      const text = el.textContent ? el.textContent.trim() : "";
      if (!text) return;
      if (replacements.has(text)) {
        el.textContent = replacements.get(text);
      }
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    applySharedTranslations();
    applyIndexTranslations();
    applyProjectsTranslations();
    applyAboutTranslations();
    applyContactTranslations();
    applyToolsTranslations();
    applyToolsLocalLabels();
    applyGlobalSpanishTextReplacements();
    applyInternalLinks();
    applyLangToggle();
    window.__portfolioLang = currentLang;
  });
})();
