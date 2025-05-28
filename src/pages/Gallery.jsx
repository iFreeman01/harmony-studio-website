import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import PageHeader from '../components/PageHeader';
import ImageModal from '../components/ImageModal';
// Import studio images
import Studio1Img from '../assets/about/Studio_1.webp';
import Studio2Img from '../assets/about/Studio_2.webp';
import Studio3Img from '../assets/about/Studio_3.webp';
import Studio4Img from '../assets/about/Studio_4.webp';

const Gallery = () => {
  const { isDarkMode, t } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Gallery images organized by categories
  const galleryImages = [
    {
      id: 1,
      src: Studio1Img,
      alt: t('recordingStudioEquipment'),
      category: 'homeStudio'
    },
    {
      id: 2,
      src: Studio2Img,
      alt: t('mixingConsole'),
      category: 'equipment'
    },
    {
      id: 3,
      src: Studio3Img,
      alt: t('studioControlRoom'),
      category: 'homeStudio'
    },
    {
      id: 4,
      src: Studio4Img,
      alt: t('liveRecordingSession'),
      category: 'sessions'
    },
    // Add more placeholder images for demonstration
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional microphone setup",
      category: 'equipment'
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Recording session in progress",
      category: 'sessions'
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Studio acoustic panels",
      category: 'homeStudio'
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Audio interface and equipment",
      category: 'equipment'
    }
  ];

  // Filter categories
  const filterCategories = [
    { key: 'all', label: t('all') },
    { key: 'homeStudio', label: t('homeStudio') },
    { key: 'sessions', label: t('sessions') },
    { key: 'equipment', label: t('equipment') }
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <StyledGallery>
      <PageHeader 
        title={t('galleryPageTitle')}
        subtitle={t('galleryPageSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
      />

      <GallerySection $isDarkMode={isDarkMode}>
        <div className="container">
          {/* Audio Samples Section */}
          <AudioSamplesContainer>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('listenToSamples')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <iframe 
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/0A05cjkA86rZIsIwgS69zG?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </motion.div>
          </AudioSamplesContainer>

          {/* Studio Gallery Section */}
          <StudioGalleryContainer>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('studioGallery')}
            </motion.h2>

            {/* Filter Buttons */}
            <FilterContainer>
              <FilterLabel>{t('filterBy')}:</FilterLabel>
              <FilterButtons>
                {filterCategories.map((category) => (
                  <FilterButton
                    key={category.key}
                    $active={activeFilter === category.key}
                    $isDarkMode={isDarkMode}
                    onClick={() => handleFilterChange(category.key)}
                  >
                    {category.label}
                  </FilterButton>
                ))}
              </FilterButtons>
            </FilterContainer>

            {/* Gallery Grid */}
            <GalleryGrid>
              <AnimatePresence mode="wait">
                {filteredImages.map((img) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <GalleryImage
                      src={img.src}
                      alt={img.alt}
                      onClick={() => handleImageClick(img)}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </GalleryGrid>
          </StudioGalleryContainer>

          {/* Video Section */}
          <VideoSection>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('checkLatestVideo')}
            </motion.h2>
            <motion.div 
              className="video-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube-nocookie.com/embed/5S4yLWRp6wo?si=WOC1A0GLuZHMIU-s" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </motion.div>
          </VideoSection>
        </div>
      </GallerySection>

      <ImageModal 
        isOpen={selectedImage !== null}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </StyledGallery>
  );
};

const StyledGallery = styled.div`
  overflow: hidden;
`;

const GallerySection = styled.section`
  padding: 4rem 0;
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  color: ${({ $isDarkMode }) => $isDarkMode ? '#ffffff' : '#1a1a1a'};

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: ${({ $isDarkMode }) => $isDarkMode ? '#ffffff' : '#1a1a1a'};
  }
`;

const AudioSamplesContainer = styled.div`
  margin-bottom: 4rem;
  
  iframe {
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StudioGalleryContainer = styled.div`
  margin-bottom: 4rem;
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FilterLabel = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  background-color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? '#ffffff' : theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const VideoSection = styled.div`
  margin-top: 4rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.shadows.medium};
    background: ${({ theme }) => theme.colors.dark};
    
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;

export default Gallery;