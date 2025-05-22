/**
 * Urban Reparaturen - Animations
 * Handles various animations and visual effects
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize button animations
  initButtonEffects();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize service card hover effects
  initServiceCardAnimations();
});

/**
 * Initialize button animations and effects
 */
function initButtonEffects() {
  // Add hover effects to CTA buttons
  const ctaButtons = document.querySelectorAll('.btn-primary');
  
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

/**
 * Initialize scroll-based animations
 */
function initScrollAnimations() {
  // Elements that will animate when scrolled into view
  const animatedElements = document.querySelectorAll('.service-card, .contact-item, .pricing-table');
  
  // Function to check if element is in viewport
  const isInViewport = element => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  // Function to handle scroll animation
  const handleScrollAnimation = () => {
    animatedElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initialize elements for animation
  animatedElements.forEach(element => {
    // Set initial state for animation
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Check on scroll
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Check on initial load
  handleScrollAnimation();
}

/**
 * Initialize service card animations
 */
function initServiceCardAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    // Add hover animations
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    });
  });
}