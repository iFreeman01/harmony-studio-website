import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { useTheme } from '../context/ThemeContext'

const ServiceDetail = () => {
  const { service } = useParams()
  const { isDarkMode, t } = useTheme()

  // Service data mapping
  const serviceData = {
    'recording': {
      title: t('recording'),
      description: t('recordingServiceDesc'),
      details: [
        t('recordingDetail1'),
        t('recordingDetail2'),
        t('recordingDetail3'),
        t('recordingDetail4'),
        t('recordingDetail5')
      ],
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    'mixing': {
      title: t('mixing'),
      description: t('mixingServiceDesc'),
      details: [
        t('mixingDetail1'),
        t('mixingDetail2'),
        t('mixingDetail3'),
        t('mixingDetail4'),
        t('mixingDetail5')
      ],
      image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    },
    'dolby-atmos': {
      title: t('dolbyAtmos'),
      description: t('dolbyAtmosServiceDesc'),
      details: [
        t('dolbyDetail1'),
        t('dolbyDetail2'),
        t('dolbyDetail3'),
        t('dolbyDetail4'),
        t('dolbyDetail5')
      ],
      image: 'https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5v3a2.5 2.5 0 005 0v-3a2.5 2.5 0 10-5 0M13.5 10.5v3a2.5 2.5 0 005 0v-3a2.5 2.5 0 10-5 0"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM7.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
        </svg>
      )
    },
    'mastering': {
      title: t('mastering'),
      description: t('masteringServiceDesc'),
      details: [
        t('masteringDetail1'),
        t('masteringDetail2'),
        t('masteringDetail3'),
        t('masteringDetail4'),
        t('masteringDetail5')
      ],
      image: 'https://images.unsplash.com/photo-1569696483293-9d1a3f6d4079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    }
  }

  const currentService = serviceData[service]

  if (!currentService) {
    return <div>Service not found</div>
  }

  return (
    <StyledServiceDetail>
      <PageHeader 
        title={currentService.title}
        subtitle={`Professional ${currentService.title} Services`}
        backgroundImage={currentService.image}
      />

      {/* Service Detail Section */}
      <ServiceDetailSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-content">
              <div className="service-icon">
                {currentService.icon}
              </div>
              <SectionHeader 
                subtitle="Professional Service"
                title={currentService.title}
                description={currentService.description}
                light={isDarkMode}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3>What's Included:</h3>
                <ul className="features">
                  {currentService.details.map((detail, idx) => (
                    <li key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="service-buttons">
                  <Button to="/contact" size="large">{t('contactMe')}</Button>
                  <Button to="/services" variant="secondary" size="large">View All Services</Button>
                </div>
              </motion.div>
            </div>
            <div className="service-image">
              <motion.img 
                src={currentService.image}
                alt={currentService.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </ServiceDetailSection>

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
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your {currentService.title.toLowerCase()} project and get a custom quote.</p>
            <Button to="/contact" size="large">{t('contactMe')}</Button>
          </motion.div>
        </div>
      </CTASection>
    </StyledServiceDetail>
  )
}

const StyledServiceDetail = styled.div`
  overflow: hidden;
`

const ServiceDetailSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  
  .service-detail-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .service-content {
    .service-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.gradient};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      
      svg {
        width: 40px;
        height: 40px;
        color: white;
      }
    }
    
    h3 {
      font-size: 1.5rem;
      margin: 2rem 0 1.5rem;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
    
    .features {
      display: grid;
      gap: 1rem;
      margin-bottom: 2rem;
      
      li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
        font-size: 1.1rem;
        line-height: 1.6;
        
        svg {
          margin-top: 2px;
          color: ${({ theme }) => theme.colors.primary};
          flex-shrink: 0;
        }
      }
    }
    
    .service-buttons {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      
      @media (max-width: 576px) {
        flex-direction: column;
      }
    }
  }
  
  .service-image {
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: ${({ theme }) => theme.shadows.large};
    }
  }
`

const CTASection = styled.section`
  background: ${({ $isDarkMode }) => $isDarkMode
    ? 'linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)'
    : 'linear-gradient(rgba(255,255,255,0.92), rgba(245,245,247,0.92)), url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : '#222'};
      
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

export default ServiceDetail 