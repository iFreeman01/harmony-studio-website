import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const InstagramReels = () => {
  const { isDarkMode, t } = useTheme();
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [configured, setConfigured] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);

  useEffect(() => {
    fetchInstagramReels();
  }, []);

  const fetchInstagramReels = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/instagram/reels');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch Instagram reels');
      }

      setReels(data.reels || []);
      setConfigured(data.configured);
      
      if (!data.configured) {
        console.log('Instagram API not configured yet');
      }

    } catch (err) {
      setError(err.message);
      console.error('Error fetching Instagram reels:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReelClick = (reel) => {
    setSelectedReel(reel);
  };

  const handleCloseModal = () => {
    setSelectedReel(null);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Show placeholder content if not configured
  if (!configured && !loading) {
    return (
      <InstagramSection $isDarkMode={isDarkMode}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('instagramReels') || 'Instagram Reels'}
          </motion.h2>
          <PlaceholderContainer $isDarkMode={isDarkMode}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{t('instagramComingSoon') || 'Coming Soon!'}</h3>
              <p>{t('instagramConfigMessage') || 'We\'re setting up our Instagram integration to show you the latest reels where we\'ve been tagged. Stay tuned!'}</p>
              <InstagramIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </InstagramIcon>
            </motion.div>
          </PlaceholderContainer>
        </div>
      </InstagramSection>
    );
  }

  return (
    <InstagramSection $isDarkMode={isDarkMode}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('instagramReels') || 'Instagram Reels'}
          <SubTitle $isDarkMode={isDarkMode}>
            {t('instagramSubtitle') || 'Check out the latest reels where we\'ve been tagged'}
          </SubTitle>
        </motion.h2>

        {loading && (
          <LoadingContainer>
            <LoadingSpinner $isDarkMode={isDarkMode} />
            <p>{t('loadingReels') || 'Loading reels...'}</p>
          </LoadingContainer>
        )}

        {error && (
          <ErrorContainer $isDarkMode={isDarkMode}>
            <p>{t('errorLoadingReels') || 'Error loading reels'}: {error}</p>
            <RetryButton onClick={fetchInstagramReels} $isDarkMode={isDarkMode}>
              {t('retry') || 'Retry'}
            </RetryButton>
          </ErrorContainer>
        )}

        {!loading && !error && reels.length === 0 && (
          <EmptyContainer $isDarkMode={isDarkMode}>
            <p>{t('noReelsFound') || 'No reels found with @freemanstudio mentions yet.'}</p>
          </EmptyContainer>
        )}

        {!loading && !error && reels.length > 0 && (
          <ReelsGrid>
            <AnimatePresence>
              {reels.map((reel, index) => (
                <motion.div
                  key={reel.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => handleReelClick(reel)}
                >
                  <ReelCard $isDarkMode={isDarkMode}>
                    <ReelThumbnail>
                      <img 
                        src={reel.thumbnailUrl || reel.mediaUrl} 
                        alt={reel.caption?.substring(0, 100) || 'Instagram Reel'} 
                        loading="lazy"
                      />
                      <PlayButton>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <polygon points="5,3 19,12 5,21" fill="white"/>
                        </svg>
                      </PlayButton>
                    </ReelThumbnail>
                    <ReelInfo>
                      <ReelCaption>
                        {reel.caption?.substring(0, 80) || t('noCaption') || 'No caption'}
                        {reel.caption?.length > 80 && '...'}
                      </ReelCaption>
                      <ReelDate>{formatDate(reel.timestamp)}</ReelDate>
                    </ReelInfo>
                  </ReelCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </ReelsGrid>
        )}
      </div>

      {/* Reel Modal */}
      <AnimatePresence>
        {selectedReel && (
          <ReelModal
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
              
              <ReelVideo>
                <video 
                  src={selectedReel.mediaUrl} 
                  controls 
                  autoPlay 
                  muted
                  playsInline
                />
              </ReelVideo>
              
              <ReelDetails $isDarkMode={isDarkMode}>
                <h3>{t('viewOnInstagram') || 'View on Instagram'}</h3>
                <p>{selectedReel.caption}</p>
                <ViewOnInstagramButton 
                  href={selectedReel.permalink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  $isDarkMode={isDarkMode}
                >
                  {t('openInstagram') || 'Open on Instagram'}
                </ViewOnInstagramButton>
              </ReelDetails>
            </ModalContent>
          </ReelModal>
        )}
      </AnimatePresence>
    </InstagramSection>
  );
};

// Styled Components
const InstagramSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#111111' : '#ffffff'};
  color: ${({ $isDarkMode }) => $isDarkMode ? '#ffffff' : '#1a1a1a'};

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 0.5rem;
  color: ${({ $isDarkMode }) => $isDarkMode ? '#cccccc' : '#666666'};
  background: none;
  -webkit-text-fill-color: unset;
`;

const PlaceholderContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  border: 2px dashed ${({ $isDarkMode }) => $isDarkMode ? '#333333' : '#e0e0e0'};
  border-radius: 16px;
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#1a1a1a' : '#f9f9f9'};

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ $isDarkMode }) => $isDarkMode ? '#ffffff' : '#333333'};
  }

  p {
    font-size: 1.1rem;
    color: ${({ $isDarkMode }) => $isDarkMode ? '#cccccc' : '#666666'};
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const InstagramIcon = styled.div`
  color: #e4405f;
  display: flex;
  justify-content: center;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 3rem 0;

  p {
    margin-top: 1rem;
    color: ${({ $isDarkMode }) => $isDarkMode ? '#cccccc' : '#666666'};
  }
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ $isDarkMode }) => $isDarkMode ? '#333333' : '#e0e0e0'};
  border-top: 3px solid #e4405f;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#2d1b1b' : '#fef2f2'};
  border-radius: 8px;
  border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? '#dc2626' : '#fecaca'};

  p {
    color: ${({ $isDarkMode }) => $isDarkMode ? '#fca5a5' : '#dc2626'};
    margin-bottom: 1rem;
  }
`;

const RetryButton = styled.button`
  background-color: #e4405f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d63384;
  }
`;

const EmptyContainer = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: ${({ $isDarkMode }) => $isDarkMode ? '#cccccc' : '#666666'};
`;

const ReelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
`;

const ReelCard = styled.div`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#1a1a1a' : '#ffffff'};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ $isDarkMode }) => 
    $isDarkMode 
      ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
      : '0 8px 32px rgba(0, 0, 0, 0.1)'
  };
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? '#333333' : '#e0e0e0'};

  &:hover {
    box-shadow: ${({ $isDarkMode }) => 
      $isDarkMode 
        ? '0 12px 48px rgba(0, 0, 0, 0.4)' 
        : '0 12px 48px rgba(0, 0, 0, 0.15)'
    };
  }
`;

const ReelThumbnail = styled.div`
  position: relative;
  aspect-ratio: 9/16;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const ReelInfo = styled.div`
  padding: 1rem;
`;

const ReelCaption = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  color: ${({ $isDarkMode }) => $isDarkMode ? '#ffffff' : '#333333'};
`;

const ReelDate = styled.span`
  font-size: 0.8rem;
  color: ${({ $isDarkMode }) => $isDarkMode ? '#999999' : '#666666'};
`;

const ReelModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 400px;
  max-height: 90vh;
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#1a1a1a' : '#ffffff'};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const ReelVideo = styled.div`
  aspect-ratio: 9/16;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ReelDetails = styled.div`
  padding: 1rem;
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${({ $isDarkMode }) => $isDarkMode ? '#ffffff' : '#333333'};
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 1rem;
    color: ${({ $isDarkMode }) => $isDarkMode ? '#cccccc' : '#666666'};
  }
`;

const ViewOnInstagramButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default InstagramReels; 