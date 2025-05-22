/**
 * Urban Reparaturen - Utilities
 * Common utility functions used across the site
 */

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The time to wait in milliseconds
 * @return {Function} - Debounced function
 */
function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Format a phone number for display
 * @param {string} phoneNumber - The phone number to format
 * @return {string} - Formatted phone number
 */
function formatPhoneNumber(phoneNumber) {
  // Remove all non-digit characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Format based on length
  if (cleaned.length === 11) {
    // Format with country code (e.g., +49 176 1234567)
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
  } else if (cleaned.length === 10) {
    // Format without country code (e.g., 030 12345678)
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  
  // Return original if cannot format
  return phoneNumber;
}

/**
 * Check if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - Offset in pixels
 * @return {boolean} - Whether element is in viewport
 */
function isInViewport(element, offset = 0) {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) - offset &&
    rect.bottom >= offset &&
    rect.right >= offset
  );
}

/**
 * Create a cookie
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} days - Days until expiration
 */
function setCookie(name, value, days = 30) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
}

/**
 * Get a cookie value by name
 * @param {string} name - Cookie name
 * @return {string|null} - Cookie value or null if not found
 */
function getCookie(name) {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

/**
 * Delete a cookie
 * @param {string} name - Cookie name
 */
function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
}

/**
 * Get browser language
 * @return {string} - Browser language code
 */
function getBrowserLanguage() {
  return (navigator.language || navigator.userLanguage || 'de').split('-')[0];
}

/**
 * Safely append a query parameter to a URL
 * @param {string} url - The URL
 * @param {string} param - Parameter name
 * @param {string} value - Parameter value
 * @return {string} - URL with parameter added
 */
function appendQueryParam(url, param, value) {
  if (!url || !param || !value) return url;
  
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${encodeURIComponent(param)}=${encodeURIComponent(value)}`;
}