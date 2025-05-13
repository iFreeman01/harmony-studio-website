import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTheme()
  
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
    <StyledNav scrolled={scrolled}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <h1>Casa<span>Koba</span></h1>
          </Link>
        </div>
        
        <Hamburger onClick={toggleMenu} isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        
        <DesktopMenu>
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
  background: ${({ scrolled }) => scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    z-index: 15;
    
    h1 {
      font-size: 1.8rem;
      margin: 0;
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
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
    
    ul {
      display: flex;
      gap: 2rem;
      
      li {
        a {
          position: relative;
          padding: 0.5rem 0;
          font-weight: 500;
          transition: all 0.3s ease;
          
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
  
  @media (min-width: 768px) {
    display: none;
  }
  
  span {
    display: block;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.light};
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
  background: ${({ theme }) => theme.colors.dark};
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
        font-size: 1.25rem;
        font-weight: 500;
        
        &.active {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`

export default Navbar 