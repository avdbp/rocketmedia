// EmailJS Configuration
// Reemplaza estas credenciales con las tuyas de EmailJS

const EMAILJS_CONFIG = {
  // Tu clave pública de EmailJS
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE",
  
  // ID del servicio de email (Gmail, Outlook, etc.)
  SERVICE_ID: "YOUR_SERVICE_ID_HERE",
  
  // ID de la plantilla de email
  TEMPLATE_ID: "YOUR_TEMPLATE_ID_HERE"
};

// Función para inicializar EmailJS
function initializeEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS inicializado correctamente');
  } else {
    console.error('❌ EmailJS no está disponible');
  }
}

// Función para enviar email
function sendEmail(formData) {
  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    {
      to_email: "rocketmedia.es@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }
  );
}

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EMAILJS_CONFIG, initializeEmailJS, sendEmail };
}

