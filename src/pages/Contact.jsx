import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { isDarkMode, t } = useTheme();

  // Construct email URL safely
  const getEmailUrl = () => {
    const email = 'info@freemanstudio.com';
    const subject = encodeURIComponent('Inquiry about Freeman Studio Services');
    const body = encodeURIComponent(
      'Hello Freeman Studio,\n\nI would like to inquire about your services. Please provide me with more information about...'
    );
    
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <StyledContact>
      <PageHeader 
        title={t('contactPageTitle')}
        subtitle={t('contactPageSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />

      <ContactSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <ContactMethods>
            {/* Email Contact Method */}
            <motion.div 
              className="contact-method email"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2>{t('emailUs')}</h2>
              <p>{t('emailUsDescription')}</p>
              <a 
                href={getEmailUrl()}
                className="contact-button email-button"
                aria-label="Send us an email"
              >
                {t('sendEmail')}
              </a>
            </motion.div>

            {/* Location Data Box */}
            <motion.div 
              className="contact-method location"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="method-icon location-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2>Ubicación</h2>
              <div className="location-address">
                <p>Blvd. 18 Sur 5510, Jardines de San Manuel, 72570 Heroica Puebla de Zaragoza, Pue.</p>
              </div>
            </motion.div>
          </ContactMethods>
        </div>
      </ContactSection>

      <MapSection>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2270984177776!2d-98.20459232387033!3d19.004851687131847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc72f1efd8467%3A0xea6badc908dc7fb3!2sBlvd.%2018%20Sur%205510%2C%20Jardines%20de%20San%20Manuel%2C%2072570%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1sen!2smx!4v1695515134436!5m2!1sen!2smx" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio Location"
        ></iframe>
      </MapSection>
    </StyledContact>
  )
}

const StyledContact = styled.div`
  overflow: hidden;
`

const ContactSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  padding: 4rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`

const ContactMethods = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-method {
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;
    padding: 2.5rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.shadows.medium};
    }

    .method-icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.gradient};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;

      &.location-icon {
        background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
      }

      svg {
        width: 35px;
        height: 35px;
        color: white;
      }
    }

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    p {
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .location-address {
      margin-bottom: 0;
      
      p {
        font-size: 1.1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textPrimary};
        margin-bottom: 0;
        line-height: 1.5;
        text-align: center;
      }
    }

    .contact-button {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 500;
      transition: all 0.3s ease;
      text-decoration: none;
      
      &.email-button {
        background: ${({ theme }) => theme.colors.gradient};
        color: white;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`

const MapSection = styled.section`
  height: 450px;
  
  iframe {
    filter: grayscale(100%) invert(92%) contrast(90%);
  }
`

export default Contact 