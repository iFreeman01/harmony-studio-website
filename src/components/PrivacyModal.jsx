import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyModal = ({ isOpen, onClose }) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Prevent click events from propagating to background
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleContentClick}
          >
            <CloseButton onClick={onClose}>×</CloseButton>
            
            <ModalHeader>
              <h2>Aviso de Privacidad</h2>
              <p className="subtitle">Resumen del Aviso de Privacidad de Freeman Studio</p>
            </ModalHeader>
            
            <ModalBody>
              <section>
                <h3>Identidad y Domicilio del Responsable</h3>
                <p>
                  <strong>Freeman Studio</strong>, con domicilio en Blvd. 18 Sur 5510, Jardines de San Manuel, 72570 Heroica Puebla de Zaragoza, Pue.,
                  es responsable del tratamiento de sus datos personales.
                  <br />
                  Contacto: <a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a>
                </p>
              </section>
              
              <section>
                <h3>Finalidad del Tratamiento</h3>
                <p>
                  Recopilamos sus datos para responder consultas, procesar reservaciones y mejorar nuestros servicios.
                </p>
              </section>
              
              <section>
                <h3>Datos Recopilados</h3>
                <p>
                  Nombre, correo electrónico, teléfono (opcional), y detalles relacionados con los servicios solicitados.
                </p>
              </section>
              
              <section>
                <h3>Transferencias</h3>
                <p>
                  No compartimos sus datos con terceros, excepto proveedores esenciales (p. ej., hosting), bajo confidencialidad.
                </p>
              </section>
              
              <section>
                <h3>Derechos ARCO</h3>
                <p>
                  Usted puede acceder, rectificar, cancelar u oponerse al uso de sus datos enviando un correo a <a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a>.
                </p>
              </section>
            </ModalBody>
            
            <ModalFooter>
              <p>
                Este es un resumen. Consulte el <Link to="/privacy-policy" onClick={onClose}>Aviso de Privacidad completo</Link> para más información.
              </p>
              <p className="consent-checkbox">
                <input type="checkbox" id="privacy-consent" name="privacy-consent" />
                <label htmlFor="privacy-consent">He leído y acepto el <Link to="/privacy-policy" onClick={onClose}>Aviso de Privacidad</Link></label>
              </p>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background || '#fff'};
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 650px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  color: ${({ theme }) => theme.colors.textPrimary || '#000'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary || '#000'};
  z-index: 10;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ModalHeader = styled.div`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border || '#eee'};
  
  h2 {
    margin: 0;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.textPrimary || '#000'};
    background: ${({ theme }) => theme.colors.gradient || 'linear-gradient(90deg, #a258ef 0%, #6c77eb 100%)'};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    margin: 0.5rem 0 0;
    color: ${({ theme }) => theme.colors.textSecondary || '#666'};
    font-size: 0.95rem;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem 2rem;
  
  section {
    margin-bottom: 1.2rem;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    h3 {
      font-size: 1.1rem;
      margin: 0 0 0.7rem;
      color: ${({ theme }) => theme.colors.textPrimary || '#000'};
    }
    
    p {
      margin: 0;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.textSecondary || '#666'};
      font-size: 0.95rem;
      
      a {
        color: ${({ theme }) => theme.colors.primary || '#a258ef'};
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const ModalFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border || '#eee'};
  
  p {
    margin: 0 0 1rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary || '#666'};
    
    &:last-child {
      margin-bottom: 0;
    }
    
    a {
      color: ${({ theme }) => theme.colors.primary || '#a258ef'};
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .consent-checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    
    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    
    label {
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;

export default PrivacyModal; 