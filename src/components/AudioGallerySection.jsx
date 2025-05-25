import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const AudioGallerySection = styled.section`
  padding: 4rem 0;
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ $isDarkMode }) => $isDarkMode ? '#ffffff' : '#1a1a1a'};
`;

const SubSectionTitle = styled.h3`
  font-size: 2rem;
  margin: 2rem 0 1.5rem;
  color: ${({ $isDarkMode }) => $isDarkMode ? '#ffffff' : '#1a1a1a'};
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

const AudioGallery = () => {
  const { isDarkMode } = useTheme();

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

  return (
    <AudioGallerySection $isDarkMode={isDarkMode}>
      <Container>
        <SectionTitle $isDarkMode={isDarkMode}>Audio Samples & Gallery Studio</SectionTitle>
        
        <AudioSamplesContainer>
          <SubSectionTitle $isDarkMode={isDarkMode}>Listen to Our Samples</SubSectionTitle>
          <iframe
            src="https://open.spotify.com/embed/playlist/0A05cjkA86rZIsIwgS69zG?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </AudioSamplesContainer>

        <div>
          <SubSectionTitle $isDarkMode={isDarkMode}>Studio Gallery</SubSectionTitle>
          <GalleryGrid>
            {studioImages.map((img, index) => (
              <GalleryImage
                key={index}
                src={img.src}
                alt={img.alt}
              />
            ))}
          </GalleryGrid>
        </div>
      </Container>
    </AudioGallerySection>
  );
};

export default AudioGallery; 