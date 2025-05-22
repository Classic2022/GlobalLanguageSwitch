/**
 * Urban Reparaturen - Language Switching
 * Handles multilingual functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize language functionality
  initLanguageSystem();
});

/**
 * Initialize language system
 */
function initLanguageSystem() {
  // Detect current language from URL or set default
  const currentLanguage = detectCurrentLanguage();
  
  // Set active language in UI
  setActiveLanguageUI(currentLanguage);
  
  // Initialize language switching
  initLanguageSwitching();
}

/**
 * Detect current language from URL or user preferences
 */
function detectCurrentLanguage() {
  // First check URL path (e.g., /en/ directory indicates English)
  const path = window.location.pathname;
  
  if (path.includes('/en/')) {
    return 'en';
  }
  
  // Check for URL parameter (e.g., ?lang=en)
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  if (langParam === 'en') {
    return 'en';
  }
  
  // Default to German
  return 'de';
}

/**
 * Set active language in the UI
 */
function setActiveLanguageUI(lang) {
  const languageLinks = document.querySelectorAll('.language-switcher a');
  
  languageLinks.forEach(link => {
    const linkLang = link.getAttribute('href').includes('/en/') ? 'en' : 'de';
    
    // Remove active class from all links
    link.classList.remove('active');
    
    // Add active class to current language link
    if (linkLang === lang) {
      link.classList.add('active');
    }
  });
}

/**
 * Initialize language switching links
 */
function initLanguageSwitching() {
  const languageLinks = document.querySelectorAll('.language-switcher a');
  
  languageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Allow normal navigation to switch languages
      // The server will serve the appropriate language version
      
      // Additional code can be added here for any custom behavior
      // when switching languages (e.g., storing preferences in cookies)
      
      // e.preventDefault(); // Uncomment to prevent default navigation
      // and handle language switching via JavaScript instead
      
      const newLang = this.getAttribute('href').includes('/en/') ? 'en' : 'de';
      
      // Track language preference in localStorage if needed
      localStorage.setItem('preferredLanguage', newLang);
      
      // If you want to switch languages without page reload (single-page app)
      // You would need to implement content swapping logic here
    });
  });
}

/**
 * Get text in the current language
 * Used for programmatically inserted content
 */
function getTranslatedText(key, fallback = '') {
  const currentLanguage = detectCurrentLanguage();
  
  // Translation dictionary
  const translations = {
    // Form messages
    'form.success': {
      'de': 'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.',
      'en': 'Thank you for your message. We will contact you shortly.'
    },
    'form.error': {
      'de': 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
      'en': 'There was a problem sending your message. Please try again later.'
    },
    'form.network.error': {
      'de': 'Ein Netzwerkfehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      'en': 'A network error occurred. Please try again later.'
    },
    
    // Form validation
    'validation.required': {
      'de': 'Dieses Feld ist erforderlich.',
      'en': 'This field is required.'
    },
    'validation.email': {
      'de': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      'en': 'Please enter a valid email address.'
    },
    
    // Button states
    'button.sending': {
      'de': 'Wird gesendet...',
      'en': 'Sending...'
    },
    'button.send': {
      'de': 'Nachricht senden',
      'en': 'Send Message'
    }
  };
  
  // Return the translation if it exists
  if (translations[key] && translations[key][currentLanguage]) {
    return translations[key][currentLanguage];
  }
  
  // Return fallback if no translation exists
  return fallback;
}