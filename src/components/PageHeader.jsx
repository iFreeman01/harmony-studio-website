import styled from 'styled-components'
import { motion } from 'framer-motion'

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <Header backgroundImage={backgroundImage}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </Header>
  )
}

const Header = styled.header`
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 70px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ backgroundImage }) => backgroundImage ? `url(${backgroundImage})` : 'none'};
    background-size: cover;
    background-position: center;
    filter: brightness(0.4);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.dark};
    background: linear-gradient(
      0deg,
      rgba(10, 10, 10, 1) 0%,
      rgba(10, 10, 10, 0.7) 50%,
      rgba(10, 10, 10, 0.5) 100%
    );
    z-index: -1;
  }
  
  .container {
    text-align: center;
    max-width: 800px;
  }
  
  h1 {
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1rem;
    font-size: 3.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

export default PageHeader 