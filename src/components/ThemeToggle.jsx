import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, language, toggleLanguage, t } = useTheme()
  
  const handleThemeToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  }
  
  return (
    <ToggleContainer isDarkMode={isDarkMode}>
      <ThemeToggleSwitch>
        <ThemeToggleLabel 
          onClick={handleThemeToggle}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          $isDarkMode={isDarkMode}
        >
          <span className="mode-label light">{t('light')}</span>
          <span className="mode-label dark">{t('dark')}</span>
          <ThemeToggleSlider 
            $active={isDarkMode} 
            animate={{
              left: isDarkMode ? 'calc(100% - 30px)' : '4px',
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            initial={false}
          >
            <span className="toggle-icon">
              {isDarkMode ? '🌙' : '☀️'}
            </span>
          </ThemeToggleSlider>
        </ThemeToggleLabel>
      </ThemeToggleSwitch>
      
      <Divider isDarkMode={isDarkMode} />
      
      <LanguageToggle 
        onClick={toggleLanguage}
        aria-label={language === 'en' ? "Switch to Spanish" : "Switch to English"}
        title={language === 'en' ? "Switch to Spanish" : "Switch to English"}
        type="button"
        isDarkMode={isDarkMode}
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
  top: 15px; /* Slightly higher than before, but still in navbar area */
  left: 20px;
  display: flex;
  align-items: center;
  background: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.dark : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${({ isDarkMode }) => isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 50px;
  padding: 6px 12px;
  z-index: 101; /* Higher than navbar to ensure visibility */
  box-shadow: ${({ theme }) => theme.shadows.medium};
  backdrop-filter: blur(10px);
  
  /* Desktop positioning - keep on left side as requested, within navbar area */
  @media (min-width: 1200px) {
    left: 30px;
    top: 20px; /* Slightly higher in navbar area */
  }
  
  @media (max-width: 1199px) and (min-width: 769px) {
    left: 25px;
    top: 18px; /* Slightly higher in navbar area */
  }
  
  /* Mobile positioning - move to bottom to avoid navbar overlap */
  @media (max-width: 768px) {
    top: auto;
    bottom: 25px;
    left: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 4px 10px;
    left: 15px;
    bottom: 20px;
    transform: scale(0.9);
    transform-origin: bottom left;
  }
  
  /* Ensure it doesn't interfere with mobile menu */
  @media (max-width: 768px) {
    &:hover {
      z-index: 102;
    }
  }
`

const ThemeToggleSwitch = styled.div`
  position: relative;
  width: 84px;
  height: 32px;
  padding: 0;
  
  @media (max-width: 480px) {
    width: 76px;
    height: 28px;
  }
`

const ThemeToggleLabel = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 34px;
  background: ${({ $isDarkMode, theme }) => 
    $isDarkMode 
      ? 'linear-gradient(to right, #192231, #203a43)' 
      : 'linear-gradient(to right, #f6d365, #fda085)'};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  
  .mode-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10px;
    font-weight: bold;
    transition: all 0.3s ease;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
    
    @media (max-width: 480px) {
      font-size: 9px;
    }
  }
  
  .light {
    left: 9px;
    color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.9)'};
    font-weight: ${({ $isDarkMode }) => $isDarkMode ? '400' : '700'};
    
    @media (max-width: 480px) {
      left: 7px;
    }
  }
  
  .dark {
    right: 9px;
    color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.2)'};
    font-weight: ${({ $isDarkMode }) => $isDarkMode ? '700' : '400'};
    
    @media (max-width: 480px) {
      right: 7px;
    }
  }
`

const ThemeToggleSlider = styled(motion.span)`
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  top: 3px;
  z-index: 3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
    top: 3px;
  }
  
  .toggle-icon {
    font-size: 12px;
    line-height: 1;
    display: flex;
    
    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.2;
    transition: opacity 0.3s ease;
  }
`

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background: ${({ isDarkMode }) => isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
  margin: 0 10px;
  
  @media (max-width: 480px) {
    margin: 0 8px;
    height: 16px;
  }
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
  color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
  padding: 0;
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    gap: 4px;
  }
  
  span {
    transition: all 0.3s ease;
    
    &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }
  
  &:hover span:not(.active) {
    color: ${({ isDarkMode }) => isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
  }
`

export default ThemeToggle 