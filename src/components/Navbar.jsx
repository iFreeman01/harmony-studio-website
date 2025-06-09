import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { t, isDarkMode } = useTheme()
  
  // Services list for dropdown - restored to include Dolby Atmos
  const services = [
    { key: 'recording', label: t('recording'), path: '/service/recording' },
    { key: 'mixing', label: t('mixing'), path: '/service/mixing' },
    { key: 'mastering', label: t('mastering'), path: '/service/mastering' },
    { key: 'dolbyAtmos', label: 'Dolby Atmos', path: '/service/dolby-atmos' }
  ]
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false)
    setShowServicesDropdown(false)
    setShowMobileServicesDropdown(false)
  }, [location])
  
  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleMenu = () => setIsOpen(!isOpen)
  
  const handleBookSession = () => {
    const subject = encodeURIComponent('Book a Session - Freeman Studio')
    const body = encodeURIComponent('Hello Freeman Studio,\n\nI would like to book a recording session. Please provide me with available dates and pricing information.\n\nThank you!')
    window.open(`mailto:contact@freemanstudio.com?subject=${subject}&body=${body}`, '_blank')
  }
  
  const handleServiceClick = (path) => {
    // Navigate to individual service page
    navigate(path)
    setShowServicesDropdown(false)
    setShowMobileServicesDropdown(false)
  }

  const handleHomeNavigation = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Navigate to home page
      navigate('/')
    }
  }

  const toggleMobileServicesDropdown = () => {
    setShowMobileServicesDropdown(!showMobileServicesDropdown)
  }
  
  return (
    <StyledNav scrolled={scrolled} isDarkMode={isDarkMode}>
      <div className="container nav-container">
        <div className="logo">
          <button onClick={handleHomeNavigation}>
            <h1>Freeman<span>Studio</span></h1>
          </button>
        </div>
        
        <Hamburger onClick={toggleMenu} isOpen={isOpen} isDarkMode={isDarkMode}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        
        <DesktopMenu isDarkMode={isDarkMode}>
          <ul>
            <li>
              <button onClick={handleHomeNavigation} className={location.pathname === '/' ? 'active' : ''}>{t('home')}</button>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t('about')}</Link>
            </li>
            <li 
              className="services-dropdown"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
                {t('services')}
                <DropdownArrow>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </DropdownArrow>
              </Link>
              <AnimatePresence>
                {showServicesDropdown && (
                  <ServicesDropdown
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    isDarkMode={isDarkMode}
                  >
                    {services.map((service) => (
                      <li key={service.key}>
                        <button onClick={() => handleServiceClick(service.path)}>
                          {service.label}
                        </button>
                      </li>
                    ))}
                  </ServicesDropdown>
                )}
              </AnimatePresence>
            </li>
            <li>
              <Link to="/session-drummer" className={location.pathname === '/session-drummer' ? 'active' : ''}>{t('sessionDrums')}</Link>
            </li>
            <li>
              <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>{t('gallery')}</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t('contact')}</Link>
            </li>
            <li>
              <BookSessionButton onClick={handleBookSession}>
                {t('bookSession')}
              </BookSessionButton>
            </li>
          </ul>
        </DesktopMenu>
        
        <AnimatePresence>
          {isOpen && (
            <>
              <MobileMenuBackdrop
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
              />
              <MobileMenu
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3 }}
                isDarkMode={isDarkMode}
              >
                <ul>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <button onClick={handleHomeNavigation} className={location.pathname === '/' ? 'active' : ''}>{t('home')}</button>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t('about')}</Link>
                  </motion.li>
                  <motion.li 
                    className="mobile-services-dropdown"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="services-header" onClick={toggleMobileServicesDropdown}>
                      <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>{t('services')}</Link>
                      <DropdownArrow isOpen={showMobileServicesDropdown}>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </DropdownArrow>
                    </div>
                    <AnimatePresence>
                      {showMobileServicesDropdown && (
                        <MobileServicesDropdown
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          isDarkMode={isDarkMode}
                        >
                          {services.map((service, index) => (
                            <motion.li 
                              key={service.key}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                            >
                              <button onClick={() => handleServiceClick(service.path)}>
                                {service.label}
                              </button>
                            </motion.li>
                          ))}
                        </MobileServicesDropdown>
                      )}
                    </AnimatePresence>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link to="/session-drummer" className={location.pathname === '/session-drummer' ? 'active' : ''}>{t('sessionDrums')}</Link>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>{t('gallery')}</Link>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t('contact')}</Link>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <BookSessionButton onClick={handleBookSession}>
                      {t('bookSession')}
                    </BookSessionButton>
                  </motion.li>
                </ul>
              </MobileMenu>
            </>
          )}
        </AnimatePresence>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ isDarkMode }) => 
    isDarkMode ? 'rgba(10, 10, 10, 0.95)' : 'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: ${({ isDarkMode }) => 
    isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
  };
  
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding-left: clamp(1rem, 3vw, 3rem);
    padding-right: clamp(1rem, 3vw, 3rem);
    
    @media (max-width: 768px) {
      padding: 0.75rem 1rem;
    }
  }
  
  .logo {
    z-index: 15;
    position: relative;
    flex-shrink: 0;
    
    /* Smooth scaling approach - ensure space for theme toggle */
    @media (min-width: 1200px) {
      margin-left: clamp(160px, 15vw, 220px);
    }
    
    @media (max-width: 1199px) {
      margin-left: 0;
    }
    
    button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      
      h1 {
        font-size: clamp(1.3rem, 2.2vw, 1.8rem);
        font-weight: 700;
        background: ${({ theme }) => theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        white-space: nowrap;
        
        span {
          font-weight: 300;
        }
        
        @media (max-width: 768px) {
          font-size: 1.3rem;
        }
      }
    }
  }
`

const DesktopMenu = styled.div`
  display: none;
  
  @media (min-width: 1200px) {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-left: clamp(1rem, 3vw, 3rem);
    
    ul {
      display: flex;
      gap: clamp(0.5rem, 1.5vw, 1.8rem);
      align-items: center;
      
      li {
        position: relative;
        
        &.services-dropdown {
          position: relative;
        }
        
        a, button {
          position: relative;
          padding: 0.5rem 0;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
          color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          text-decoration: none;
          
          &:hover, &.active {
            color: ${({ theme }) => theme.colors.primary};
          }
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: ${({ theme }) => theme.colors.gradient};
            transition: width 0.3s ease;
          }
          
          &:hover::after, &.active::after {
            width: 100%;
          }
        }
      }
    }
  }
`

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1001;
  flex-shrink: 0;
  
  @media (min-width: 1200px) {
    display: none;
  }
  
  span {
    display: block;
    height: 3px;
    width: 100%;
    background: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
    border-radius: 10px;
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(7px, -8px)' : 'rotate(0)'};
    }
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 350px;
  height: 100vh;
  background: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.dark : theme.colors.light};
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1200px) {
    display: none;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    max-width: 320px;
  }
  
  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
    margin: 0;
    list-style: none;
    
    @media (max-width: 480px) {
      padding: 2rem 1rem;
      gap: 1.2rem;
    }
    
    @media (max-height: 600px) {
      gap: 1rem;
      padding: 1.5rem 1rem;
    }
    
    @media (max-height: 500px) {
      gap: 0.8rem;
      padding: 1rem;
    }
    
    li {
      &.mobile-services-dropdown {
        .services-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          
          a {
            flex: 1;
            pointer-events: none;
          }
        }
      }
      
      a, button {
        display: block;
        font-size: 1.1rem;
        font-weight: 500;
        color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
        transition: all 0.3s ease;
        padding: 0.75rem 0;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
        width: 100%;
        text-align: left;
        
        @media (max-width: 480px) {
          font-size: 1rem;
          padding: 0.6rem 0;
        }
        
        @media (max-height: 600px) {
          font-size: 0.95rem;
          padding: 0.5rem 0;
        }
        
        @media (max-height: 500px) {
          font-size: 0.9rem;
          padding: 0.4rem 0;
        }
        
        &:hover, &.active {
          color: ${({ theme }) => theme.colors.primary};
          transform: translateX(5px);
        }
      }
    }
  }
`

const ServicesDropdown = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${({ isDarkMode, theme }) => isDarkMode ? 'rgba(20, 20, 20, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ isDarkMode, theme }) => isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 8px;
  padding: 0.5rem 0;
  min-width: 200px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  
  li {
    button {
      width: 100%;
      text-align: left;
      padding: 0.75rem 1rem;
      background: none;
      border: none;
      color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      display: block;
      
      &:hover {
        background: ${({ isDarkMode, theme }) => isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

const MobileServicesDropdown = styled(motion.ul)`
  margin-top: 0.5rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 2px solid ${({ isDarkMode, theme }) => isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  overflow: hidden;
  
  li {
    margin: 0.5rem 0;
    
    button {
      width: 100%;
      text-align: left;
      padding: 0.5rem 0;
      background: none;
      border: none;
      color: ${({ isDarkMode, theme }) => isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: translateX(5px);
      }
    }
  }
`

const DropdownArrow = styled.span`
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  ${({ isOpen }) => isOpen && `
    transform: rotate(180deg);
  `}
  
  svg {
    width: 12px;
    height: 8px;
  }
`

const BookSessionButton = styled.button`
  background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%) !important;
  color: white !important;
  border: none !important;
  padding: 0.5rem 1rem !important;
  border-radius: 6px !important;
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  white-space: nowrap !important;
  box-shadow: 0 2px 8px rgba(168, 85, 247, 0.3) !important;
  display: inline-block !important;
  width: auto !important;
  text-align: center !important;
  
  &:hover {
    background: linear-gradient(135deg, #9333ea 0%, #4f46e5 100%) !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4) !important;
    color: white !important;
  }
  
  &:active {
    transform: translateY(0) !important;
  }
  
  @media (max-width: 768px) {
    width: 100% !important;
    padding: 0.75rem 1rem !important;
    margin-top: 0.5rem !important;
    display: block !important;
  }
`

const MobileMenuBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  
  @media (min-width: 1200px) {
    display: none;
  }
`

export default Navbar 