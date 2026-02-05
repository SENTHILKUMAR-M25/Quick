import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import Hero from './Components/Hero'
import AboutSection from './Components/About'
import ServicesSection from './Components/Service'
import Footer from './Components/Footer'
import ContactForm from './Components/Contact'
import ScrollToTop from './Components/Scroll'
import Projects from './Components/Project/Projects'
import ProjectDetail from './Components/Project/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App