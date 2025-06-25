import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import PageHeader from '../components/PageHeader';
import InstagramReels from '../components/InstagramReels';
// Import studio images
import Studio1Img from '../assets/about/Studio_1.webp';
import Studio2Img from '../assets/about/Studio_2.webp';
import Studio3Img from '../assets/about/Studio_3.webp';
import Studio4Img from '../assets/about/Studio_4.webp';

const Gallery = () => {
  const { isDarkMode, t } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 9;

  // Gallery images data with translations
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('recordingStudioEquipment'),
      category: 'equipment'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('liveRecordingSession'),
      category: 'sessions'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('mixingConsole'),
      category: 'equipment'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('professionalMicrophoneSetup'),
      category: 'equipment'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('recordingSessionInProgress'),
      category: 'sessions'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1569696483293-9d1a3f6d4079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('studioControlRoom'),
      category: 'homeStudio'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('recordingStudioEquipment'),
      category: 'equipment'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('vocalRecordingSession'),
      category: 'sessions'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('studioControlRoom'),
      category: 'homeStudio'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('recordingStudioEquipment'),
      category: 'equipment'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('professionalHeadphones'),
      category: 'equipment'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: t('bandRecordingSession'),
      category: 'sessions'
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

  // Calculate total pages
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  // Get current page images
  const currentImages = filteredImages.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  const handleImageClick = (image, index) => {
    const globalIndex = currentPage * imagesPerPage + index;
    setSelectedImage(image);
    setSelectedImageIndex(globalIndex);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  const handlePrevImage = () => {
    const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : filteredImages.length - 1;
    setSelectedImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
    
    // Check if we need to change page
    const newPage = Math.floor(newIndex / imagesPerPage);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  const handleNextImage = () => {
    const newIndex = selectedImageIndex < filteredImages.length - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
    
    // Check if we need to change page
    const newPage = Math.floor(newIndex / imagesPerPage);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  // Generate CSRF token
  const generateCSRFToken = () => {
    return crypto.randomUUID();
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
          {/* Instagram Reels Section */}
          <InstagramReels />

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
                {currentImages.map((img, index) => (
                  <motion.div
                    key={`${img.id}-${currentPage}`}
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
                      onClick={() => handleImageClick(img, index)}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </GalleryGrid>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <PaginationContainer>
                <PaginationButton 
                  onClick={handlePrevPage} 
                  disabled={currentPage === 0}
                  $isDarkMode={isDarkMode}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </PaginationButton>
                
                <PageInfo $isDarkMode={isDarkMode}>
                  {currentPage + 1} / {totalPages}
                </PageInfo>
                
                <PaginationButton 
                  onClick={handleNextPage} 
                  disabled={currentPage === totalPages - 1}
                  $isDarkMode={isDarkMode}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </PaginationButton>
              </PaginationContainer>
            )}
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
                src="https://www.youtube.com/embed/4_khQYlheNY"
                title="Freeman Studio Latest Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </VideoSection>
        </div>
      </GallerySection>

      {/* Enhanced Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
            $isDarkMode={isDarkMode}
          >
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleCloseModal} $isDarkMode={isDarkMode}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </CloseButton>
              
              <NavigationButton 
                className="prev" 
                onClick={handlePrevImage}
                $isDarkMode={isDarkMode}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </NavigationButton>
              
              <ModalImage src={selectedImage.src} alt={selectedImage.alt} />
              
              <NavigationButton 
                className="next" 
                onClick={handleNextImage}
                $isDarkMode={isDarkMode}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </NavigationButton>
              
              <ImageInfo $isDarkMode={isDarkMode}>
                <h3>{selectedImage.alt}</h3>
                <p>{selectedImageIndex + 1} / {filteredImages.length}</p>
              </ImageInfo>
            </ModalContent>
          </ImageModal>
        )}
      </AnimatePresence>
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  background-color: ${({ disabled, theme }) => 
    disabled ? 'rgba(128, 128, 128, 0.3)' : 'transparent'};
  color: ${({ disabled, theme }) => 
    disabled ? 'rgba(128, 128, 128, 0.6)' : theme.colors.primary};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  &:disabled {
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
`;

const PageInfo = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  min-width: 60px;
  text-align: center;
`;

const ImageModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  z-index: 1001;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  z-index: 1001;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 0.75rem;
    
    &.prev {
      left: 0.5rem;
    }

    &.next {
      right: 0.5rem;
    }
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const ImageInfo = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem 2rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    
    h3 {
      font-size: 1rem;
    }
    
    p {
      font-size: 0.8rem;
    }
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default Gallery;