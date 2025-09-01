// Contact Form Management
console.log('=== CONTACT FORM JS LOADED ===');

// EmailJS Configuration - Load from external config file
// ⚠️ IMPORTANTE: Las credenciales están en 'emailjs-config.js' (NO subir a Git)
let EMAILJS_CONFIG = {};

// Load configuration from external file
function loadEmailJSConfig() {
  // Try to load from external config file
  if (typeof window.EMAILJS_CONFIG !== 'undefined') {
    EMAILJS_CONFIG = window.EMAILJS_CONFIG;
    console.log('✅ EmailJS config loaded from external file');
    return true;
  }
  
  // Fallback: load from script tag (for production)
  const configScript = document.querySelector('script[data-emailjs-config]');
  if (configScript) {
    try {
      EMAILJS_CONFIG = JSON.parse(configScript.textContent);
      console.log('✅ EmailJS config loaded from script tag');
      return true;
    } catch (e) {
      console.error('❌ Failed to parse EmailJS config');
    }
  }
  
  console.error('❌ EmailJS configuration not found. Please check emailjs-config.js');
  return false;
}

// Initialize EmailJS
function initializeEmailJS() {
  // First load the configuration
  if (!loadEmailJSConfig()) {
    return false;
  }
  
  // Check if EmailJS is available
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS initialized');
    return true;
  } else {
    console.error('❌ EmailJS not loaded');
    return false;
  }
}

// Setup Contact Form
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) {
    console.log('📝 Contact form not found');
    return;
  }

  // Initialize EmailJS
  if (!initializeEmailJS()) {
    console.error('❌ Failed to initialize EmailJS');
    return;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log('📧 Form submitted');
    
    // Get form data
    const formData = {
      name: form.querySelector('#name').value,
      email: form.querySelector('#email').value,
      message: form.querySelector('#message').value
    };
    
    console.log('📋 Form data:', formData);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Send email
    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
      name: formData.name,
      email: formData.email,
      message: formData.message
    })
    .then(function(response) {
      console.log('✅ Email sent successfully:', response);
      alert('Thank you! Your message has been sent successfully.');
      form.reset();
    })
    .catch(function(error) {
      console.error('❌ Email send failed:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    })
    .finally(function() {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
  });
  
  console.log('✅ Contact form setup complete');
}

// Initialize when DOM is ready
function initializeContact() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupContactForm);
  } else {
    setupContactForm();
  }
}

// Start initialization
initializeContact();

