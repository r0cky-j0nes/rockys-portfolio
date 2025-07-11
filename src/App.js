import React, { useState, useEffect } from 'react';
import RainbowAnimation from './components/rainbowAnimation';
import { Routes, Route } from 'react-router-dom';
import Header   from './components/header';
import Footer   from './components/Footer';
import AboutMe  from './pages/aboutMe';
import Projects from './pages/projects';
import Contact  from './pages/contact';
import logo from './assets/images/logo.png';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load (e.g., fetch data or wait 2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={logo} alt="Loading..." className="spinner logo-spinner" />
      </div>
    );
  }

  return (
    <>
      <RainbowAnimation />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe  />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact  />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;



