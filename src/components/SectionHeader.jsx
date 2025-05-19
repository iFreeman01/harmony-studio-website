import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const SectionHeader = ({ subtitle, title, description, centered = false }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <HeaderWrapper centered={centered} isDarkMode={isDarkMode}>
      <motion.span 
        className="subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  margin-bottom: 4rem;
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
  
  .subtitle {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      width: 50px;
      height: 2px;
      background: ${({ theme }) => theme.colors.gradient};
      bottom: -5px;
      left: ${({ centered }) => centered ? '50%' : '0'};
      transform: ${({ centered }) => centered ? 'translateX(-50%)' : 'none'};
    }
  }
  
  h2 {
    color: ${({ isDarkMode, theme }) => isDarkMode ? theme.colors.light : theme.colors.dark};
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    max-width: 600px;
    margin: ${({ centered }) => centered ? '0 auto' : '0'};
    color: ${({ isDarkMode }) => isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(20, 20, 20, 0.85)'};
    font-size: 1.1rem;
    line-height: 1.8;
  }
`

export default SectionHeader 