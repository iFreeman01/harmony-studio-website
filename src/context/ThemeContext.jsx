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
    heroTitle: 'Where Music Comes to Life',
    heroSubtitle: 'Premium music recording studio with state-of-the-art equipment and exceptional sound engineers.',
    ourServices: 'Our Services',
    bookSession: 'Book a Session',
    learnMore: 'Learn More',
    studioExperience: 'Studio Experience',
    recentProjects: 'Recent Projects',
    clientTestimonials: 'Client Testimonials',
    readyToStart: 'Ready to Start Your Project?',
    scrollDown: 'Scroll Down',
    
    // About section (Home page)
    aboutUsSubtitle: 'About Us',
    aboutUsTitle: 'A Home for Creativity',
    aboutUsDescription: 'Casa Koba was born from a love of music and a dream to help artists realize their sound. Our home studio is a creative space where passion and professionalism come together, offering personalized guidance and top-tier sound for every project.',
    aboutUsContent: 'Located in the heart of the city, we\'ve helped hundreds of artists bring their musical visions to life. From emerging talents to established stars, our team of experienced engineers and producers are dedicated to achieving the perfect sound for every project.',
    
    // Services section (Home page)
    servicesSubtitle: 'Our Services',
    servicesTitle: 'Professional Audio Solutions',
    servicesDescription: 'From recording and mixing to mastering and production, we offer a comprehensive suite of services to bring your music to life.',
    viewAllServices: 'View All Services',
    
    // Service cards
    recordingTitle: 'Recording',
    recordingDescription: 'State-of-the-art recording facilities with premium microphones, preamps, and acoustically treated rooms.',
    mixingTitle: 'Mixing',
    mixingDescription: 'Expert mixing services to blend your tracks into a cohesive, professional-sounding production.',
    masteringTitle: 'Mastering',
    masteringDescription: 'Professional mastering to optimize your music for streaming platforms, vinyl, and other distribution formats.',
    
    // Testimonials section
    testimonialsSubtitle: 'Testimonials',
    testimonialsTitle: 'What Our Clients Say',
    testimonialsDescription: 'Don\'t just take our word for it. Hear from the artists who\'ve created their masterpieces with us.',
    
    // Testimonial content
    testimonial1: 'Working with Casa Koba was a game-changer for our album. Their attention to detail and technical expertise brought our music to a whole new level.',
    testimonial1Author: 'Alex Johnson',
    testimonial1Role: 'Lead Vocalist, The Resonants',
    testimonial2: 'The team at Casa Koba doesn\'t just record your music, they elevate it. Their state-of-the-art equipment and experienced engineers create magic.',
    testimonial2Author: 'Samantha Lee',
    testimonial2Role: 'Artist',
    testimonial3: 'I\'ve recorded in studios all over the world, but the vibe and sound quality at Casa Koba is unmatched. It\'s become our creative home.',
    testimonial3Author: 'Michael Torres',
    testimonial3Role: 'Producer & Songwriter',
    
    // CTA section
    ctaTitle: 'Ready to Create Your Masterpiece?',
    ctaDescription: 'Book a session at Casa Koba today and take your music to the next level.',
    contactMe: 'Contact me',
    
    // About page
    ourStory: 'Our Story',
    ourMission: 'Our Mission',
    ourTeam: 'Our Team',
    ourFacilities: 'Our Facilities',
    
    // About page content
    aboutPageTitle: 'About Casa Koba',
    aboutPageSubtitle: 'Our story, our team, and our mission',
    
    // Story section
    storySubtitle: 'Our Story',
    storyTitle: 'From Vision to Reality',
    storyDescription: 'Born from a deep love for music, Casa Koba is a home studio dedicated to delivering exceptional sound quality in every project.',
    storyContent1: 'What began as a simple idea has grown into a creative hub, offering recording, mixing, and personalized guidance to artists. With a passion for nurturing talent, we strive to make every musical vision a reality.',
    storyContent2: 'Our goal is to become Puebla\'s premier studio, where creativity meets professionalism in a welcoming, inspiring space. At Casa Koba, we believe great music starts with passion—and we\'re here to help you share yours with the world.',
    
    // Values section
    valuesSubtitle: 'Our Values',
    valuesTitle: 'What Sets Us Apart',
    valuesDescription: 'At Casa Koba, our approach is guided by core principles that ensure every project receives the care and attention it deserves.',
    
    // Value cards
    technicalExcellenceTitle: 'Technical Excellence',
    technicalExcellenceDescription: 'We constantly invest in the finest equipment and maintain rigorous technical standards to ensure your recordings sound impeccable.',
    creativeComfortTitle: 'Creative Comfort',
    creativeComfortDescription: 'We\'ve designed our spaces to inspire creativity and provide a comfortable, relaxed environment where artists can do their best work.',
    collaborativeApproachTitle: 'Collaborative Approach',
    collaborativeApproachDescription: 'We believe in being partners in your creative process, offering guidance when needed while respecting your artistic vision.',
    innovativeSpiritTitle: 'Innovative Spirit',
    innovativeSpiritDescription: 'We\'re not afraid to push boundaries and explore new techniques, always staying at the forefront of recording technology and practices.',
    
    // Team section
    teamSubtitle: 'Our Team',
    teamTitle: 'Meet the Experts',
    teamDescription: 'Our team of skilled professionals brings diverse experiences and specialized expertise to every project.',
    
    // Team members
    johnFreeman: 'John Freeman',
    johnRole: 'Composer & Musician',
    johnBio: 'Composer and musician passionate about drums and music creation, dedicated to helping others fulfill their dreams through production and the love of art.',
    koba: 'Koba',
    kobaRole: 'Cute Pet',
    kobaBio: 'The studio\'s faithful canine companion, cheerful and playful, who inspires with his enthusiasm for every note, even though his greatest passion is eating and sleeping.',
    
    // Facilities section
    facilitiesSubtitle: 'Our Facilities',
    facilitiesTitle: 'Our Home Studio',
    facilitiesDescription: 'At Casa Koba, we provide top-tier equipment and services to bring your music to life.',
    facilitiesContent1: 'Our studio features professional-grade equipment including industry-standard microphones, high-quality preamps, and acoustically treated recording spaces designed to capture the perfect sound.',
    facilitiesContent2: 'From intimate vocal recordings to full band sessions, our flexible setup accommodates projects of all sizes while maintaining the highest audio quality standards.',
    
    // Facilities list
    recordingEquipment: 'Professional Recording Equipment',
    recordingEquipmentDesc: 'Industry-standard microphones, preamps, and audio interfaces for pristine sound capture.',
    acousticTreatment: 'Acoustic Treatment',
    acousticTreatmentDesc: 'Professionally designed acoustic spaces optimized for recording and mixing.',
    mixingMastering: 'Mixing & Mastering',
    mixingMasteringDesc: 'Precision engineering to polish your sound.',
    comfortableEnvironment: 'Comfortable Environment',
    comfortableEnvironmentDesc: 'A welcoming space designed to inspire creativity and artistic expression.',
    
    // Services page
    whatWeOffer: 'What We Offer',
    comprehensiveAudioServices: 'Comprehensive Audio Services',
    servicesPageDescription: 'From recording and mixing to full-scale music production, we offer everything you need to bring your creative vision to life.',
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
    
    // Service descriptions
    recordingServiceDesc: 'Captura tu sonido con precisión y claridad en nuestros estudios acústicamente optimizados.',
    mixingServiceDesc: 'Transforma tus pistas en bruto en una producción pulida y cohesiva con nuestros servicios expertos de mezcla.',
    masteringServiceDesc: 'El toque final que asegura que tu música suene mejor en cualquier plataforma o formato.',
    productionServiceDesc: 'Producción musical de servicio completo desde el concepto hasta el master final.',
    vocalProductionServiceDesc: 'Grabación y producción vocal especializada para hacer brillar tus voces.',
    dolbyAtmosServiceDesc: 'Mezcla de audio inmersivo para Apple Music, Tidal y otras plataformas de audio espacial.',
    postProductionServiceDesc: 'Servicios de audio para cine, TV, podcasts y otros proyectos de medios.',
    
    // Service details - Recording
    recordingDetail1: 'Grabación multipista en espacios acústicamente diseñados',
    recordingDetail2: 'Grabación de banda completa o instrumentos individuales',
    recordingDetail3: 'Micrófonos premium, preamplificadores y equipo externo',
    recordingDetail4: 'Configuraciones flexibles de cabina para aislamiento y grabación en vivo',
    recordingDetail5: 'Músicos de sesión disponibles bajo solicitud',
    
    // Service details - Mixing
    mixingDetail1: 'Mezcla profesional en salas de control acústicamente tratadas',
    mixingDetail2: 'Enfoque híbrido de mezcla analógica y digital',
    mixingDetail3: 'Balanceado detallado, paneo y EQ',
    mixingDetail4: 'Procesamiento creativo de efectos y automatización',
    mixingDetail5: 'Opciones de mezcla de stems disponibles',
    
    // Service details - Mastering
    masteringDetail1: 'Masterización de precisión en ambiente acústicamente optimizado',
    masteringDetail2: 'Procesamiento analógico y digital para profundidad y claridad',
    masteringDetail3: 'Optimización específica por formato (streaming, vinilo, CD)',
    masteringDetail4: 'Masterización de stems disponible para proyectos complejos',
    masteringDetail5: 'Masterización de referencia y revisiones incluidas',
    
    // Service details - Production
    productionDetail1: 'Servicios completos de arreglo y producción',
    productionDetail2: 'Productores experimentados en múltiples géneros',
    productionDetail3: 'Producción de beats y composición instrumental',
    productionDetail4: 'Músicos de sesión de primer nivel disponibles',
    productionDetail5: 'Paquetes completos desde pre-producción hasta master final',
    
    // Service details - Vocal Production
    vocalDetail1: 'Micrófonos vocales premium y cadena de señal',
    vocalDetail2: 'Cabinas vocales cómodas y acústicamente tratadas',
    vocalDetail3: 'Coaching experto para rendimiento óptimo',
    vocalDetail4: 'Corrección de tono y edición vocal',
    vocalDetail5: 'Efectos vocales creativos y procesamiento',
    
    // Service details - Dolby Atmos
    dolbyDetail1: 'Ambiente de mezcla certificado Dolby Atmos especializado',
    dolbyDetail2: 'Mezcla de audio espacial para mayor compromiso del oyente',
    dolbyDetail3: 'Convierte grabaciones estéreo a audio 3D inmersivo',
    dolbyDetail4: 'Optimizado para formato de audio espacial de Apple Music',
    dolbyDetail5: 'Compatibilidad completa con todas las principales plataformas de streaming',
    
    // Service details - Post-Production
    postDetail1: 'Edición de diálogo y ADR (Reemplazo Automático de Diálogo)',
    postDetail2: 'Diseño de sonido y grabación Foley',
    postDetail3: 'Composición musical y scoring',
    postDetail4: 'Mezcla de sonido envolvente (5.1, 7.1, Atmos)',
    postDetail5: 'Entrega final de audio en todos los formatos requeridos',
    
    // Buttons
    requestQuote: 'Request Quote',
    bookNow: 'Book Now',
    
    // Gallery
    filterBy: 'Filter By',
    all: 'All',
    homeStudio: 'Home Studio',
    sessions: 'Sessions',
    equipment: 'Equipment',
    
    // Gallery page content
    audioSamplesGalleryTitle: 'Audio Samples & Studio Gallery',
    audioSamplesGallerySubtitle: 'Listen to our work and explore our studio spaces',
    listenToSamples: 'Listen to Our Samples',
    studioGallery: 'Studio Gallery',
    checkLatestVideo: 'Check my latest video',
    
    // Image alt texts
    recordingStudioEquipment: 'Recording Studio Equipment',
    mixingConsole: 'Mixing Console',
    studioControlRoom: 'Studio Control Room',
    liveRecordingSession: 'Live Recording Session',
    
    // Contact methods
    emailUs: 'Email Us',
    emailUsDescription: 'Have a detailed question? Email us directly, and we\'ll respond within 24 hours.',
    sendEmail: 'Send Email',
    whatsappDescription: 'Need quick assistance? Chat with us on WhatsApp for real-time support!',
    chatOnWhatsApp: 'Chat on WhatsApp',
    
    // Page headers
    contactPageTitle: 'Contact Us',
    contactPageSubtitle: 'Get in touch to start your project',
    servicesPageTitle: 'Our Services',
    servicesPageSubtitle: 'Professional studio services for every project',
    galleryPageTitle: 'Gallery',
    galleryPageSubtitle: 'Take a look inside our studio',
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
    heroTitle: 'Donde la Música Cobra Vida',
    heroSubtitle: 'Estudio de grabación musical premium con equipamiento de última generación y ingenieros de sonido excepcionales.',
    ourServices: 'Nuestros Servicios',
    bookSession: 'Reservar Sesión',
    learnMore: 'Saber Más',
    studioExperience: 'Experiencia en Estudio',
    recentProjects: 'Proyectos Recientes',
    clientTestimonials: 'Testimonios de Clientes',
    readyToStart: '¿Listo para comenzar tu proyecto?',
    scrollDown: 'Desplázate Hacia Abajo',
    
    // About section (Home page)
    aboutUsSubtitle: 'Sobre Nosotros',
    aboutUsTitle: 'Un Hogar para la Creatividad',
    aboutUsDescription: 'Casa Koba nació del amor por la música y el sueño de ayudar a los artistas a realizar su sonido. Nuestro estudio casero es un espacio creativo donde la pasión y el profesionalismo se unen, ofreciendo orientación personalizada y sonido de primer nivel para cada proyecto.',
    aboutUsContent: 'Ubicados en el corazón de la ciudad, hemos ayudado a cientos de artistas a dar vida a sus visiones musicales. Desde talentos emergentes hasta estrellas establecidas, nuestro equipo de ingenieros y productores experimentados se dedica a lograr el sonido perfecto para cada proyecto.',
    
    // Services section (Home page)
    servicesSubtitle: 'Nuestros Servicios',
    servicesTitle: 'Soluciones Profesionales de Audio',
    servicesDescription: 'Desde grabación y mezcla hasta masterización y producción, ofrecemos una suite completa de servicios para dar vida a tu música.',
    viewAllServices: 'Ver Todos los Servicios',
    
    // Service cards
    recordingTitle: 'Grabación',
    recordingDescription: 'Instalaciones de grabación de última generación con micrófonos premium, preamplificadores y salas acústicamente tratadas.',
    mixingTitle: 'Mezcla',
    mixingDescription: 'Servicios expertos de mezcla para combinar tus pistas en una producción cohesiva y de sonido profesional.',
    masteringTitle: 'Masterización',
    masteringDescription: 'Masterización profesional para optimizar tu música para plataformas de streaming, vinilo y otros formatos de distribución.',
    
    // Testimonials section
    testimonialsSubtitle: 'Testimonios',
    testimonialsTitle: 'Lo Que Dicen Nuestros Clientes',
    testimonialsDescription: 'No solo tomes nuestra palabra. Escucha a los artistas que han creado sus obras maestras con nosotros.',
    
    // Testimonial content
    testimonial1: 'Trabajar con Casa Koba fue un cambio radical para nuestro álbum. Su atención al detalle y experiencia técnica llevó nuestra música a un nivel completamente nuevo.',
    testimonial1Author: 'Alex Johnson',
    testimonial1Role: 'Vocalista Principal',
    testimonial2: 'El equipo de Casa Koba no solo graba tu música, la eleva. Su equipamiento de última generación e ingenieros experimentados crean magia.',
    testimonial2Author: 'Samantha Lee',
    testimonial2Role: 'Artista en Crecimiento',
    testimonial3: 'He grabado en estudios de todo el mundo, pero el ambiente y la calidad de sonido en Casa Koba es incomparable. Se ha convertido en nuestro hogar creativo.',
    testimonial3Author: 'Michael Torres',
    testimonial3Role: 'Productor y Compositor',
    
    // CTA section
    ctaTitle: '¿Listo para Crear tu Obra Maestra?',
    ctaDescription: 'Reserva una sesión en Casa Koba hoy y lleva tu música al siguiente nivel.',
    contactMe: 'Contáctame',
    
    // About page
    ourStory: 'Nuestra Historia',
    ourMission: 'Nuestra Misión',
    ourTeam: 'Nuestro Equipo',
    ourFacilities: 'Nuestras Instalaciones',
    
    // About page content
    aboutPageTitle: 'Sobre Nosotros',
    aboutPageSubtitle: 'Descubre nuestra historia y pasión por la música',
    
    // Story section
    storySubtitle: 'Nuestra Historia',
    storyTitle: 'De la Visión a la Realidad',
    storyDescription: 'Nacido de un profundo amor por la música, Casa Koba es un estudio casero dedicado a entregar una calidad de sonido excepcional en cada proyecto.',
    storyContent1: 'Lo que comenzó como una simple idea se ha convertido en un centro creativo, ofreciendo grabación, mezcla y orientación personalizada a artistas. Con una pasión por fomentar el talento, nos esforzamos por hacer realidad cada visión musical.',
    storyContent2: 'Nuestro objetivo es convertirnos en el estudio líder de Puebla, donde la creatividad se encuentra con la profesionalidad en un espacio acogedor e inspirador. En Casa Koba, creemos que buena música comienza con pasión—y estamos aquí para ayudarte a compartirla con el mundo.',
    
    // Values section
    valuesSubtitle: 'Nuestros Valores',
    valuesTitle: '¿Qué Nos Diferencia?',
    valuesDescription: 'En Casa Koba, nuestro enfoque está guiado por principios centrales que garantizan que cada proyecto reciba el cuidado y la atención que se merece.',
    
    // Value cards
    technicalExcellenceTitle: 'Excelencia Técnica',
    technicalExcellenceDescription: 'Siempre invertimos en el mejor equipo y mantenemos altos estándares técnicos para garantizar que tus grabaciones suenen impecables.',
    creativeComfortTitle: 'Confort Creativo',
    creativeComfortDescription: 'Hemos diseñado nuestros espacios para inspirar la creatividad y proporcionar un entorno cómodo y relajado donde los artistas pueden trabajar mejor.',
    collaborativeApproachTitle: 'Enfoque Colaborativo',
    collaborativeApproachDescription: 'Creemos en ser socios en tu proceso creativo, ofreciendo orientación cuando sea necesario mientras respetamos tu visión artística.',
    innovativeSpiritTitle: 'Espíritu Innovador',
    innovativeSpiritDescription: 'No nos da miedo avanzar y explorar nuevas técnicas, siempre estando al frente de la tecnología y las prácticas de grabación.',
    
    // Team section
    teamSubtitle: 'Nuestro Equipo',
    teamTitle: 'Conoce a los Expertos',
    teamDescription: 'Nuestro equipo de profesionales con experiencia diversa aporta conocimientos especializados para cada proyecto.',
    
    // Team members
    johnFreeman: 'John Freeman',
    johnRole: 'Compositor y Músico',
    johnBio: 'Compositor y músico apasionado por los tambores y la creación musical, dedicado a ayudar a otros a cumplir sus sueños a través de la producción y el amor por el arte.',
    koba: 'Koba',
    kobaRole: 'Mascota Adorable',
    kobaBio: 'La compañera fiel y juguetona del estudio, alegre y juguetona, que inspira con su entusiasmo por cada nota, aunque su mayor pasión sea comer y dormir.',
    
    // Facilities section
    facilitiesSubtitle: 'Nuestras Instalaciones',
    facilitiesTitle: 'Nuestro Estudio Casero',
    facilitiesDescription: 'En Casa Koba, proporcionamos equipo de última generación y servicios para dar vida a tu música.',
    facilitiesContent1: 'Nuestro estudio cuenta con equipo profesional de última generación, incluyendo micrófonos de estándar de la industria, preamplificadores de alta calidad y espacios de grabación acústicamente tratados diseñados para capturar el sonido perfecto.',
    facilitiesContent2: 'Desde grabaciones vocales íntimas hasta sesiones de banda, nuestro montaje flexible se adapta a proyectos de todos los tamaños mientras se mantiene el más alto estándar de calidad de audio.',
    
    // Facilities list
    recordingEquipment: 'Equipamiento de Grabación Profesional',
    recordingEquipmentDesc: 'Micrófonos de estándar de la industria, preamplificadores y interfaces de audio para capturar el sonido limpio.',
    acousticTreatment: 'Tratamiento Acústico',
    acousticTreatmentDesc: 'Espacios acústicos profesionalmente diseñados optimizados para grabación y mezcla.',
    mixingMastering: 'Mezcla y Masterización',
    mixingMasteringDesc: 'Ingeniería de precisión para pulir tu sonido.',
    comfortableEnvironment: 'Ambiente Cómodo',
    comfortableEnvironmentDesc: 'Un espacio acogedor diseñado para inspirar la creatividad y la expresión artística.',
    
    // Services page
    whatWeOffer: 'Qué Ofrecemos',
    comprehensiveAudioServices: 'Servicios Completos de Audio',
    servicesPageDescription: 'Desde grabación y mezcla hasta producción musical a gran escala, ofrecemos todo lo que necesitas para dar vida a tu visión creativa.',
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
    
    // Service descriptions
    recordingServiceDesc: 'Captura tu sonido con precisión y claridad en nuestros estudios acústicamente optimizados.',
    mixingServiceDesc: 'Transforma tus pistas en bruto en una producción pulida y cohesiva con nuestros servicios expertos de mezcla.',
    masteringServiceDesc: 'El toque final que asegura que tu música suene mejor en cualquier plataforma o formato.',
    productionServiceDesc: 'Producción musical de servicio completo desde el concepto hasta el master final.',
    vocalProductionServiceDesc: 'Grabación y producción vocal especializada para hacer brillar tus voces.',
    dolbyAtmosServiceDesc: 'Mezcla de audio inmersivo para Apple Music, Tidal y otras plataformas de audio espacial.',
    postProductionServiceDesc: 'Servicios de audio para cine, TV, podcasts y otros proyectos de medios.',
    
    // Service details - Recording
    recordingDetail1: 'Grabación multipista en espacios acústicamente diseñados',
    recordingDetail2: 'Grabación de banda completa o instrumentos individuales',
    recordingDetail3: 'Micrófonos premium, preamplificadores y equipo externo',
    recordingDetail4: 'Configuraciones flexibles de cabina para aislamiento y grabación en vivo',
    recordingDetail5: 'Músicos de sesión disponibles bajo solicitud',
    
    // Service details - Mixing
    mixingDetail1: 'Mezcla profesional en salas de control acústicamente tratadas',
    mixingDetail2: 'Enfoque híbrido de mezcla analógica y digital',
    mixingDetail3: 'Balanceado detallado, paneo y EQ',
    mixingDetail4: 'Procesamiento creativo de efectos y automatización',
    mixingDetail5: 'Opciones de mezcla de stems disponibles',
    
    // Service details - Mastering
    masteringDetail1: 'Masterización de precisión en ambiente acústicamente optimizado',
    masteringDetail2: 'Procesamiento analógico y digital para profundidad y claridad',
    masteringDetail3: 'Optimización específica por formato (streaming, vinilo, CD)',
    masteringDetail4: 'Masterización de stems disponible para proyectos complejos',
    masteringDetail5: 'Masterización de referencia y revisiones incluidas',
    
    // Service details - Production
    productionDetail1: 'Servicios completos de arreglo y producción',
    productionDetail2: 'Productores experimentados en múltiples géneros',
    productionDetail3: 'Producción de beats y composición instrumental',
    productionDetail4: 'Músicos de sesión de primer nivel disponibles',
    productionDetail5: 'Paquetes completos desde pre-producción hasta master final',
    
    // Service details - Vocal Production
    vocalDetail1: 'Micrófonos vocales premium y cadena de señal',
    vocalDetail2: 'Cabinas vocales cómodas y acústicamente tratadas',
    vocalDetail3: 'Coaching experto para rendimiento óptimo',
    vocalDetail4: 'Corrección de tono y edición vocal',
    vocalDetail5: 'Efectos vocales creativos y procesamiento',
    
    // Service details - Dolby Atmos
    dolbyDetail1: 'Ambiente de mezcla certificado Dolby Atmos especializado',
    dolbyDetail2: 'Mezcla de audio espacial para mayor compromiso del oyente',
    dolbyDetail3: 'Convierte grabaciones estéreo a audio 3D inmersivo',
    dolbyDetail4: 'Optimizado para formato de audio espacial de Apple Music',
    dolbyDetail5: 'Compatibilidad completa con todas las principales plataformas de streaming',
    
    // Service details - Post-Production
    postDetail1: 'Edición de diálogo y ADR (Reemplazo Automático de Diálogo)',
    postDetail2: 'Diseño de sonido y grabación Foley',
    postDetail3: 'Composición musical y scoring',
    postDetail4: 'Mezcla de sonido envolvente (5.1, 7.1, Atmos)',
    postDetail5: 'Entrega final de audio en todos los formatos requeridos',
    
    // Buttons
    requestQuote: 'Solicitar Cotización',
    bookNow: 'Reservar Ahora',
    
    // Gallery
    filterBy: 'Filtrar Por',
    all: 'Todo',
    homeStudio: 'Estudio Casero',
    sessions: 'Sesiones',
    equipment: 'Equipamiento',
    
    // Gallery page content
    audioSamplesGalleryTitle: 'Muestras de Audio & Galería de Estudio',
    audioSamplesGallerySubtitle: 'Escucha nuestro trabajo y explora nuestros espacios de estudio',
    listenToSamples: 'Escucha Nuestras Muestras',
    studioGallery: 'Galería de Estudio',
    checkLatestVideo: 'Revisa mi último video',
    
    // Image alt texts
    recordingStudioEquipment: 'Equipamiento de Estudio de Grabación',
    mixingConsole: 'Consola de Mezcla',
    studioControlRoom: 'Sala de Control de Estudio',
    liveRecordingSession: 'Sesión de Grabación en Vivo',
    
    // Contact methods
    emailUs: 'Envíanos un Email',
    emailUsDescription: '¿Tienes una pregunta detallada? Envíanos un email directamente y te responderemos en 24 horas.',
    sendEmail: 'Enviar Email',
    whatsappDescription: '¿Necesitas asistencia rápida? Chatea con nosotros en WhatsApp para soporte en tiempo real!',
    chatOnWhatsApp: 'Chatear en WhatsApp',
    
    // Page headers
    contactPageTitle: 'Contáctanos',
    contactPageSubtitle: 'Ponte en contacto para comenzar tu proyecto',
    servicesPageTitle: 'Nuestros Servicios',
    servicesPageSubtitle: 'Servicios profesionales de estudio para cada proyecto',
    galleryPageTitle: 'Galería',
    galleryPageSubtitle: 'Echa un vistazo dentro de nuestro estudio',
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