import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import OurStoryImg from '../assets/about/Our_Story.webp'
import JohnImg from '../assets/about/John.webp'
import KobaImg from '../assets/about/Koba.webp'
import Studio4Img from '../assets/about/Studio_4.webp'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { isDarkMode, t } = useTheme();
  
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: t('johnFreeman'),
      role: t('johnRole'),
      bio: t('johnBio'),
      image: JohnImg
    },
    {
      id: 2,
      name: t('koba'),
      role: t('kobaRole'),
      bio: t('kobaBio'),
      image: KobaImg
    }
  ]
  
  return (
    <StyledAbout>
      <PageHeader 
        title={t('aboutPageTitle')}
        subtitle={t('aboutPageSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />

      {/* Story Section */}
      <StorySection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <SectionHeader 
                subtitle={t('storySubtitle')}
                title={t('storyTitle')}
                description={t('storyDescription')}
                light={isDarkMode}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>{t('storyContent1')}</p>
                <p>{t('storyContent2')}</p>
              </motion.div>
            </div>
            <div className="story-image">
              <motion.img 
                src={OurStoryImg}
                alt="Casa Koba Studio"
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
      <ValuesSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <SectionHeader 
            subtitle={t('valuesSubtitle')}
            title={t('valuesTitle')}
            description={t('valuesDescription')}
            centered
            light={isDarkMode}
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
              <h3>{t('technicalExcellenceTitle')}</h3>
              <p>{t('technicalExcellenceDescription')}</p>
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
              <h3>{t('creativeComfortTitle')}</h3>
              <p>{t('creativeComfortDescription')}</p>
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
              <h3>{t('collaborativeApproachTitle')}</h3>
              <p>{t('collaborativeApproachDescription')}</p>
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
              <h3>{t('innovativeSpiritTitle')}</h3>
              <p>{t('innovativeSpiritDescription')}</p>
            </motion.div>
          </div>
        </div>
      </ValuesSection>

      {/* Team Section */}
      <TeamSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <SectionHeader 
            subtitle={t('teamSubtitle')}
            title={t('teamTitle')}
            description={t('teamDescription')}
            centered
            light={isDarkMode}
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
      <FacilitiesSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <div className="facilities-grid">
            <div className="facilities-content">
              <SectionHeader 
                subtitle={t('facilitiesSubtitle')}
                title={t('facilitiesTitle')}
                description={t('facilitiesDescription')}
                light={isDarkMode}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>{t('facilitiesContent1')}</p>
                <p>{t('facilitiesContent2')}</p>
                
                <div className="facilities-list">
                  <div className="facility-item">
                    <div className="facility-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <strong>{t('recordingEquipment')}:</strong> {t('recordingEquipmentDesc')}
                    </div>
                  </div>
                  
                  <div className="facility-item">
                    <div className="facility-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div>
                      <strong>{t('acousticTreatment')}:</strong> {t('acousticTreatmentDesc')}
                    </div>
                  </div>
                  
                  <div className="facility-item">
                    <div className="facility-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <div>
                      <strong>{t('mixingMastering')}:</strong> {t('mixingMasteringDesc')}
                    </div>
                  </div>
                  
                  <div className="facility-item">
                    <div className="facility-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <strong>{t('comfortableEnvironment')}:</strong> {t('comfortableEnvironmentDesc')}
                    </div>
                  </div>
                </div>
                
                <div className="facilities-buttons">
                  <Button to="/services">{t('ourServices')}</Button>
                  <Button to="/contact" variant="secondary">{t('getInTouch')}</Button>
                </div>
              </motion.div>
            </div>
            <div className="facilities-image">
              <motion.img 
                src={Studio4Img}
                alt="Casa Koba Studio Facilities"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </FacilitiesSection>

      {/* CTA Section */}
      <CTASection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{t('readyToStartProject')}</h2>
            <p>{t('getInTouch')}</p>
            <div className="cta-buttons">
              <Button to="/contact" size="large">{t('contactMe')}</Button>
              <Button to="/services" variant="secondary" size="large">{t('ourServices')}</Button>
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
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#fff'};
  
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
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
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
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0d0d0d' : '#f7f7f9'};
  
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
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
      line-height: 1.7;
    }
  }
`

const TeamSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  
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
        color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  }
`

const FacilitiesSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0d0d0d' : '#f7f7f9'};
  
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
    p {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
    }
    
    .facilities-list {
      margin: 2rem 0;
      
      .facility-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 8px;
        transition: all 0.3s ease;
        
        &:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }
        
        .facility-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors.gradient};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          
          svg {
            width: 20px;
            height: 20px;
            color: white;
          }
        }
        
        div:last-child {
          color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
          font-size: 1.05rem;
          line-height: 1.6;
          
          strong {
            color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : '#222'};
            font-weight: 600;
          }
        }
      }
    }
    
    .facilities-buttons {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      
      @media (max-width: 576px) {
        flex-direction: column;
      }
    }
  }
  
  .facilities-image {
    order: 2;
    
    @media (min-width: 992px) {
      order: 0;
    }
    
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: ${({ theme }) => theme.shadows.large};
    }
  }
`

const CTASection = styled.section`
  background: ${({ $isDarkMode }) => $isDarkMode
    ? 'linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)'
    : 'linear-gradient(rgba(255,255,255,0.92), rgba(245,245,247,0.92)), url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)'};
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
      color: ${({ $isDarkMode }) => $isDarkMode ? 'white' : '#222'};
      
      @media (max-width: 768px) {
        font-size: 2.2rem;
      }
    }
    
    p {
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(20,20,20,0.85)'};
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