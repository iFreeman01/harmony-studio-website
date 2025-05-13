import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, language, toggleLanguage } = useTheme()
  
  return (
    <ToggleContainer>
      <ThemeButton 
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </ThemeButton>
      
      <Divider />
      
      <LanguageToggle 
        onClick={toggleLanguage}
        aria-label={language === 'en' ? "Switch to Spanish" : "Switch to English"}
        title={language === 'en' ? "Switch to Spanish" : "Switch to English"}
      >
        <span className={language === 'en' ? 'active' : ''}>ENG</span>
        <span>|</span>
        <span className={language === 'es' ? 'active' : ''}>ESP</span>
      </LanguageToggle>
    </ToggleContainer>
  )
}

const ToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 6px 12px;
  z-index: 99;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    top: auto;
    bottom: 20px;
  }
`

const ThemeButton = styled(motion.button)`
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
  padding: 0;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 10px;
`

const LanguageToggle = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
  padding: 0;
  
  span {
    transition: all 0.3s ease;
    
    &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }
  
  &:hover span:not(.active) {
    color: rgba(255, 255, 255, 0.8);
  }
`

export default ThemeToggle 