import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  // Button variants
  const getButtonComponent = () => {
    const buttonProps = {
      variant,
      size,
      fullWidth,
      disabled,
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.98 },
      ...props
    }
    
    // If it's a link button (internal)
    if (to) {
      return (
        <StyledButtonLink to={to} {...buttonProps}>
          {children}
        </StyledButtonLink>
      )
    }
    
    // If it's an external link
    if (href) {
      return (
        <StyledButtonExternal 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          {...buttonProps}
        >
          {children}
        </StyledButtonExternal>
      )
    }
    
    // Regular button
    return (
      <StyledButton 
        onClick={onClick} 
        type={type}
        {...buttonProps}
      >
        {children}
      </StyledButton>
    )
  }
  
  return getButtonComponent()
}

// Shared styles between all button types
const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`

// Base button component
const StyledButton = styled(motion.button)`
  ${buttonStyles}
  
  // Variants
  background: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.gradient :
    variant === 'secondary' ? 'transparent' : 
    variant === 'text' ? 'transparent' : theme.colors.gradient};
    
  color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.light :
    variant === 'secondary' ? theme.colors.primary : 
    variant === 'text' ? theme.colors.primary : theme.colors.light};
    
  border: ${({ variant, theme }) => 
    variant === 'secondary' ? `2px solid ${theme.colors.primary}` : 'none'};
    
  padding: ${({ size }) => 
    size === 'small' ? '0.5rem 1.25rem' :
    size === 'medium' ? '0.8rem 2rem' :
    size === 'large' ? '1rem 2.5rem' : '0.8rem 2rem'};
    
  font-size: ${({ size }) => 
    size === 'small' ? '0.8rem' :
    size === 'medium' ? '0.9rem' :
    size === 'large' ? '1rem' : '0.9rem'};
    
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  &:hover {
    background: ${({ variant, theme }) => 
      variant === 'primary' ? 'linear-gradient(90deg, #8a45d6 0%, #5b65d6 100%)' :
      variant === 'secondary' ? 'rgba(162, 88, 239, 0.1)' : 
      variant === 'text' ? 'rgba(162, 88, 239, 0.1)' : 'linear-gradient(90deg, #8a45d6 0%, #5b65d6 100%)'};
  }
`

// For internal links using React Router
const StyledButtonLink = styled(motion(Link))`
  ${buttonStyles}
  text-decoration: none;
  
  // Variants
  background: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.gradient :
    variant === 'secondary' ? 'transparent' : 
    variant === 'text' ? 'transparent' : theme.colors.gradient};
    
  color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.light :
    variant === 'secondary' ? theme.colors.primary : 
    variant === 'text' ? theme.colors.primary : theme.colors.light};
    
  border: ${({ variant, theme }) => 
    variant === 'secondary' ? `2px solid ${theme.colors.primary}` : 'none'};
    
  padding: ${({ size }) => 
    size === 'small' ? '0.5rem 1.25rem' :
    size === 'medium' ? '0.8rem 2rem' :
    size === 'large' ? '1rem 2.5rem' : '0.8rem 2rem'};
    
  font-size: ${({ size }) => 
    size === 'small' ? '0.8rem' :
    size === 'medium' ? '0.9rem' :
    size === 'large' ? '1rem' : '0.9rem'};
    
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  &:hover {
    background: ${({ variant, theme }) => 
      variant === 'primary' ? 'linear-gradient(90deg, #8a45d6 0%, #5b65d6 100%)' :
      variant === 'secondary' ? 'rgba(162, 88, 239, 0.1)' : 
      variant === 'text' ? 'rgba(162, 88, 239, 0.1)' : 'linear-gradient(90deg, #8a45d6 0%, #5b65d6 100%)'};
  }
`

// For external links
const StyledButtonExternal = styled(motion.a)`
  ${buttonStyles}
  text-decoration: none;
  
  // Variants
  background: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.gradient :
    variant === 'secondary' ? 'transparent' : 
    variant === 'text' ? 'transparent' : theme.colors.gradient};
    
  color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.light :
    variant === 'secondary' ? theme.colors.primary : 
    variant === 'text' ? theme.colors.primary : theme.colors.light};
    
  border: ${({ variant, theme }) => 
    variant === 'secondary' ? `2px solid ${theme.colors.primary}` : 'none'};
    
  padding: ${({ size }) => 
    size === 'small' ? '0.5rem 1.25rem' :
    size === 'medium' ? '0.8rem 2rem' :
    size === 'large' ? '1rem 2.5rem' : '0.8rem 2rem'};
    
  font-size: ${({ size }) => 
    size === 'small' ? '0.8rem' :
    size === 'medium' ? '0.9rem' :
    size === 'large' ? '1rem' : '0.9rem'};
    
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  &:hover {
    background: ${({ variant, theme }) => 
      variant === 'primary' ? 'linear-gradient(90deg, #8a45d6 0%, #5b65d6 100%)' :
      variant === 'secondary' ? 'rgba(162, 88, 239, 0.1)' : 
      variant === 'text' ? 'rgba(162, 88, 239, 0.1)' : 'linear-gradient(90deg, #8a45d6 0%, #5b65d6 100%)'};
  }
`

export default Button 