/**
 * Image path constants and helper functions
 * Centralized management of all image assets
 */

// Base paths for different image categories
export const IMAGE_PATHS = {
  portraits: '/images/portraits/',
  projects: '/images/projects/',
  logos: '/images/logos/',
  icons: '/images/icons/',
};

// Helper function to get full image path
export const getImagePath = (category, filename) => {
  if (!IMAGE_PATHS[category]) {
    console.warn(`Unknown image category: ${category}`);
    return filename;
  }
  return `${IMAGE_PATHS[category]}${filename}`;
};

// Specific image constants for easy reference
export const IMAGES = {
  // Profile pictures
  COLIN_HEADSHOT: getImagePath('portraits', 'colin-headshot.jpg'),
  
  // Add more specific images as needed
  // PROJECT_SCREENSHOT: getImagePath('projects', 'app-screenshot.png'),
  // COMPANY_LOGO: getImagePath('logos', 'company-logo.svg'),
};

// Default fallback images
export const FALLBACK_IMAGES = {
  PROFILE: '/images/icons/default-avatar.svg',
  PROJECT: '/images/icons/default-project.svg',
  LOGO: '/images/icons/default-logo.svg',
};