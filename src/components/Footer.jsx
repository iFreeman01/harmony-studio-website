import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import PrivacyModal from './PrivacyModal'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTheme()
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  
  return (
    <StyledFooter>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h2>Casa<span>Koba</span></h2>
            <p>Premium music recording studio with state-of-the-art equipment and exceptional sound engineers.</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/jhn_freeman/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@Jhn_Freeman" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.312-1.732.466-3.49.46-5.25a29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-nav">
            <h3>{t('navigation')}</h3>
            <ul>
              <li><Link to="/">{t('home')}</Link></li>
              <li><Link to="/about">{t('about')}</Link></li>
              <li><Link to="/services">{t('services')}</Link></li>
              <li><Link to="/gallery">{t('gallery')}</Link></li>
              <li><Link to="/contact">{t('contact')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h3>{t('services')}</h3>
            <ul>
              <li><Link to="/services">Recording</Link></li>
              <li><Link to="/services">Mixing</Link></li>
              <li><Link to="/services">Mastering</Link></li>
              <li><Link to="/services">Production</Link></li>
              <li><Link to="/services">Dolby Atmos</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>{t('contact')}</h3>
            <address>
              <p>Blvd. 18 Sur 5510</p>
              <p>Jardines de San Manuel, 72570</p>
              <p>Heroica Puebla de Zaragoza, Pue.</p>
              <p><a href="tel:+525532792351">(55) 3279-2351</a></p>
              <p><a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a></p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Casa Koba. {t('allRightsReserved')}.</p>
          <div className="footer-legal">
            <button className="privacy-button" onClick={() => setPrivacyModalOpen(true)}>Aviso de Privacidad</button>
            <span>|</span>
            <Link to="/privacy-policy">{t('privacyPolicy')}</Link>
            <span>|</span>
            <Link to="/terms-of-service">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
      
      <PrivacyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: #0a0a0a;
  color: #ffffff;
  padding: 4rem 0 2rem;
  margin-top: auto;
  border-top: 1px solid #222;
  
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
    
    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 992px) {
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    span {
      font-weight: 300;
    }
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.light};
  }
  
  .footer-info {
    p {
      color: #888;
      max-width: 300px;
      margin-bottom: 1.5rem;
    }
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #222;
      color: #fff;
      transition: all 0.3s ease;
      
      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        transform: translateY(-3px);
      }
    }
  }
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    li a {
      color: #888;
      transition: all 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        padding-left: 5px;
      }
    }
  }
  
  address {
    font-style: normal;
    color: #888;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    a {
      color: #888;
      transition: all 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  
  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #222;
    
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
    
    p {
      color: #666;
      margin-bottom: 1rem;
      
      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }
    
    .footer-legal {
      display: flex;
      gap: 1rem;
      align-items: center;
      
      a, .privacy-button {
        color: #666;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      span {
        color: #444;
        font-size: 0.9rem;
      }

      .privacy-button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-family: inherit;
      }
    }
  }
`

export default Footer 