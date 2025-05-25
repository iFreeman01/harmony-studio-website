import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import PageHeader from '../components/PageHeader';
import ImageModal from '../components/ImageModal';

const Gallery = () => {
  const { isDarkMode } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  // Studio gallery images
  const studioImages = [
    {
      src: '/src/assets/about/Studio_1.webp',
      alt: 'Recording Studio Equipment'
    },
    {
      src: '/src/assets/about/Studio_2.webp',
      alt: 'Mixing Console'
    },
    {
      src: '/src/assets/about/Studio_3.webp',
      alt: 'Studio Control Room'
    },
    {
      src: '/src/assets/about/Studio_4.webp',
      alt: 'Live Recording Session'
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <StyledGallery>
      <PageHeader 
        title="Audio Samples & Studio Gallery"
        subtitle="Listen to our work and explore our studio spaces"
        backgroundImage="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
      />

      <GallerySection $isDarkMode={isDarkMode}>
        <div className="container">
          <AudioSamplesContainer>
            <h2>Listen to Our Samples</h2>
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
          </AudioSamplesContainer>

          <div>
            <h2>Studio Gallery</h2>
            <GalleryGrid>
              {studioImages.map((img, index) => (
                <GalleryImage
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </GalleryGrid>
          </div>

          <VideoSection>
            <h2>Check my latest video</h2>
            <div className="video-container">
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
            </div>
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
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
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