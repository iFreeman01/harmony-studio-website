const darkColors = {
  primary: '#a258ef',
  secondary: '#6c77eb',
  dark: '#0a0a0a',
  light: '#ffffff',
  gray: '#333333',
  lightGray: '#888888',
  background: '#0a0a0a',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  gradient: 'linear-gradient(90deg, #a258ef 0%, #6c77eb 100%)'
}

const lightColors = {
  primary: '#7a32cb', // Darker purple for better contrast on light backgrounds
  secondary: '#4953d6', // Darker blue for better contrast on light backgrounds
  dark: '#222222',
  light: '#ffffff',
  gray: '#555555',
  lightGray: '#888888',
  background: '#f5f5f7', // Light background with slight purple tint
  textPrimary: '#222222',
  textSecondary: '#555555',
  gradient: 'linear-gradient(90deg, #7a32cb 0%, #4953d6 100%)'
}

export const darkTheme = {
  colors: darkColors,
  fonts: {
    primary: "'Montserrat', sans-serif",
    secondary: "'Raleway', sans-serif"
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem'
  },
  transitions: {
    standard: '0.3s ease',
    slow: '0.6s ease',
    fast: '0.15s ease'
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.15)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.2)',
    large: '0 8px 32px rgba(0, 0, 0, 0.25)'
  }
}

export const lightTheme = {
  colors: lightColors,
  fonts: {
    primary: "'Montserrat', sans-serif",
    secondary: "'Raleway', sans-serif"
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem'
  },
  transitions: {
    standard: '0.3s ease',
    slow: '0.6s ease',
    fast: '0.15s ease'
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.07)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.1)',
    large: '0 8px 32px rgba(0, 0, 0, 0.15)'
  }
}

// Export darkTheme as the default theme
export const theme = darkTheme 