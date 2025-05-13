import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [formErrors, setFormErrors] = useState({})
  const [formStatus, setFormStatus] = useState(null)
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' })
    }
  }
  
  // Validate form
  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    return errors
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    const errors = validateForm()
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    // In a real app, you would send the form data to a server here
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
    }, 1500)
  }
  
  return (
    <StyledContact>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team"
        backgroundImage="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />

      <ContactSection className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Get In Touch"
            title="Contact Information"
            description="Have a question or want to book a session? Reach out to us using the contact information below or fill out the form."
            centered
            light
          />

          <ContactGrid>
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="info-item">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>Blvd. 18 Sur 5510</p>
                  <p>Jardines de San Manuel, 72570</p>
                  <p>Heroica Puebla de Zaragoza, Pue.</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p><a href="tel:+525532792351">(55) 3279-2351</a></p>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p><a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a></p>
                  <p><a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a></p>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://www.instagram.com/jhn_freeman/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@Jhn_Freeman" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.312-1.732.466-3.49.46-5.25a29 29 0 0 0-.46-5.33z"/>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Send Us A Message</h3>
              
              {formStatus === 'success' ? (
                <div className="success-message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h4>Message Sent!</h4>
                  <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                  <Button onClick={() => setFormStatus(null)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name*</label>
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
                      <label htmlFor="email">Email*</label>
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
                      <label htmlFor="phone">Phone (Optional)</label>
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
                    <label htmlFor="subject">Subject*</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className={formErrors.subject ? 'error' : ''}
                    />
                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message*</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message ? 'error' : ''}
                    ></textarea>
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  </div>
                  
                  <div className="form-submit">
                    <Button 
                      type="submit" 
                      disabled={formStatus === 'sending'}
                      fullWidth
                    >
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </ContactGrid>
        </div>
      </ContactSection>

      <MapSection>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2270984177776!2d-98.20459232387033!3d19.004851687131847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc72f1efd8467%3A0xea6badc908dc7fb3!2sBlvd.%2018%20Sur%205510%2C%20Jardines%20de%20San%20Manuel%2C%2072570%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1sen!2smx!4v1695515134436!5m2!1sen!2smx" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio Location"
        ></iframe>
      </MapSection>

      <BookingSection className="section">
        <div className="container">
          <motion.div 
            className="booking-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Book a Session?</h2>
            <p>Contact us for availability or to schedule a studio tour.</p>
            <div className="booking-options">
              <div className="booking-option">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3>Call Us</h3>
                <p>(123) 456-7890</p>
                <Button variant="secondary" size="small" href="tel:+1234567890">Call Now</Button>
              </div>
              
              <div className="booking-option">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>Email Us</h3>
                <p>info@casakoba.com.mx</p>
                <Button variant="secondary" size="small" href="mailto:info@casakoba.com.mx">Send Email</Button>
              </div>
              
              <div className="booking-option">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>Book Online</h3>
                <p>Use our online booking system</p>
                <Button variant="secondary" size="small" to="/booking">Book Now</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </BookingSection>
    </StyledContact>
  )
}

const StyledContact = styled.div`
  overflow: hidden;
`

const ContactSection = styled.section`
  background-color: #0a0a0a;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .contact-info {
    .info-item {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
      
      .icon-container {
        width: 50px;
        height: 50px;
        min-width: 50px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.gradient};
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg {
          width: 24px;
          height: 24px;
          color: white;
        }
      }
      
      .info-content {
        h3 {
          margin-bottom: 0.75rem;
          font-size: 1.3rem;
        }
        
        p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
          
          a {
            color: rgba(255, 255, 255, 0.7);
            transition: all 0.3s ease;
            
            &:hover {
              color: ${({ theme }) => theme.colors.primary};
            }
          }
        }
      }
    }
    
    .social-links {
      margin-top: 3rem;
      
      h3 {
        margin-bottom: 1.25rem;
        font-size: 1.3rem;
      }
      
      .social-icons {
        display: flex;
        gap: 1rem;
        
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: white;
          transition: all 0.3s ease;
          
          &:hover {
            background: ${({ theme }) => theme.colors.gradient};
            transform: translateY(-3px);
          }
        }
      }
    }
  }
  
  .contact-form {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 2rem;
    
    h3 {
      margin-bottom: 2rem;
      font-size: 1.5rem;
      text-align: center;
    }
    
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
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 2rem;
      }
    }
    
    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
      }
      
      input, textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        color: white;
        font-family: inherit;
        transition: all 0.3s ease;
        
        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
          background: rgba(255, 255, 255, 0.07);
        }
        
        &.error {
          border-color: #f44336;
        }
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

const MapSection = styled.section`
  height: 450px;
  
  iframe {
    filter: grayscale(100%) invert(92%) contrast(90%);
  }
`

const BookingSection = styled.section`
  background: linear-gradient(
    rgba(10, 10, 10, 0.85), 
    rgba(10, 10, 10, 0.85)
  ), url('https://images.unsplash.com/photo-1524685794168-52985e79c1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  .booking-content {
    text-align: center;
    
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
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
    
    .booking-options {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      
      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .booking-option {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 2.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.06);
          border-color: ${({ theme }) => theme.colors.primary + '40'};
        }
        
        .icon-container {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors.gradient};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          
          svg {
            width: 28px;
            height: 28px;
            color: white;
          }
        }
        
        h3 {
          margin-bottom: 0.75rem;
          font-size: 1.4rem;
        }
        
        p {
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
      }
    }
  }
`

export default Contact 