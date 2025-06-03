import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from './context/ThemeContext'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import SessionDrummer from './pages/SessionDrummer'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

// Theme Context Provider
import { ThemeProvider } from './context/ThemeContext'

function AppContent() {
  const { isDarkMode } = useTheme();
  
  console.log("Rendering AppContent with isDarkMode:", isDarkMode);
  
  return (
    <div className="app">
      <Navbar />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:service" element={<ServiceDetail />} />
          <Route path="/session-drummer" element={<SessionDrummer />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App 