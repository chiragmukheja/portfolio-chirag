import  { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

const App = () => {
  // const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // const offset = window.scrollY;
      // setScrolled(offset > 100);

      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.scrollY >= top - height / 3) {
          setActiveSection(section.getAttribute('id') || 'home');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default App;