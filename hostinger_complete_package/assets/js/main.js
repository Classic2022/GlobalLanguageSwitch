/**
 * Urban Reparaturen - Main JavaScript
 * Handles form submission and various interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
  // Form handling
  initContactForm();
  
  // Mobile menu toggle
  initMobileMenu();
  
  // Smooth scrolling for anchor links
  initSmoothScroll();
  
  // Language toggle functionality
  initLanguageToggle();
});

/**
 * Initialize contact form submission with PHP
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');
  
  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Store original button text
      const originalButtonText = submitButton.textContent;
      
      // Show loading state
      submitButton.textContent = 'Wird gesendet...';
      submitButton.disabled = true;
      
      // Reset status messages
      if (formSuccess) formSuccess.style.display = 'none';
      if (formError) formError.style.display = 'none';
      
      // Submit form using fetch API
      fetch('form-handler.php', {
        method: 'POST',
        body: new FormData(contactForm)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        
        // Handle response
        if (data.success) {
          if (formSuccess) {
            formSuccess.textContent = data.message;
            formSuccess.style.display = 'block';
            contactForm.reset(); // Reset form on success
          }
        } else {
          if (formError) {
            formError.textContent = data.message;
            formError.style.display = 'block';
          }
        }
        
        // Scroll to the message
        const displayedMessage = data.success ? formSuccess : formError;
        if (displayedMessage) {
          displayedMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      })
      .catch(error => {
        console.error('Form submission error:', error);
        
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        
        // Show error message
        if (formError) {
          formError.textContent = 'Ein Netzwerkfehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
          formError.style.display = 'block';
        }
      });
    });
  }
}

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (mainNav.classList.contains('active') && 
          !mainNav.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#" or an empty link
      if (targetId === '#' || !targetId) return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Close mobile menu if open
        const mainNav = document.querySelector('.main-nav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          if (menuToggle) menuToggle.classList.remove('active');
        }
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Initialize language toggle functionality
 */
function initLanguageToggle() {
  const languageLinks = document.querySelectorAll('.language-switcher a');
  
  languageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Language switching is handled by actual page navigation
      // This is just for any additional functionality if needed
      
      // Remove active class from all links
      languageLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
    });
  });
}

/**
 * Utility: Detect if user is on mobile device
 */
function isMobileDevice() {
  return (window.innerWidth <= 768) || 
         (navigator.maxTouchPoints > 0) || 
         (navigator.msMaxTouchPoints > 0);
}

/**
 * Utility: Add animation classes when elements come into view
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const checkIfInView = () => {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;
    
    elements.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.offsetTop;
      const elementBottomPosition = elementTopPosition + elementHeight;
      
      // Check if element is in view
      if (
        (elementBottomPosition >= windowTopPosition) && 
        (elementTopPosition <= windowBottomPosition)
      ) {
        element.classList.add('in-view');
      }
    });
  };
  
  // Initial check
  checkIfInView();
  
  // Check on scroll
  window.addEventListener('scroll', checkIfInView);
}