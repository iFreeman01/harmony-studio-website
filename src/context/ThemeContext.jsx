import { createContext, useState, useContext, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/theme'

// Create theme context
const ThemeContext = createContext()

// Translations
const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    contact: 'Contact',
    // Navigation
    navigation: 'Navigation',
    // Footer
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    // Home page
    heroTitle: 'Professional Audio Recording Studio',
    heroSubtitle: 'Where your music comes to life',
    learnMore: 'Learn More',
    bookSession: 'Book a Session',
    // About section
    aboutUs: 'About Us',
    ourStory: 'Our Story',
    // Services
    whatWeOffer: 'What We Offer',
    comprehensiveAudioServices: 'Comprehensive Audio Services',
    servicesDescription: 'From recording and mixing to full-scale music production, we offer everything you need to bring your creative vision to life.',
    // Contact form
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    subject: 'Subject',
    send: 'Send',
    required: 'required',
    optional: 'optional',
    serviceInterestedIn: 'Service Interested In',
    tellAboutProject: 'Tell us about your project',
    // Success messages
    messageSent: 'Message Sent!',
    thankYou: 'Thank you for contacting us. We\'ll get back to you as soon as possible.',
    // Buttons
    getInTouch: 'Get in Touch',
    requestQuote: 'Request Quote',
    sendAnotherMessage: 'Send Another Message',
  },
  es: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    gallery: 'Galería',
    contact: 'Contacto',
    // Navigation
    navigation: 'Navegación',
    // Footer
    allRightsReserved: 'Todos los derechos reservados',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    // Home page
    heroTitle: 'Estudio Profesional de Grabación',
    heroSubtitle: 'Donde tu música cobra vida',
    learnMore: 'Saber Más',
    bookSession: 'Reservar Sesión',
    // About section
    aboutUs: 'Sobre Nosotros',
    ourStory: 'Nuestra Historia',
    // Services
    whatWeOffer: 'Qué Ofrecemos',
    comprehensiveAudioServices: 'Servicios Completos de Audio',
    servicesDescription: 'Desde grabación y mezcla hasta producción musical a gran escala, ofrecemos todo lo que necesitas para dar vida a tu visión creativa.',
    // Contact form
    name: 'Nombre',
    email: 'Correo',
    phone: 'Teléfono',
    message: 'Mensaje',
    subject: 'Asunto',
    send: 'Enviar',
    required: 'requerido',
    optional: 'opcional',
    serviceInterestedIn: 'Servicio de Interés',
    tellAboutProject: 'Cuéntanos sobre tu proyecto',
    // Success messages
    messageSent: '¡Mensaje Enviado!',
    thankYou: 'Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.',
    // Buttons
    getInTouch: 'Contáctanos',
    requestQuote: 'Solicitar Cotización',
    sendAnotherMessage: 'Enviar Otro Mensaje',
  }
}

// Create theme provider component
export function ThemeProvider({ children }) {
  // Check if there are saved preferences in localStorage
  const getSavedTheme = () => localStorage.getItem('theme') || 'dark';
  const getSavedLanguage = () => localStorage.getItem('language') || 'en';
  
  const [isDarkMode, setIsDarkMode] = useState(getSavedTheme() === 'dark')
  const [language, setLanguage] = useState(getSavedLanguage())
  
  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  }
  
  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  }
  
  // Update localStorage and document when preferences change
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Also update the body styles directly
    document.body.style.backgroundColor = isDarkMode 
      ? darkTheme.colors.background 
      : lightTheme.colors.background;
    
    document.body.style.color = isDarkMode 
      ? darkTheme.colors.textPrimary 
      : lightTheme.colors.textPrimary;
  }, [isDarkMode]);
  
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  // Translate function
  const t = (key) => {
    return translations[language][key] || key;
  }
  
  const value = {
    isDarkMode,
    toggleTheme,
    language,
    toggleLanguage,
    t
  };
  
  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

// Custom hook for using theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 