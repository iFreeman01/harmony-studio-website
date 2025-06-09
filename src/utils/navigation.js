// Navigation utility for handling section scrolling
export const navigateToSection = (navigate, path, sectionId = null) => {
  if (sectionId) {
    // If we're navigating to a section on the home page
    if (path === '/' || path === '/home') {
      navigate(`/#${sectionId}`)
    } else {
      // If we're navigating to a different page, go there first then scroll
      navigate(path)
    }
  } else {
    // Regular navigation
    navigate(path)
  }
}

// Scroll to section utility
export const scrollToSection = (sectionId, offset = 0) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

// Scroll to top utility
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Navigate to page and scroll to top
export const navigateToPageTop = (navigate, path) => {
  navigate(path)
  // Small delay to ensure navigation completes before scrolling
  setTimeout(() => {
    scrollToTop()
  }, 100)
}

// Handle service navigation from home page
export const handleServiceNavigation = (navigate, serviceName) => {
  // Navigate to the specific service detail page
  navigate(`/service/${serviceName}`)
} 