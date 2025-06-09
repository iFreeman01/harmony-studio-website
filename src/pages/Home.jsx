import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { useTheme } from '../context/ThemeContext'
import homeBackgroundVideo from '../assets/home/home_background_2.mp4'

const Home = () => {
  const { isDarkMode, t } = useTheme();
  const location = useLocation();
  
  // Handle section scrolling when coming from other pages
  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0)
    }
  }, [location])

  // Placeholder data for services - updated to only include the 4 required services
  const services = [
    {
      id: 1,
      title: t('recordingTitle'),
      description: t('recordingDescription'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      link: '/service/recording'
    },
    {
      id: 2,
      title: t('mixingTitle'),
      description: t('mixingDescription'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
      link: '/service/mixing'
    },
    {
      id: 3,
      title: t('dolbyAtmos'),
      description: t('dolbyAtmosServiceDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5v3a2.5 2.5 0 005 0v-3a2.5 2.5 0 10-5 0M13.5 10.5v3a2.5 2.5 0 005 0v-3a2.5 2.5 0 10-5 0"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM7.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
        </svg>
      ),
      link: '/service/dolby-atmos'
    },
    {
      id: 4,
      title: t('masteringTitle'),
      description: t('masteringDescription'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      link: '/service/mastering'
    }
  ]

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: t('testimonial1'),
      author: t('testimonial1Author'),
      role: t('testimonial1Role'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 2,
      quote: t('testimonial2'),
      author: t('testimonial2Author'),
      role: t('testimonial2Role'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 3,
      quote: t('testimonial3'),
      author: t('testimonial3Author'),
      role: t('testimonial3Role'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    }
  ]
  
  return (
    <StyledHome>
      {/* Hero Section */}
      <HeroSection id="home" $isDarkMode={isDarkMode}>
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={homeBackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('heroSubtitle')}
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button to="/services" size="large">{t('ourServices')}</Button>
            <Button to="/gallery" variant="secondary" size="large">{t('viewGallery')}</Button>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-text">{t('scrollDown')}</span>
          </div>
        </div>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection id="services" className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <SectionHeader 
            subtitle={t('servicesSubtitle')}
            title={t('servicesTitle')}
            description={t('servicesDescription')}
            centered
          />
          <div className="services-grid">
            {services.map((service) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
          <div className="services-action">
            <Button to="/services" variant="secondary">{t('viewAllServices')}</Button>
          </div>
        </div>
      </ServicesSection>

      {/* Testimonials Section */}
      <TestimonialsSection id="testimonials" className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <SectionHeader 
            subtitle={t('testimonialsSubtitle')}
            title={t('testimonialsTitle')}
            description={t('testimonialsDescription')}
            centered
          />
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                <p className="quote">{testimonial.quote}</p>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TestimonialsSection>

      {/* CTA Section */}
      <CTASection id="contact-cta" className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{t('ctaTitle')}</h2>
            <p>{t('ctaDescription')}</p>
            <Button to="/contact" size="large">{t('contactMe')}</Button>
          </motion.div>
        </div>
      </CTASection>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  overflow: hidden;
`

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : '#222'};
  
  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(10, 10, 10, 1) 0%,
      rgba(10, 10, 10, 0.7) 30%,
      rgba(10, 10, 10, 0.4) 100%
    );
    z-index: -1;
  }
  
  .hero-content {
    text-align: center;
    max-width: 900px;
    z-index: 1;
    
    h1 {
      font-size: 4.5rem;
      margin-bottom: 1.5rem;
      color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : '#222'};
      
      @media (max-width: 768px) {
        font-size: 2.8rem;
      }
    }
    
    p {
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      
      @media (max-width: 576px) {
        flex-direction: column;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
      }
    }
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    
    .mouse {
      width: 26px;
      height: 42px;
      border: 2px solid ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
      border-radius: 20px;
      position: relative;
      
      .wheel {
        width: 4px;
        height: 8px;
        background-color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : 'black'};
        border-radius: 2px;
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        animation: scrollDown 2s infinite;
      }
    }
    
    .scroll-text {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
      font-size: 0.8rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    @keyframes scrollDown {
      0% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateX(-50%) translateY(20px);
        opacity: 0;
      }
    }
  }
`

const ServicesSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0d0d0d' : '#f7f7f9'};
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .services-action {
    margin-top: 4rem;
    text-align: center;
  }

  .section-header {
    h2, h3, h4, p, span {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : '#222'};
    }
  }

  .service-card {
    background: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.03)' : '#fff'};
    border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.05)' : '#eee'};
    color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
    h3, p {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.95)' : '#222'};
    }
  }
`

const TestimonialsSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .testimonial-card {
    background: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.03)' : '#fff'};
    border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.05)' : '#eee'};
    border-radius: 12px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    
    .testimonial-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1.5rem;
      border: 4px solid ${({ theme }) => theme.colors.primary};
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .quote {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.8)' : '#222'};
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
      flex: 1;
      font-style: italic;
    }
    
    .author-info {
      text-align: center;
      
      h4 {
        color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : '#222'};
        margin-bottom: 0.25rem;
        font-size: 1.1rem;
      }
      
      p {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 0.9rem;
        margin: 0;
      }
    }
  }
`

const CTASection = styled.section`
  background: ${({ $isDarkMode }) => $isDarkMode
    ? 'linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url(https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80)'
    : 'linear-gradient(rgba(255,255,255,0.92), rgba(245,245,247,0.92)), url(https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80)'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  .cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      @media (max-width: 768px) {
        font-size: 2.2rem;
      }
    }
    
    p {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }
`

export default Home 