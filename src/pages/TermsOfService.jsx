import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { useTheme } from '../context/ThemeContext'

const TermsOfService = () => {
  const { isDarkMode } = useTheme();

  return (
    <StyledTermsOfService>
      <PageHeader 
        title="Terms of Service"
        subtitle="Rules and guidelines for using our services"
        backgroundImage="https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      />

      <TermsSection className="section" $isDarkMode={isDarkMode}>
        <div className="container">
          <motion.div 
            className="content-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Freeman Studio Terms of Service</h2>
            <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="terms-content">
              <section>
                <h3>1. Acceptance of Terms</h3>
                <p>
                  These Terms of Service ("Terms") govern your use of the Freeman Studio website and studio services
                  operated by Freeman Studio ("us", "we", or "our"). By accessing or using our service, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h3>2. Description of Service</h3>
                <p>
                  Freeman Studio provides professional recording studio services, including but not limited to recording, mixing,
                  mastering, and music production services. We also provide information about our services through our website.
                </p>
              </section>

              <section>
                <h3>3. Use of Services</h3>
                <p>
                  Freeman Studio provides professional recording studio services, including but not limited to recording, mixing, 
                  mastering, music production, vocal production, Dolby Atmos mixing, and post-production services.
                </p>
                <h4>3.1 Acceptable Use</h4>
                <p>
                  When using our Services, you agree to:
                </p>
                <ul>
                  <li>Provide accurate information when submitting forms or communicating with us</li>
                  <li>Use our Services for lawful purposes only</li>
                  <li>Respect our studio equipment and facilities</li>
                  <li>Follow all studio guidelines and safety procedures</li>
                </ul>
                <h4>3.2 Prohibited Activities</h4>
                <p>
                  You may not:
                </p>
                <ul>
                  <li>Use our Services for any illegal or unauthorized purpose</li>
                  <li>Distribute spam or malicious content through our contact forms</li>
                  <li>Attempt to interfere with or compromise the system integrity or security</li>
                  <li>Engage in unauthorized commercial use of our content</li>
                  <li>Misrepresent your identity or affiliation with any person or organization</li>
                </ul>
              </section>

              <section>
                <h3>4. Booking and Payment</h3>
                <p>
                  Sessions must be booked in advance, either through our website's contact form or by direct communication 
                  with our staff. Specific payment terms, cancellation policies, and refund conditions will be provided upon booking 
                  confirmation and may vary based on the service requested.
                </p>
              </section>

              <section>
                <h3>5. Intellectual Property</h3>
                <h4>5.1 Our Content</h4>
                <p>
                  All content on the Freeman Studio website, including text, graphics, logos, images, audio clips, and software, is the property of Freeman Studio or its content suppliers and is protected by copyright laws. The compilation of all content on this site is the exclusive property of Freeman Studio.
                </p>
                <h4>5.2 Your Content</h4>
                <p>
                  You retain all rights to your original music and recordings created using our studio services. However, by using our services, you grant us permission to:
                </p>
                <ul>
                  <li>Display your name and project in our client portfolio (with your consent)</li>
                  <li>Use non-confidential project information for promotional purposes (with your consent)</li>
                </ul>
                <p>
                  We will not use, distribute, or sell your musical content without your explicit written permission.
                </p>
              </section>

              <section>
                <h3>6. Disclaimer of Warranties</h3>
                <p>
                  Freeman Studio is not responsible for:
                </p>
                <ul>
                  <li>Technical issues beyond our control</li>
                  <li>Loss or damage to personal equipment brought to the studio</li>
                  <li>Delays caused by equipment failure or other unforeseen circumstances</li>
                </ul>
              </section>

              <section>
                <h3>7. Limitation of Liability</h3>
                <p>
                  In no event shall Freeman Studio be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h3>8. Indemnification</h3>
                <p>
                  You agree to indemnify, defend, and hold harmless Freeman Studio, its officers, directors, employees, agents, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms.
                </p>
              </section>

              <section>
                <h3>9. Changes to Terms</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Mexico, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be resolved exclusively in the courts of Puebla, Mexico.
                </p>
              </section>

              <section>
                <h3>9. Severability</h3>
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h3>10. Contact Information</h3>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:info@casakoba.com.mx">info@casakoba.com.mx</a><br />
                  <strong>Address:</strong> Blvd. 18 Sur 5510, Jardines de San Manuel, 72570 Heroica Puebla de Zaragoza, Pue.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </TermsSection>
    </StyledTermsOfService>
  )
}

const StyledTermsOfService = styled.div`
  overflow: hidden;
`

const TermsSection = styled.section`
  background-color: ${({ $isDarkMode }) => $isDarkMode ? '#0a0a0a' : '#f5f5f7'};
  color: ${({ $isDarkMode }) => $isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.8)'};

  .content-wrapper {
    max-width: 900px;
    margin: 0 auto;
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

  .terms-content {
    section {
      margin-bottom: 2.5rem;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }

      h4 {
        font-size: 1.2rem;
        margin: 1.5rem 0 0.75rem;
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

export default TermsOfService 