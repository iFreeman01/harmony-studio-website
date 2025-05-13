import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

// Services data
const services = [
  {
    id: 1,
    title: 'Recording',
    description: 'Capture your sound with precision and clarity in our acoustically optimized studios.',
    details: [
      'Multi-track recording in acoustically designed spaces',
      'Full band or individual instrument recording',
      'Premium microphones, preamps, and outboard gear',
      'Flexible booth setups for isolation and live tracking',
      'Session musicians available upon request'
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Mixing',
    description: 'Transform your raw tracks into a polished, cohesive production with our expert mixing services.',
    details: [
      'Professional mixing in acoustically treated control rooms',
      'Analog and digital hybrid mixing approach',
      'Detailed balancing, panning, and EQ',
      'Creative effects processing and automation',
      'Stem mixing options available'
    ],
    image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Mastering',
    description: 'The final touch that ensures your music sounds its best on any platform or format.',
    details: [
      'Precision mastering in acoustically optimized environment',
      'Analog and digital processing for depth and clarity',
      'Format-specific optimization (streaming, vinyl, CD)',
      'Stem mastering available for complex projects',
      'Reference mastering and revisions included'
    ],
    image: 'https://images.unsplash.com/photo-1569696483293-9d1a3f6d4079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Music Production',
    description: 'Full-service music production from concept to final master.',
    details: [
      'Comprehensive arrangement and production services',
      'Experienced producers across multiple genres',
      'Beat production and instrumental composition',
      'Top-tier session musicians available',
      'Complete packages from pre-production to final master'
    ],
    image: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Vocal Production',
    description: 'Specialized vocal recording and production to make your vocals shine.',
    details: [
      'Premium vocal microphones and signal chain',
      'Comfortable, acoustically-treated vocal booths',
      'Expert coaching for optimal performance',
      'Pitch correction and vocal editing',
      'Creative vocal effects and processing'
    ],
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m5.657-8.485a1 1 0 00-1.414 0l-2.829 2.829a1 1 0 000 1.414l2.829 2.829a1 1 0 001.414 0 1 1 0 000-1.414L9.414 12l2.243-2.243a1 1 0 000-1.414L12 9z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Post-Production',
    description: 'Audio services for film, TV, podcasts, and other media projects.',
    details: [
      'Dialogue editing and ADR (Automated Dialogue Replacement)',
      'Sound design and Foley recording',
      'Music composition and scoring',
      'Surround sound mixing (5.1, 7.1, Atmos)',
      'Final audio delivery in all required formats'
    ],
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    )
  }
]

// Pricing packages
const packages = [
  {
    id: 1,
    name: 'Basic',
    price: 'From $400',
    description: 'Perfect for solo artists and small projects',
    features: [
      '8 hours of studio time',
      'Recording & basic mixing',
      'Up to 8 tracks',
      'Digital delivery',
      'One revision'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Professional',
    price: 'From $1,200',
    description: 'Comprehensive package for serious artists',
    features: [
      '24 hours of studio time',
      'Recording, mixing & mastering',
      'Unlimited tracks',
      'Digital delivery',
      'Three revisions',
      'Session musicians available',
      'Basic promotion package'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Premium',
    price: 'Custom',
    description: 'Full-service production for albums and major projects',
    features: [
      'Custom studio time allocation',
      'Full production services',
      'Dedicated producer',
      'Advanced mixing & mastering',
      'Unlimited revisions',
      'Premium session musicians',
      'Comprehensive promotion package',
      'Vinyl & physical media preparation'
    ],
    popular: false
  }
]

const Services = () => {
  return (
    <StyledServices>
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive audio solutions for artists and creators"
        backgroundImage="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      />

      {/* Services List */}
      <ServicesList className="section">
        <div className="container">
          <SectionHeader 
            subtitle="What We Offer"
            title="Comprehensive Audio Services"
            description="From recording and mixing to full-scale music production, we offer everything you need to bring your creative vision to life."
            centered
            light
          />

          {services.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              className={index % 2 === 0 ? 'even' : 'odd'}
            >
              <motion.div 
                className="service-content"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="description">{service.description}</p>
                <ul className="features">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="service-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src={service.image} alt={service.title} />
              </motion.div>
            </ServiceItem>
          ))}
        </div>
      </ServicesList>

      {/* Pricing */}
      <PricingSection className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Pricing"
            title="Flexible Packages for Every Need"
            description="We offer several service tiers to accommodate different project sizes and budgets."
            centered
            light
          />
          
          <div className="pricing-grid">
            {packages.map((pkg) => (
              <motion.div 
                key={pkg.id}
                className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: pkg.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {pkg.popular && <span className="popular-badge">Most Popular</span>}
                <h3>{pkg.name}</h3>
                <div className="price">{pkg.price}</div>
                <p className="pkg-description">{pkg.description}</p>
                <ul className="features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button to="/contact" fullWidth>Get Started</Button>
              </motion.div>
            ))}
          </div>
          
          <div className="custom-pricing">
            <p>Need a custom solution? Contact us for a tailored quote specific to your project requirements.</p>
            <Button to="/contact" variant="secondary">Contact for Custom Quote</Button>
          </div>
        </div>
      </PricingSection>

      {/* Process */}
      <ProcessSection className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Our Process"
            title="How We Work"
            description="Our streamlined workflow ensures a smooth experience from initial consultation to final delivery."
            centered
            light
          />
          
          <div className="process-steps">
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We start with a detailed discussion of your project goals, requirements, and vision to ensure we're aligned on expectations.</p>
            </motion.div>
            
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We develop a detailed production plan, timeline, and budget tailored to your specific needs and creative direction.</p>
            </motion.div>
            
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <h3>Production</h3>
              <p>Our team executes the plan with meticulous attention to detail, keeping you involved throughout the creative process.</p>
            </motion.div>
            
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step-number">4</div>
              <h3>Refinement</h3>
              <p>We gather your feedback and make revisions to ensure the final product perfectly aligns with your vision.</p>
            </motion.div>
            
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="step-number">5</div>
              <h3>Delivery</h3>
              <p>We provide your completed project in all requested formats, ready for distribution or the next phase of your creative journey.</p>
            </motion.div>
          </div>
        </div>
      </ProcessSection>

      {/* CTA */}
      <CTASection className="section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today to discuss your needs and schedule a studio visit.</p>
            <Button to="/contact" size="large">Get in Touch</Button>
          </motion.div>
        </div>
      </CTASection>
    </StyledServices>
  )
}

const StyledServices = styled.div`
  overflow: hidden;
`

const ServicesList = styled.section`
  background-color: #0a0a0a;
`

const ServiceItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 6rem;
  align-items: center;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 8rem;
    
    &.odd {
      .service-content {
        order: 2;
      }
      
      .service-image {
        order: 1;
      }
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .service-content {
    .service-icon {
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
    }
    
    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.light};
      
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }
    
    .description {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 0.8rem;
      
      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      li {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        color: rgba(255, 255, 255, 0.7);
        
        svg {
          margin-top: 4px;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  
  .service-image {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows.medium};
    
    img {
      width: 100%;
      height: auto;
      display: block;
      transition: all 0.5s ease;
      
      &:hover {
        transform: scale(1.03);
      }
    }
  }
`

const PricingSection = styled.section`
  background-color: #0d0d0d;
  
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .pricing-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 2.5rem 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: ${({ theme }) => theme.colors.primary + '40'};
    }
    
    &.popular {
      border-color: ${({ theme }) => theme.colors.primary};
      background: rgba(162, 88, 239, 0.05);
    }
    
    .popular-badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: ${({ theme }) => theme.colors.gradient};
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
    
    h3 {
      text-align: center;
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
    
    .price {
      text-align: center;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    .pkg-description {
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .features {
      margin-bottom: 2rem;
      flex-grow: 1;
      
      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.8);
        
        svg {
          color: ${({ theme }) => theme.colors.primary};
          flex-shrink: 0;
        }
      }
    }
  }
  
  .custom-pricing {
    text-align: center;
    margin-top: 4rem;
    
    p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1.5rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

const ProcessSection = styled.section`
  background-color: #0a0a0a;
  
  .process-steps {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    position: relative;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 992px) {
      grid-template-columns: repeat(5, 1fr);
      
      &::before {
        content: '';
        position: absolute;
        top: 60px;
        left: 60px;
        right: 60px;
        height: 2px;
        background: linear-gradient(90deg, #a258ef 0%, #6c77eb 100%);
        z-index: 0;
      }
    }
    
    .step {
      text-align: center;
      position: relative;
      z-index: 1;
      
      .step-number {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.gradient};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
      }
      
      h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }
      
      p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  }
`

const CTASection = styled.section`
  background: linear-gradient(
    rgba(10, 10, 10, 0.85), 
    rgba(10, 10, 10, 0.85)
  ), url('https://images.unsplash.com/photo-1574022909844-0bc8ebc40f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  .cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      @media (max-width: 768px) {
        font-size: 2.2rem;
      }
    }
    
    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }
`

export default Services 