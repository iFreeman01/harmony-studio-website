import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t, isDarkMode } = useTheme()
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false)
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
  
  return (
    <StyledNav scrolled={scrolled} isDarkMode={isDarkMode}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <h1>Casa<span>Koba</span></h1>
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
            <li>
              <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>{t('services')}</Link>
            </li>
            <li>
              <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>{t('gallery')}</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t('contact')}</Link>
            </li>
          </ul>
        </DesktopMenu>
        
        <AnimatePresence>
          {isOpen && (
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
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>{t('services')}</Link>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>{t('gallery')}</Link>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t('contact')}</Link>
                </motion.li>
              </ul>
            </MobileMenu>
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
    scrolled 
      ? isDarkMode 
        ? 'rgba(10, 10, 10, 0.95)' 
        : 'rgba(245, 245, 247, 0.95)'
      : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
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
    position: relative; /* Ensure proper stacking context */
  }

  .logo {
    z-index: 15;
    position: relative; /* Establish stacking context */
    margin-right: auto; /* Push logo to left and menu to right */
    
    @media (max-width: 1200px) {
      padding-left: 100px; /* Create space for the theme toggle on larger screens */
    }
    
    @media (max-width: 768px) {
      padding-left: 80px; /* Adjust for smaller screens */
    }
    
    @media (max-width: 480px) {
      padding-left: 65px; /* Further adjust for mobile */
    }
    
    h1 {
      font-size: 1.8rem;
      margin: 0;
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      white-space: nowrap; /* Prevent logo from wrapping */
      
      @media (max-width: 480px) {
        font-size: 1.5rem; /* Smaller text on mobile */
      }
      
      span {
        font-weight: 300;
      }
    }
  }
`

const DesktopMenu = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    margin-left: 1rem; /* Add some space between logo and menu */
    
    ul {
      display: flex;
      gap: clamp(1rem, 2vw, 2rem); /* Responsive gap size */
      
      li {
        a {
          position: relative;
          padding: 0.5rem 0;
          font-weight: 500;
          transition: all 0.3s ease;
          white-space: nowrap; /* Prevent menu items from wrapping */
          color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
          
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
  z-index: 15;
  margin-left: 1rem; /* Add space between logo and hamburger */
  
  @media (min-width: 768px) {
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
  bottom: 0;
  width: 75%;
  max-width: 300px;
  background: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.dark : theme.colors.light};
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
  padding: 6rem 2rem 2rem;
  z-index: 10;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    li {
      a {
        display: block;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
        transition: all 0.3s ease;
        
        &:hover, &.active {
          color: ${({ theme }) => theme.colors.primary};
          transform: translateX(5px);
        }
      }
    }
  }
`

export default Navbar 