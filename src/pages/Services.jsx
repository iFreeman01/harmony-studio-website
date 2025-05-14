import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'
import * as Yup from 'yup'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { useTheme } from '../context/ThemeContext'

// Function to generate CSRF token
const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

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
    title: 'Dolby Atmos',
    description: 'Immersive audio mixing for Apple Music, Tidal, and other spatial audio platforms.',
    details: [
      'Specialized Dolby Atmos certified mixing environment',
      'Spatial audio mixing for enhanced listener engagement',
      'Convert stereo recordings to immersive 3D audio',
      'Optimized for Apple Music spatial audio format',
      'Full compatibility with all major streaming platforms'
    ],
    image: 'https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5v3a2.5 2.5 0 005 0v-3a2.5 2.5 0 10-5 0M13.5 10.5v3a2.5 2.5 0 005 0v-3a2.5 2.5 0 10-5 0"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM7.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
      </svg>
    )
  },
  {
    id: 7,
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

const Services = () => {
  // Form state for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [formErrors, setFormErrors] = useState({})
  const [formStatus, setFormStatus] = useState(null)
  const [csrfToken, setCsrfToken] = useState('')
  const { isDarkMode, t } = useTheme()
  
  // Generate CSRF token on component mount
  useEffect(() => {
    setCsrfToken(generateCSRFToken())
  }, [])

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string().matches(/^[0-9()-\s+]*$/, 'Phone number is not valid'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required')
  })
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    // Sanitize input before storing in state
    const sanitizedValue = DOMPurify.sanitize(value)
    setFormData({ ...formData, [name]: sanitizedValue })
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' })
    }
  }
  
  // Validate form
  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false })
      return {}
    } catch (err) {
      const errors = {}
      err.inner.forEach(error => {
        errors[error.path] = error.message
      })
      return errors
    }
  }
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const errors = await validateForm()
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    // In a real app, you would send the form data and CSRF token to a server here
    // For now, we'll just simulate a successful submission
    setFormStatus('sending')
    
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      // Regenerate CSRF token after successful submission
      setCsrfToken(generateCSRFToken())
    }, 1500)
  }

  return (
    <StyledServices>
      <PageHeader 
        title="Our Services"
        subtitle="Professional studio services for every project"
        backgroundImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />

      {/* Services List */}
      <ServicesList className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <SectionHeader 
            subtitle={t('whatWeOffer')}
            title={t('comprehensiveAudioServices')}
            description={t('servicesDescription')}
            centered
            light={isDarkMode}
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

      {/* Contact Form Section (Replacing Pricing) */}
      <ContactFormSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <SectionHeader 
            subtitle={t('getInTouch')}
            title="Request a Quote"
            description="Interested in our services? Fill out the form below and we'll contact you with a personalized quote for your project."
            centered
            light={isDarkMode}
          />
          
          <div className="form-container">
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {formStatus === 'success' ? (
                <div className="success-message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h4>{t('messageSent')}</h4>
                  <p>{t('thankYou')}</p>
                  <Button onClick={() => setFormStatus(null)}>{t('sendAnotherMessage')}</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Hidden CSRF token field */}
                  <input type="hidden" name="csrf_token" value={csrfToken} />
                  
                  <div className="form-group">
                    <label htmlFor="name">{t('name')}*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t('email')}*</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">{t('phone')} ({t('optional')})</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">{t('serviceInterestedIn')}*</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={formErrors.subject ? 'error' : ''}
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{t('tellAboutProject')}*</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message ? 'error' : ''}
                      placeholder="Please include details about your project, timeline, and any specific requirements."
                    ></textarea>
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  </div>
                  
                  <div className="form-submit">
                    <Button 
                      type="submit" 
                      disabled={formStatus === 'sending'}
                      fullWidth
                    >
                      {formStatus === 'sending' ? 'Sending...' : t('requestQuote')}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </ContactFormSection>

      {/* Process */}
      <ProcessSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <SectionHeader 
            subtitle="How We Work"
            title="Our Process"
            description="Our streamlined approach to your project ensures quality results every time."
            centered
            light={isDarkMode}
          />
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>We discuss your project goals, vision, and requirements to understand your needs.</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We develop a customized plan including timeline, resources, and approach.</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Production</h3>
              <p>Recording, tracking, and capturing the core elements of your project.</p>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <h3>Post-Production</h3>
              <p>Mixing, mastering, and refining to achieve the perfect sound.</p>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <h3>Delivery</h3>
              <p>Final product delivered in your preferred formats with all necessary files.</p>
            </div>
          </div>
        </div>
      </ProcessSection>

      {/* CTA */}
      <CTASection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together. Contact us today to discuss your next project.</p>
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
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#eaeaea'};
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
      color: ${({ theme }) => theme.colors.textPrimary};
      
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }
    
    .description {
      font-size: 1.1rem;
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
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
        color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
        
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

const ContactFormSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0d0d0d' : '#eaeaea'};
  
  .form-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .contact-form {
    background: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.8)'};
    border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: 12px;
    padding: 2.5rem;
    
    .success-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      
      svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 1.5rem;
      }
      
      h4 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      
      p {
        color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
        margin-bottom: 2rem;
      }
    }
    
    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }
      
      input, textarea, select {
        width: 100%;
        padding: 0.75rem 1rem;
        background: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)'};
        border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.textPrimary};
        font-family: inherit;
        transition: all 0.3s ease;
        
        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          background: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.07)' : 'rgba(255, 255, 255, 1)'};
        }
        
        &.error {
          border-color: #f44336;
        }
      }
      
      select {
        appearance: none;
        background-image: ${({ $isDarkMode }) => $isDarkMode 
          ? `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`
          : `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`
        };
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 1em;
        padding-right: 2.5rem;
      }
      
      select option {
        background-color: ${({ $isDarkMode }) => $isDarkMode ? '#222' : '#fff'};
        color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : 'black'};
      }
      
      .error-message {
        color: #f44336;
        font-size: 0.85rem;
        margin-top: 0.5rem;
        display: block;
      }
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      
      @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .form-submit {
      margin-top: 2rem;
    }
  }
`

const ProcessSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  
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
        color: ${({ theme }) => theme.colors.textPrimary};
      }
      
      p {
        color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  }
`

const CTASection = styled.section`
  background: linear-gradient(
    ${({ $isDarkMode }) => $isDarkMode ? 'rgba(10, 10, 10, 0.85)' : 'rgba(245, 245, 247, 0.85)'}, 
    ${({ $isDarkMode }) => $isDarkMode ? 'rgba(10, 10, 10, 0.85)' : 'rgba(245, 245, 247, 0.85)'}
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
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }
`

export default Services 