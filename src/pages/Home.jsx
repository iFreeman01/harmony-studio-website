import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import Studio4Img from '../assets/about/Studio_4.webp'
import { useTheme } from '../context/ThemeContext'

const Home = () => {
  const videoRef = useRef(null)
  const { isDarkMode, t } = useTheme();
  
  // Placeholder data for services
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
      link: '/services'
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
      link: '/services'
    },
    {
      id: 3,
      title: t('masteringTitle'),
      description: t('masteringDescription'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      link: '/services'
    }
  ]

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: t('testimonial1'),
      author: t('testimonial1Author'),
      role: t('testimonial1Role')
    },
    {
      id: 2,
      quote: t('testimonial2'),
      author: t('testimonial2Author'),
      role: t('testimonial2Role')
    },
    {
      id: 3,
      quote: t('testimonial3'),
      author: t('testimonial3Author'),
      role: t('testimonial3Role')
    }
  ]
  
  // Autoplay video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay was prevented:", error)
      })
    }
  }, [])
  
  return (
    <StyledHome>
      {/* Hero Section */}
      <HeroSection $isDarkMode={isDarkMode}>
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
        >
          <source src="https://player.vimeo.com/external/370331493.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842df6d344e&profile_id=175" type="video/mp4" />
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
            <Button to="/contact" variant="secondary" size="large">{t('bookSession')}</Button>
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

      {/* About Section */}
      <AboutSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <motion.div className="about-image-wrapper" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <img 
                  src={Studio4Img}
                  alt="Casa Koba Studio"
                  className="about-img"
                />
                <div className="about-img-overlay"></div>
              </motion.div>
            </div>
            <div className="about-content">
              <SectionHeader 
                subtitle={t('aboutUsSubtitle')}
                title={t('aboutUsTitle')}
                description={t('aboutUsDescription')}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>{t('aboutUsContent')}</p>
                <div className="about-buttons">
                  <Button to="/about">{t('learnMore')}</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AboutSection>

      {/* Services Section */}
      <ServicesSection className="section" $isDarkMode={isDarkMode}>
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
      <TestimonialsSection className="section" $isDarkMode={isDarkMode}>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="quote-icon">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
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
      <CTASection className="section" $isDarkMode={isDarkMode}>
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

const AboutSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#fff'};
  
  .about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .about-image {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      width: 100%;
      height: 100%;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      z-index: 1;
      
      @media (max-width: 768px) {
        display: none;
      }
    }
    
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      position: relative;
      z-index: 2;
    }
  }
  
  .about-content {
    p {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
      margin-bottom: 2rem;
      font-size: 1.1rem;
      line-height: 1.8;
    }
    
    .about-buttons {
      margin-top: 2rem;
    }
  }

  .about-image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .about-img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }
  .about-img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(162,88,239,0.45) 0%, rgba(108,119,235,0.35) 100%);
    pointer-events: none;
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
    position: relative;
    
    .quote-icon {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.3;
      margin-bottom: 1.5rem;
    }
    
    .quote {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.8)' : '#222'};
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
      flex: 1;
    }
    
    .author-info {
      h4 {
        color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : '#222'};
        margin-bottom: 0.25rem;
      }
      
      p {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 0.9rem;
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