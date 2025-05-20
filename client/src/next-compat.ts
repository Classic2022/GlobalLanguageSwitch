// This file provides compatibility with Next.js imports
// that are being used in the components

// Create mock versions of Next.js components and utilities
// to prevent "process is not defined" errors

export const useRouter = () => ({
  pathname: window.location.pathname,
  push: (path: string) => {
    window.location.href = path;
  },
});

export default {
  useRouter,
};