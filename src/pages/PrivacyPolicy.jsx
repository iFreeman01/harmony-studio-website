import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

const PrivacyPolicy = () => {
  const { isDarkMode } = useTheme();
  const [language, setLanguage] = useState('en'); // Default to English

  return (
    <StyledPrivacyPolicy>
      <PageHeader 
        title="Privacy Policy"
        subtitle="How we protect your information"
        backgroundImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />

      <PolicySection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <motion.div 
            className="content-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="language-toggle">
              <button 
                className={language === 'en' ? 'active' : ''} 
                onClick={() => setLanguage('en')}
              >
                English
              </button>
              <button 
                className={language === 'es' ? 'active' : ''} 
                onClick={() => setLanguage('es')}
              >
                Español
              </button>
            </div>

            {language === 'en' ? (
              <>
                <h2>Casa Koba Privacy Notice</h2>
                <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="policy-content">
                  <section>
                    <h3>1. Introduction</h3>
                    <p>
                      At Casa Koba, we value your privacy and are committed to protecting your personal data. 
                      This Privacy Notice explains how we collect, use, and safeguard your information when you visit our website or 
                      interact with our services. By using our website, you agree to the collection and use of information in 
                      accordance with this policy.
                    </p>
                  </section>

                  <section>
                    <h3>2. Information We Collect</h3>
                    <p>We collect the following personal information:</p>
                    <ul>
                      <li><strong>Contact Form Data:</strong> Name, email address, phone number (optional), subject, and message content when you submit our contact form</li>
                      <li><strong>Service Quote Requests:</strong> Name, email, phone (optional), service type, and project details</li>
                      <li><strong>Usage Data:</strong> Information on how you access and use our website, including your IP address, browser type, time spent on pages, and pages visited</li>
                    </ul>
                  </section>

                  <section>
                    <h3>3. How We Use Your Information</h3>
                    <p>We use your personal information for the following purposes:</p>
                    <ul>
                      <li>To respond to your inquiries and provide information about our studio services</li>
                      <li>To process booking requests and service inquiries</li>
                      <li>To improve our website functionality and user experience</li>
                      <li>To communicate with you about your requests or questions</li>
                    </ul>
                    <p>We use your email <em>only</em> to respond to your booking inquiry or service request. We do not share your data with third parties without your consent.</p>
                  </section>

                  <section>
                    <h3>4. Cookies and Tracking Technologies</h3>
                    <p>
                      Our website uses the following types of cookies:
                    </p>
                    <ul>
                      <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                      <li><strong>Analytics cookies:</strong> To improve your experience by analyzing how you use our site (anonymized data)</li>
                    </ul>
                    <p>
                      You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
                      However, some parts of the website may not function properly if you disable cookies.
                    </p>
                  </section>

                  <section>
                    <h3>5. Third-Party Services</h3>
                    <p>
                      We use Google Maps on our contact page to show our studio location. Google may collect information about your use of this service.
                      We do not sell your personal data to any third parties. Our analytics services use anonymized data to help us improve our website.
                    </p>
                  </section>

                  <section>
                    <h3>6. Data Security</h3>
                    <p>
                      We implement appropriate security measures to protect your personal information against unauthorized access, 
                      alteration, disclosure, or destruction. All form submissions include CSRF protection to prevent cross-site request forgery attacks,
                      and we sanitize all user inputs to prevent injection attacks.
                    </p>
                  </section>

                  <section>
                    <h3>7. Your Rights (ARCO Rights)</h3>
                    <p>
                      Under applicable privacy laws (including GDPR and CCPA), you have the following rights:
                    </p>
                    <ul>
                      <li><strong>Access:</strong> You can request access to your personal data we hold</li>
                      <li><strong>Rectification:</strong> You can request correction of your personal data</li>
                      <li><strong>Cancellation/Deletion:</strong> You can request deletion of your personal data</li>
                      <li><strong>Opposition/Objection:</strong> You can object to our processing of your personal data</li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us at <a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a>.
                    </p>
                  </section>

                  <section>
                    <h3>8. California Consumer Privacy Act (CCPA) Rights</h3>
                    <p>
                      If you are a California resident, you have the right to:
                    </p>
                    <ul>
                      <li>Know what personal information is being collected about you</li>
                      <li>Know whether your personal information is sold or disclosed and to whom</li>
                      <li>Say no to the sale of personal information</li>
                      <li>Access your personal information</li>
                      <li>Request deletion of your personal information</li>
                    </ul>
                    <p>
                      Casa Koba does not sell personal information to third parties.
                    </p>
                  </section>

                  <section>
                    <h3>9. Changes to This Privacy Notice</h3>
                    <p>
                      We may update our Privacy Notice from time to time. We will notify you of any changes by posting the new 
                      Privacy Notice on this page and updating the "Last Updated" date.
                    </p>
                  </section>

                  <section>
                    <h3>10. Contact Us</h3>
                    <p>
                      If you have any questions about this Privacy Notice, please contact us at:
                    </p>
                    <p>
                      <strong>Email:</strong> <a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a><br />
                      <strong>Address:</strong> Blvd. 18 Sur 5510, Jardines de San Manuel, 72570 Heroica Puebla de Zaragoza, Pue.
                    </p>
                  </section>
                </div>
              </>
            ) : (
              <>
                <h2>Aviso de Privacidad de Casa Koba</h2>
                <p className="last-updated">Última Actualización: {new Date().toLocaleDateString()}</p>

                <div className="policy-content">
                  <section>
                    <h3>1. Identidad y Domicilio del Responsable</h3>
                    <p>
                      <strong>Casa Koba</strong>, con domicilio en Blvd. 18 Sur 5510, Jardines de San Manuel, 72570 Heroica Puebla de Zaragoza, Pue., 
                      es responsable del tratamiento de sus datos personales.
                    </p>
                    <p>
                      Para cualquier duda o aclaración, puede contactarnos a través del correo electrónico: <a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a>
                    </p>
                  </section>

                  <section>
                    <h3>2. Datos Personales Recabados</h3>
                    <p>Para cumplir con las finalidades previstas en este Aviso de Privacidad, recabamos los siguientes datos personales:</p>
                    <ul>
                      <li><strong>Datos de Identificación:</strong> Nombre</li>
                      <li><strong>Datos de Contacto:</strong> Dirección de correo electrónico, número de teléfono (opcional)</li>
                      <li><strong>Datos de Servicios:</strong> Tipo de servicio solicitado, detalles del proyecto</li>
                    </ul>
                    <p>
                      Hacemos de su conocimiento que no recabamos datos personales sensibles.
                    </p>
                  </section>

                  <section>
                    <h3>3. Finalidades del Tratamiento</h3>
                    <p>
                      Los datos personales que recabamos serán utilizados para las siguientes finalidades:
                    </p>
                    <ul>
                      <li>Responder a sus consultas y proporcionar información sobre nuestros servicios de estudio</li>
                      <li>Procesar solicitudes de reserva y consultas de servicios</li>
                      <li>Mejorar la funcionalidad de nuestro sitio web y la experiencia del usuario</li>
                      <li>Comunicarnos con usted sobre sus solicitudes o preguntas</li>
                    </ul>
                  </section>

                  <section>
                    <h3>4. Transferencias de Datos</h3>
                    <p>
                      No compartimos sus datos personales con terceros, excepto proveedores esenciales (p. ej., servicios de hosting), 
                      bajo condiciones de confidencialidad. Estas transferencias no requieren su consentimiento conforme a la Ley Federal 
                      de Protección de Datos Personales en Posesión de los Particulares.
                    </p>
                  </section>

                  <section>
                    <h3>5. Derechos ARCO</h3>
                    <p>
                      Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones 
                      del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso 
                      de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o 
                      bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones 
                      previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
                    </p>
                    <p>
                      Para ejercer sus derechos ARCO, por favor envíe un correo electrónico a <a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a> 
                      indicando su solicitud y proporcionando la información necesaria para acreditar su identidad.
                    </p>
                  </section>

                  <section>
                    <h3>6. Uso de Cookies y Tecnologías de Seguimiento</h3>
                    <p>
                      Nuestro sitio web utiliza cookies y otras tecnologías de seguimiento para mejorar su experiencia. 
                      Estas nos permiten:
                    </p>
                    <ul>
                      <li>Recordar sus preferencias y ajustes</li>
                      <li>Analizar cómo utiliza nuestro sitio para mejorar su rendimiento</li>
                    </ul>
                    <p>
                      Puede configurar su navegador para rechazar todas o algunas cookies, o para alertarle cuando los sitios web 
                      establecen o acceden a cookies. Sin embargo, algunas partes del sitio web pueden no funcionar correctamente 
                      si deshabilita las cookies.
                    </p>
                  </section>

                  <section>
                    <h3>7. Modificaciones al Aviso de Privacidad</h3>
                    <p>
                      Nos reservamos el derecho de efectuar modificaciones o actualizaciones al presente Aviso de Privacidad 
                      en cualquier momento. Estas modificaciones estarán disponibles a través de nuestra página web.
                    </p>
                  </section>

                  <section>
                    <h3>8. Consentimiento</h3>
                    <p>
                      Al proporcionar sus datos personales a través de nuestros formularios o por cualquier otro medio, 
                      usted consiente que sus datos sean tratados de conformidad con este Aviso de Privacidad.
                    </p>
                    <p>
                      En todos nuestros formularios de recopilación de datos, incluimos una casilla de verificación para que 
                      usted pueda expresar su consentimiento: "[ ] He leído y acepto el <a href="/privacy-policy">Aviso de Privacidad</a>".
                    </p>
                  </section>

                  <section>
                    <h3>9. Disponibilidad</h3>
                    <p>
                      Este aviso de privacidad está disponible en formato impreso en nuestro estudio y en formato digital 
                      en nuestra página web en <a href="/privacy-policy">www.casakoba.com.mx/privacy-policy</a>.
                    </p>
                  </section>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </PolicySection>
    </StyledPrivacyPolicy>
  )
}

const StyledPrivacyPolicy = styled.div`
  overflow: hidden;
`

const PolicySection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.8)'};

  .content-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }

  .language-toggle {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 1rem;

    button {
      padding: 0.5rem 1.5rem;
      border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
      background: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)'};
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};

      &:hover {
        background: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 1)'};
      }

      &.active {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .last-updated {
    font-style: italic;
    margin-bottom: 3rem;
    opacity: 0.7;
  }

  .policy-content {
    section {
      margin-bottom: 2.5rem;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }

      p {
        margin-bottom: 1rem;
        line-height: 1.6;
      }

      ul {
        margin-bottom: 1rem;
        padding-left: 1.5rem;

        li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
      }

      a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export default PrivacyPolicy 