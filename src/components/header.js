import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles.css';

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${visible ? 'visible' : ''}`}>
      <nav>
        <ul className="header__nav-list">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
