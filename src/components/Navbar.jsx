import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] = useState(false)
  const location = useLocation()
  const { t, isDarkMode } = useTheme()
  
  // Services list for dropdown - updated to only include the 4 required services
  const services = [
    { key: 'recording', label: t('recording'), path: '/service/recording' },
    { key: 'mixing', label: t('mixing'), path: '/service/mixing' },
    { key: 'dolbyAtmos', label: t('dolbyAtmos'), path: '/service/dolby-atmos' },
    { key: 'mastering', label: t('mastering'), path: '/service/mastering' }
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
    window.location.href = path
    setShowServicesDropdown(false)
    setShowMobileServicesDropdown(false)
  }

  const toggleMobileServicesDropdown = () => {
    setShowMobileServicesDropdown(!showMobileServicesDropdown)
  }
  
  return (
    <StyledNav scrolled={scrolled} isDarkMode={isDarkMode}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <h1>Freeman<span>Studio</span></h1>
          </Link>
        </div>
        
        <Hamburger onClick={toggleMenu} isOpen={isOpen} isDarkMode={isDarkMode}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        
        <DesktopMenu isDarkMode={isDarkMode}>
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('home')}</Link>
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
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('home')}</Link>
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
  width: 100%;
  z-index: 100;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: ${({ scrolled, isDarkMode }) => 
    isDarkMode 
      ? 'rgba(10, 10, 10, 0.95)' 
      : 'rgba(245, 245, 247, 0.95)'};
  backdrop-filter: blur(10px);
  box-shadow: ${({ scrolled, isDarkMode }) => 
    scrolled 
      ? isDarkMode 
        ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
        : '0 4px 30px rgba(0, 0, 0, 0.05)'
      : 'none'};

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .logo {
    z-index: 15;
    position: relative;
    flex-shrink: 0;
    
    /* Adjust spacing to accommodate theme toggle without affecting menu spacing */
    @media (min-width: 1200px) {
      margin-left: 120px; /* Reduced from 140px for better spacing */
    }
    
    @media (max-width: 1199px) and (min-width: 769px) {
      margin-left: 100px; /* Reduced from 120px for better spacing */
    }
    
    @media (max-width: 768px) {
      margin-left: 0; /* No extra margin on mobile since theme toggle moves to bottom */
    }
    
    h1 {
      font-size: 1.8rem;
      margin: 0;
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
      
      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
      
      span {
        font-weight: 300;
      }
    }
  }
`

const DesktopMenu = styled.div`
  display: none;
  
  @media (min-width: 769px) {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-left: 2rem; /* Add margin to create space between logo and menu */
    
    ul {
      display: flex;
      gap: clamp(1.5rem, 3vw, 2.5rem); /* Increased gap for better spacing */
      align-items: center;
      
      li {
        position: relative;
        
        &.services-dropdown {
          position: relative;
        }
        
        a {
          position: relative;
          padding: 0.5rem 0;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap;
          color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
          display: flex;
          align-items: center;
          gap: 0.25rem;
          
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
  z-index: 1001; /* Higher than mobile menu to ensure it's clickable */
  flex-shrink: 0;
  
  @media (min-width: 769px) {
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
  width: 85%; /* Optimized width */
  max-width: 350px; /* Increased max width for better content fit */
  height: 100vh; /* Full viewport height */
  background: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.dark : theme.colors.light};
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
  z-index: 1000; /* Increased z-index to ensure it's above everything */
  display: flex;
  flex-direction: column;
  
  @media (min-width: 769px) {
    display: none;
  }
  
  /* Ensure proper display on very small screens */
  @media (max-width: 480px) {
    width: 90%; /* Increase width on very small screens */
    max-width: 320px;
  }
  
  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center the menu items vertically */
    gap: 1.5rem; /* Increased gap for better spacing */
    padding: 2rem 1.5rem; /* Consistent padding */
    margin: 0;
    list-style: none;
    
    /* Adjust for smaller screens */
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
            pointer-events: none; /* Prevent navigation when clicking on services */
          }
        }
      }
      
      a {
        display: block;
        font-size: 1.1rem; /* Slightly larger font for better readability */
        font-weight: 500;
        color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
        transition: all 0.3s ease;
        padding: 0.75rem 0; /* Better touch targets */
        text-decoration: none;
        
        /* Responsive font sizes */
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
  background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: linear-gradient(135deg, #9333ea 0%, #4f46e5 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 0.5rem;
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
  
  @media (min-width: 769px) {
    display: none;
  }
`

export default Navbar 