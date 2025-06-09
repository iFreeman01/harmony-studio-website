import { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import { useTheme } from '../context/ThemeContext'

const Services = () => {
  const { isDarkMode, t } = useTheme()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Helper function to generate anchor IDs
  const getServiceAnchor = (title) => {
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')
  }

  // Services data with translations
  const services = [
    {
      id: 1,
      title: t('recording'),
      description: t('recordingServiceDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      link: '/service/recording'
    },
    {
      id: 2,
      title: t('mixing'),
      description: t('mixingServiceDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
      link: '/service/mixing'
    },
    {
      id: 3,
      title: t('mastering'),
      description: t('masteringServiceDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      link: '/service/mastering'
    },
    {
      id: 4,
      title: 'Dolby Atmos',
      description: t('dolbyAtmosServiceDesc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9.464 15.536a5 5 0 010-7.072M6.636 5.636a9 9 0 000 12.728" />
        </svg>
      ),
      link: '/service/dolby-atmos'
    }
  ]

  return (
    <StyledServices>
      <PageHeader 
        title={t('servicesPageTitle')}
        subtitle={t('servicesPageSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />

      {/* Services List */}
      <ServicesList className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <SectionHeader 
            subtitle={t('whatWeOffer')}
            title={t('comprehensiveAudioServices')}
            description={t('servicesPageDescription')}
            centered
            light={isDarkMode}
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
      </ServicesList>

      {/* Quote Request Section */}
      <ContactFormSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{t('readyToStartProject')}</h2>
            <p>{t('getInTouch')}</p>
            <Button to="/contact" size="large">{t('contactMe')}</Button>
          </motion.div>
        </div>
      </ContactFormSection>
    </StyledServices>
  )
}

const StyledServices = styled.div`
  overflow: hidden;
`

const ServicesList = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`



const ContactFormSection = styled.section`
  background: ${({ $isDarkMode }) => $isDarkMode
    ? 'linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)'
    : 'linear-gradient(rgba(255,255,255,0.92), rgba(245,245,247,0.92)), url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(20, 20, 20, 0.85)'};
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }
`

const ProcessSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  
  .process-steps {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    position: relative;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 992px) {
      grid-template-columns: repeat(5, 1fr);
      
      &::before {
        content: '';
        position: absolute;
        top: 60px;
        left: 60px;
        right: 60px;
        height: 2px;
        background: linear-gradient(90deg, #a258ef 0%, #6c77eb 100%);
        z-index: 0;
      }
    }
    
    .step {
      text-align: center;
      position: relative;
      z-index: 1;
      
      .step-number {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.gradient};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
      }
      
      h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }
      
      p {
        color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  }
`

const CTASection = styled.section`
  background: linear-gradient(
    ${({ $isDarkMode }) => $isDarkMode ? 'rgba(10, 10, 10, 0.85)' : 'rgba(245, 245, 247, 0.85)'}, 
    ${({ $isDarkMode }) => $isDarkMode ? 'rgba(10, 10, 10, 0.85)' : 'rgba(245, 245, 247, 0.85)'}
  ), url('https://images.unsplash.com/photo-1574022909844-0bc8ebc40f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
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
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }
`

export default Services 