import { createContext, useState, useContext, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/theme'

// Create theme context
const ThemeContext = createContext()

// Translations
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    contact: 'Contact',
    navigation: 'Navigation',
    
    // Theme toggle
    light: 'Light',
    dark: 'Dark',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    
    // Home page
    heroTitle: 'Professional Audio Recording Studio',
    heroSubtitle: 'Where your music comes to life',
    learnMore: 'Learn More',
    bookSession: 'Book a Session',
    studioExperience: 'Studio Experience',
    recentProjects: 'Recent Projects',
    clientTestimonials: 'Client Testimonials',
    readyToStart: 'Ready to Start Your Project?',
    
    // About section
    aboutUs: 'About Us',
    ourStory: 'Our Story',
    ourMission: 'Our Mission',
    ourTeam: 'Our Team',
    ourFacilities: 'Our Facilities',
    
    // Services
    whatWeOffer: 'What We Offer',
    comprehensiveAudioServices: 'Comprehensive Audio Services',
    servicesDescription: 'From recording and mixing to full-scale music production, we offer everything you need to bring your creative vision to life.',
    recording: 'Recording',
    mixing: 'Mixing',
    mastering: 'Mastering',
    production: 'Production',
    vocalProduction: 'Vocal Production',
    dolbyAtmos: 'Dolby Atmos',
    postProduction: 'Post-Production',
    ourProcess: 'Our Process',
    howWeWork: 'How We Work',
    readyToStartProject: 'Ready to Start Your Project?',
    getInTouch: 'Get in Touch',
    
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
    contactInformation: 'Contact Information',
    address: 'Address',
    followUs: 'Follow Us',
    sendUsMessage: 'Send Us A Message',
    
    // Success messages
    messageSent: 'Message Sent!',
    thankYou: 'Thank you for contacting us. We\'ll get back to you as soon as possible.',
    
    // Buttons
    getInTouch: 'Get in Touch',
    requestQuote: 'Request Quote',
    sendAnotherMessage: 'Send Another Message',
    bookNow: 'Book Now',
    
    // Gallery
    filterBy: 'Filter By',
    all: 'All',
    studio: 'Studio',
    sessions: 'Sessions',
    equipment: 'Equipment',
  },
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    gallery: 'Galería',
    contact: 'Contacto',
    navigation: 'Navegación',
    
    // Theme toggle
    light: 'Claro',
    dark: 'Oscuro',
    
    // Footer
    allRightsReserved: 'Todos los derechos reservados',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    
    // Home page
    heroTitle: 'Estudio Profesional de Grabación',
    heroSubtitle: 'Donde tu música cobra vida',
    learnMore: 'Saber Más',
    bookSession: 'Reservar Sesión',
    studioExperience: 'Experiencia en Estudio',
    recentProjects: 'Proyectos Recientes',
    clientTestimonials: 'Testimonios de Clientes',
    readyToStart: '¿Listo para comenzar tu proyecto?',
    
    // About section
    aboutUs: 'Sobre Nosotros',
    ourStory: 'Nuestra Historia',
    ourMission: 'Nuestra Misión',
    ourTeam: 'Nuestro Equipo',
    ourFacilities: 'Nuestras Instalaciones',
    
    // Services
    whatWeOffer: 'Qué Ofrecemos',
    comprehensiveAudioServices: 'Servicios Completos de Audio',
    servicesDescription: 'Desde grabación y mezcla hasta producción musical a gran escala, ofrecemos todo lo que necesitas para dar vida a tu visión creativa.',
    recording: 'Grabación',
    mixing: 'Mezcla',
    mastering: 'Masterización',
    production: 'Producción',
    vocalProduction: 'Producción Vocal',
    dolbyAtmos: 'Dolby Atmos',
    postProduction: 'Post-Producción',
    ourProcess: 'Nuestro Proceso',
    howWeWork: 'Cómo Trabajamos',
    readyToStartProject: '¿Listo para comenzar tu proyecto?',
    getInTouch: 'Contáctanos',
    
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
    contactInformation: 'Información de Contacto',
    address: 'Dirección',
    followUs: 'Síguenos',
    sendUsMessage: 'Envíanos un Mensaje',
    
    // Success messages
    messageSent: '¡Mensaje Enviado!',
    thankYou: 'Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.',
    
    // Buttons
    getInTouch: 'Contáctanos',
    requestQuote: 'Solicitar Cotización',
    sendAnotherMessage: 'Enviar Otro Mensaje',
    bookNow: 'Reservar Ahora',
    
    // Gallery
    filterBy: 'Filtrar Por',
    all: 'Todo',
    studio: 'Estudio',
    sessions: 'Sesiones',
    equipment: 'Equipamiento',
  }
}

// Create theme provider component
export function ThemeProvider({ children }) {
  // Check if there are saved preferences in localStorage
  const getSavedTheme = () => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch (e) {
      console.error("Error accessing localStorage:", e);
      return 'dark';
    }
  };
  
  const getSavedLanguage = () => {
    try {
      return localStorage.getItem('language') || 'en';
    } catch (e) {
      console.error("Error accessing localStorage:", e);
      return 'en';
    }
  };
  
  const [isDarkMode, setIsDarkMode] = useState(getSavedTheme() === 'dark')
  const [language, setLanguage] = useState(getSavedLanguage())
  
  // Toggle theme function
  const toggleTheme = () => {
    console.log("toggleTheme called, current isDarkMode:", isDarkMode);
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      console.log("Setting isDarkMode to:", newMode);
      return newMode;
    });
  }
  
  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  }
  
  // Update localStorage and document when preferences change
  useEffect(() => {
    console.log("Theme effect running, isDarkMode:", isDarkMode);
    const theme = isDarkMode ? 'dark' : 'light';
    
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error("Error setting theme in localStorage:", e);
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    
    // Also update the body styles directly
    document.body.style.backgroundColor = isDarkMode 
      ? darkTheme.colors.background 
      : lightTheme.colors.background;
    
    document.body.style.color = isDarkMode 
      ? darkTheme.colors.textPrimary 
      : lightTheme.colors.textPrimary;
      
    console.log("Theme updated to:", theme);
  }, [isDarkMode]);
  
  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      console.error("Error setting language in localStorage:", e);
    }
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
  
  console.log("Rendering ThemeProvider with isDarkMode:", isDarkMode);
  
  // Create a merged theme that includes the isDarkMode flag
  const mergedTheme = {
    ...(isDarkMode ? darkTheme : lightTheme),
    isDarkMode
  };
  
  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={mergedTheme}>
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