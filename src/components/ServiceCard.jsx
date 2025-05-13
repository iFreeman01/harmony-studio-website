import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from './Button'

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <Card 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <IconWrapper>
        {icon}
      </IconWrapper>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {link && (
        <ButtonWrapper>
          <Button 
            to={link} 
            variant="secondary" 
            size="small"
          >
            Learn More
          </Button>
        </ButtonWrapper>
      )}
    </Card>
  )
}

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: ${({ theme }) => theme.colors.primary + '40'};
  }
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .content {
    flex: 1;
  }
`

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`

const ButtonWrapper = styled.div`
  margin-top: auto;
`

export default ServiceCard 