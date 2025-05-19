import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterLinks = () => {
  return (
    <StyledFooterLinks>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <span>|</span>
      <Link to="/terms-of-service">Terms of Service</Link>
    </StyledFooterLinks>
  )
}

const StyledFooterLinks = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  font-size: 0.85rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  span {
    font-size: 0.85rem;
  }
`

export default FooterLinks 