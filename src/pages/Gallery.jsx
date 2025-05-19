import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

// Gallery data
const galleryItems = [
  {
    id: 1,
    title: 'Studio A - Live Room',
    category: 'studios',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description: 'Our spacious main live room featuring adjustable acoustics and premium recording equipment.'
  },
  {
    id: 2,
    title: 'Control Room',
    category: 'studios',
    image: 'https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    description: 'The heart of our studio, featuring a Neve console and high-end monitoring setup.'
  },
  {
    id: 3,
    title: 'Drum Recording',
    category: 'sessions',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A dynamic drum recording session in our acoustically treated main room.'
  },
  {
    id: 4,
    title: 'Mixing Session',
    category: 'sessions',
    image: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Our engineers at work during an intensive mixing session.'
  },
  {
    id: 5,
    title: 'Studio B - Tracking Room',
    category: 'studios',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Our medium-sized tracking room with excellent natural acoustics, perfect for smaller ensembles.'
  },
  {
    id: 6,
    title: 'String Session',
    category: 'sessions',
    image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A string quartet recording session at Harmony Studio.'
  },
  {
    id: 7,
    title: 'Analog Equipment',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1548502632-6b93092fdd0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    description: 'Part of our premium collection of analog outboard gear.'
  },
  {
    id: 8,
    title: 'Microphone Collection',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1607511826783-da2696e86c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1363&q=80',
    description: 'A selection of our high-end microphones for various recording scenarios.'
  },
  {
    id: 9,
    title: 'Lounge Area',
    category: 'facilities',
    image: 'https://images.unsplash.com/photo-1518537268511-2b3be80036ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Our comfortable lounge area where artists can relax between sessions.'
  },
  {
    id: 10,
    title: 'Live Performance',
    category: 'sessions',
    image: 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
    description: 'A band performing a live recording session in our main studio.'
  },
  {
    id: 11,
    title: 'Vocal Booth',
    category: 'studios',
    image: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Our specialized vocal booth with premium acoustic treatment and sight lines to the control room.'
  },
  {
    id: 12,
    title: 'Mastering Suite',
    category: 'studios',
    image: 'https://images.unsplash.com/photo-1594623274890-b834671de0b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Our dedicated mastering suite with state-of-the-art equipment and acoustic design.'
  }
]

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredItems, setFilteredItems] = useState(galleryItems)
  const [activeItem, setActiveItem] = useState(null)
  const [categories] = useState([
    { id: 'all', name: 'All' },
    { id: 'studios', name: 'Studios' },
    { id: 'sessions', name: 'Sessions' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'facilities', name: 'Facilities' }
  ])

  // Filter gallery items based on selectedCategory
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(galleryItems)
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory))
    }
  }, [selectedCategory])

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  // Handle gallery item click to show lightbox
  const handleItemClick = (item) => {
    setActiveItem(item)
  }

  // Close lightbox
  const closeLightbox = () => {
    setActiveItem(null)
  }

  return (
    <StyledGallery>
      <PageHeader 
        title="Studio Gallery"
        subtitle="Explore our spaces, equipment, and creative sessions"
        backgroundImage="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
      />

      <GallerySection className="section">
        <div className="container">
          <SectionHeader 
            subtitle="Our Gallery"
            title="Visual Tour of Harmony Studio"
            description="Take a virtual tour through our world-class facilities, equipment, and recording sessions."
            centered
          />

          {/* Filter categories */}
          <Categories>
            {categories.map((category) => (
              <CategoryButton 
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={selectedCategory === category.id ? 'active' : ''}
              >
                {category.name}
              </CategoryButton>
            ))}
          </Categories>

          {/* Gallery grid */}
          <GalleryGrid>
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="image-container">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="overlay">
                    <h3>{item.title}</h3>
                    <p className="category">{categories.find(cat => cat.id === item.category)?.name}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </GalleryGrid>

          {/* Lightbox */}
          <AnimatePresence>
            {activeItem && (
              <Lightbox 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
              >
                <motion.div 
                  className="lightbox-content"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="close-button" onClick={closeLightbox}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="lightbox-image">
                    <img src={activeItem.image} alt={activeItem.title} />
                  </div>
                  <div className="lightbox-info">
                    <h3>{activeItem.title}</h3>
                    <p className="category">{categories.find(cat => cat.id === activeItem.category)?.name}</p>
                    <p className="description">{activeItem.description}</p>
                  </div>
                </motion.div>
              </Lightbox>
            )}
          </AnimatePresence>
        </div>
      </GallerySection>
    </StyledGallery>
  )
}

const StyledGallery = styled.div`
  overflow: hidden;
`

const GallerySection = styled.section`
  background-color: #0a0a0a;
  color: white;
  h1, h2, h3, h4, h5, h6, p, span, .section-header, .category, .overlay, .gallery-item, .gallery-item * {
    color: white !important;
  }
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

const CategoryButton = styled.button`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  padding: 0.6rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: white;
  }
  
  &.active {
    background: ${({ theme }) => theme.colors.gradient};
    border-color: transparent;
    color: white;
  }
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .gallery-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 250px;
    
    @media (min-width: 768px) {
      height: 280px;
    }
    
    .image-container {
      width: 100%;
      height: 100%;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
      }
    }
    
    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      transition: all 0.3s ease;
      transform: translateY(50%);
      opacity: 0;
      
      h3 {
        margin-bottom: 0.25rem;
        font-size: 1.25rem;
      }
      
      .category {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
    
    &:hover {
      .image-container img {
        transform: scale(1.05);
      }
      
      .overlay {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`

const Lightbox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  .lightbox-content {
    position: relative;
    width: 100%;
    max-width: 900px;
    background: #0d0d0d;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 992px) {
      flex-direction: row;
      max-height: 80vh;
    }
    
    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1;
      transition: all 0.3s ease;
      color: white;
      
      &:hover {
        background: ${({ theme }) => theme.colors.primary};
      }
    }
    
    .lightbox-image {
      width: 100%;
      
      @media (min-width: 992px) {
        width: 60%;
      }
      
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        
        @media (min-width: 992px) {
          height: 100%;
        }
      }
    }
    
    .lightbox-info {
      padding: 2rem;
      flex: 1;
      
      h3 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
      }
      
      .category {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
      }
      
      .description {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
      }
    }
  }
`

export default Gallery 