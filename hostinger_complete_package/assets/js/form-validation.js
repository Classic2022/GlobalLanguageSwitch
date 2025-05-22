/**
 * Urban Reparaturen - Form Validation
 * Client-side validation for contact form
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize form validation
  initFormValidation();
});

/**
 * Initialize form validation functionality
 */
function initFormValidation() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  // Form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Error displays
  const nameError = createErrorElement('name-error');
  const emailError = createErrorElement('email-error');
  const messageError = createErrorElement('message-error');
  
  // Insert error elements after each field
  if (nameInput) insertAfter(nameError, nameInput);
  if (emailInput) insertAfter(emailError, emailInput);
  if (messageInput) insertAfter(messageError, messageInput);
  
  // Validation on input events
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      validateField(this, nameError, validateName);
    });
    
    nameInput.addEventListener('blur', function() {
      validateField(this, nameError, validateName);
    });
  }
  
  if (emailInput) {
    emailInput.addEventListener('input', function() {
      validateField(this, emailError, validateEmail);
    });
    
    emailInput.addEventListener('blur', function() {
      validateField(this, emailError, validateEmail);
    });
  }
  
  if (messageInput) {
    messageInput.addEventListener('input', function() {
      validateField(this, messageError, validateMessage);
    });
    
    messageInput.addEventListener('blur', function() {
      validateField(this, messageError, validateMessage);
    });
  }
  
  // Validate form on submit
  contactForm.addEventListener('submit', function(e) {
    // Validate all fields
    const nameValid = validateField(nameInput, nameError, validateName);
    const emailValid = validateField(emailInput, emailError, validateEmail);
    const messageValid = validateField(messageInput, messageError, validateMessage);
    
    // Prevent form submission if validation fails
    if (!nameValid || !emailValid || !messageValid) {
      e.preventDefault();
      
      // Scroll to the first error
      const firstError = document.querySelector('.validation-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}

/**
 * Create error element for validation messages
 */
function createErrorElement(id) {
  const errorElement = document.createElement('div');
  errorElement.id = id;
  errorElement.className = 'validation-error';
  errorElement.style.color = '#e74c3c';
  errorElement.style.fontSize = '0.875rem';
  errorElement.style.marginTop = '0.25rem';
  errorElement.style.display = 'none';
  return errorElement;
}

/**
 * Insert element after a reference node
 */
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

/**
 * Validate field using the specified validation function
 */
function validateField(field, errorElement, validationFn) {
  if (!field || !errorElement) return true;
  
  const value = field.value.trim();
  const validationResult = validationFn(value);
  
  if (validationResult.isValid) {
    // Valid input
    errorElement.style.display = 'none';
    field.style.borderColor = '';
    return true;
  } else {
    // Invalid input
    errorElement.textContent = validationResult.message;
    errorElement.style.display = 'block';
    field.style.borderColor = '#e74c3c';
    return false;
  }
}

/**
 * Name validation function
 */
function validateName(value) {
  if (!value) {
    return {
      isValid: false,
      message: 'Bitte geben Sie Ihren Namen ein.'
    };
  }
  
  if (value.length < 2) {
    return {
      isValid: false,
      message: 'Der Name muss mindestens 2 Zeichen lang sein.'
    };
  }
  
  return { isValid: true };
}

/**
 * Email validation function
 */
function validateEmail(value) {
  if (!value) {
    return {
      isValid: false,
      message: 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
    };
  }
  
  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return {
      isValid: false,
      message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    };
  }
  
  return { isValid: true };
}

/**
 * Message validation function
 */
function validateMessage(value) {
  if (!value) {
    return {
      isValid: false,
      message: 'Bitte geben Sie eine Nachricht ein.'
    };
  }
  
  if (value.length < 10) {
    return {
      isValid: false,
      message: 'Ihre Nachricht sollte mindestens 10 Zeichen lang sein.'
    };
  }
  
  return { isValid: true };
}