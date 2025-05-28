import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { useTheme } from '../context/ThemeContext'

const Services = () => {
  const { isDarkMode, t } = useTheme()

  // Services data with translations
  const services = [
    {
      id: 1,
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
    {
      id: 2,
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
    {
      id: 3,
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
    },
    {
      id: 4,
      title: t('production'),
      description: t('productionServiceDesc'),
      details: [
        t('productionDetail1'),
        t('productionDetail2'),
        t('productionDetail3'),
        t('productionDetail4'),
        t('productionDetail5')
      ],
      image: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 5,
      title: t('vocalProduction'),
      description: t('vocalProductionServiceDesc'),
      details: [
        t('vocalDetail1'),
        t('vocalDetail2'),
        t('vocalDetail3'),
        t('vocalDetail4'),
        t('vocalDetail5')
      ],
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m5.657-8.485a1 1 0 00-1.414 0l-2.829 2.829a1 1 0 000 1.414l2.829 2.829a1 1 0 001.414 0 1 1 0 000-1.414L9.414 12l2.243-2.243a1 1 0 000-1.414L12 9z" />
        </svg>
      )
    },
    {
      id: 6,
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
    {
      id: 7,
      title: t('postProduction'),
      description: t('postProductionServiceDesc'),
      details: [
        t('postDetail1'),
        t('postDetail2'),
        t('postDetail3'),
        t('postDetail4'),
        t('postDetail5')
      ],
      image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      )
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
            {services.map((service) => (
              <ServiceItem 
                key={service.id}
                id={service.id}
                className="service-card"
                $isDarkMode={isDarkMode}
              >
                <div className="service-content">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p className="description">{service.description}</p>
                  <ul className="features">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </ServiceItem>
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
    gap: 3rem;
    margin-top: 3rem;
  }
`

const ServiceItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.95)'};
  border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  .service-content {
    .service-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.gradient};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      
      svg {
        width: 30px;
        height: 30px;
        color: white;
      }
    }
    
    h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
    
    .description {
      font-size: 1.1rem;
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .features {
      display: grid;
      gap: 0.8rem;
      
      li {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
        
        svg {
          margin-top: 4px;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  
  .service-image {
    border-radius: 8px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: auto;
      display: block;
      transition: all 0.5s ease;
      
      &:hover {
        transform: scale(1.03);
      }
    }
  }
`

const ContactFormSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0d0d0d' : '#f5f5f7'};
  text-align: center;
  
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.textPrimary};
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
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