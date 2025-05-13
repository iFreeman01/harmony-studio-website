import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'David Mitchell',
    role: 'Studio Director & Head Engineer',
    bio: 'With over 15 years of experience in the industry, David has worked with Grammy-winning artists and brings unparalleled expertise to every session.',
    image: 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Senior Sound Engineer',
    bio: 'Sarah specializes in vocal production and has a talent for creating intimate, emotionally resonant recordings that capture the artist\'s true essence.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Mixing & Mastering Engineer',
    bio: 'Michael\'s keen ear and technical skills have earned him recognition in the industry, with a specialty in making tracks that translate across all listening platforms.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 4,
    name: 'Elena Torres',
    role: 'Producer & Composer',
    bio: 'Elena brings a fresh perspective to every project, with a background in classical composition and a passion for electronic music production.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
]

const About = () => {
  return (
    <StyledAbout>
      <PageHeader 
        title="About Casa Koba"
        subtitle="Our story, our team, and our mission"
        backgroundImage="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />

      {/* Story Section */}
      <StorySection className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <SectionHeader 
                subtitle="Our Story"
                title="From Vision to Reality"
                description="Founded in 2010, Casa Koba began with a simple mission: to create a space where artists could bring their musical visions to life without compromise."
                light
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>What started as a small project studio in a basement has grown into one of the most respected recording facilities in the region. Throughout our journey, we've maintained our commitment to sonic excellence, artist comfort, and cutting-edge technology.</p>
                <p>Today, Casa Koba houses three world-class recording spaces, a dedicated mixing suite, and a mastering room—all designed by leading acoustic architects and equipped with the finest gear available.</p>
              </motion.div>
            </div>
            <div className="story-image">
              <motion.img 
                src="https://images.unsplash.com/photo-1547922657-b370d1687eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="Casa Koba in 2010"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </StorySection>

      {/* Values Section */}
      <ValuesSection className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Our Values"
            title="What Sets Us Apart"
            description="At Casa Koba, our approach is guided by core principles that ensure every project receives the care and attention it deserves."
            centered
            light
          />
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Technical Excellence</h3>
              <p>We constantly invest in the finest equipment and maintain rigorous technical standards to ensure your recordings sound impeccable.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Creative Comfort</h3>
              <p>We've designed our spaces to inspire creativity and provide a comfortable, relaxed environment where artists can do their best work.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Collaborative Approach</h3>
              <p>We believe in being partners in your creative process, offering guidance when needed while respecting your artistic vision.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Innovative Spirit</h3>
              <p>We're not afraid to push boundaries and explore new techniques, always staying at the forefront of recording technology and practices.</p>
            </motion.div>
          </div>
        </div>
      </ValuesSection>

      {/* Team Section */}
      <TeamSection className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Our Team"
            title="Meet the Experts"
            description="Our team of skilled professionals brings diverse experiences and specialized expertise to every project."
            centered
            light
          />
          <div className="team-grid">
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TeamSection>

      {/* Facilities Section */}
      <FacilitiesSection className="section">
        <div className="container">
          <div className="facilities-grid">
            <div className="facilities-content">
              <SectionHeader 
                subtitle="Our Facilities"
                title="World-Class Recording Spaces"
                description="Our studio complex features three distinct recording environments, each designed to complement different musical styles and recording needs."
                light
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <ul>
                  <li>
                    <strong>Studio A:</strong> Our flagship live room (1,200 sq ft) with variable acoustics, perfect for full bands and orchestral recordings.
                  </li>
                  <li>
                    <strong>Studio B:</strong> A medium-sized tracking room (800 sq ft) with a warm, intimate sound, ideal for vocal sessions and smaller ensembles.
                  </li>
                  <li>
                    <strong>Studio C:</strong> A versatile production suite optimized for electronic music, beat-making, and overdubs.
                  </li>
                  <li>
                    <strong>Mixing Suite:</strong> A precision-tuned control room equipped with industry-standard monitoring and analog summing.
                  </li>
                  <li>
                    <strong>Mastering Room:</strong> Our specialized mastering environment with exceptional acoustics and pristine conversion.
                  </li>
                </ul>
                <div className="facilities-buttons">
                  <Button to="/gallery">View Studio Gallery</Button>
                </div>
              </motion.div>
            </div>
            <div className="facilities-images">
              <motion.div 
                className="image-grid"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Studio A" />
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Studio B" />
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1506780789966-5f2bd63f216a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" alt="Studio C" />
                </div>
                <div className="grid-item">
                  <img src="https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Mixing Suite" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </FacilitiesSection>

      {/* CTA Section */}
      <CTASection className="section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Experience the Casa Koba Difference?</h2>
            <p>Contact us today to discuss your project or schedule a studio tour.</p>
            <div className="cta-buttons">
              <Button to="/contact" size="large">Contact Us</Button>
              <Button to="/services" variant="secondary" size="large">Explore Services</Button>
            </div>
          </motion.div>
        </div>
      </CTASection>
    </StyledAbout>
  )
}

const StyledAbout = styled.div`
  overflow: hidden;
`

const StorySection = styled.section`
  background-color: #0a0a0a;
  
  .story-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .story-content {
    p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }
  
  .story-image {
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: ${({ theme }) => theme.shadows.large};
    }
  }
`

const ValuesSection = styled.section`
  background-color: #0d0d0d;
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  .value-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 2rem;
    height: 100%;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: ${({ theme }) => theme.colors.primary + '40'};
      transform: translateY(-10px);
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
        width: 30px;
        height: 30px;
        color: white;
      }
    }
    
    h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.7;
    }
  }
`

const TeamSection = styled.section`
  background-color: #0a0a0a;
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  .team-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    overflow: hidden;
    height: 100%;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary + '40'};
    }
    
    .member-image {
      height: 300px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
      }
    }
    
    .member-info {
      padding: 1.5rem;
      
      h3 {
        margin-bottom: 0.25rem;
        font-size: 1.5rem;
      }
      
      h4 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1rem;
        margin-bottom: 1rem;
        font-weight: 500;
      }
      
      p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  }
`

const FacilitiesSection = styled.section`
  background-color: #0d0d0d;
  
  .facilities-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .facilities-content {
    ul {
      margin: 2rem 0;
      padding-left: 1.5rem;
      
      li {
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 1rem;
        font-size: 1.05rem;
        line-height: 1.6;
        position: relative;
        list-style-type: none;
        
        &::before {
          content: '';
          position: absolute;
          left: -1.5rem;
          top: 0.5rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors.gradient};
        }
        
        strong {
          color: ${({ theme }) => theme.colors.light};
          font-weight: 600;
        }
      }
    }
    
    .facilities-buttons {
      margin-top: 2rem;
    }
  }
  
  .facilities-images {
    .image-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 1rem;
      
      .grid-item {
        border-radius: 8px;
        overflow: hidden;
        height: 200px;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
          
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
`

const CTASection = styled.section`
  background: linear-gradient(
    rgba(10, 10, 10, 0.85), 
    rgba(10, 10, 10, 0.85)
  ), url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.light};
      
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
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      
      @media (max-width: 576px) {
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
      }
    }
  }
`

export default About 