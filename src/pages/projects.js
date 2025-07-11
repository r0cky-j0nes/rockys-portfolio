import React from 'react';

// Define your project entries here
const projects = [
  {
    title: 'Weather App',
    description: 'A Vue.js weather application showing hourly and 5-day forecasts using OpenWeather API.',
    imageUrl: './assets/weather-app.png',
    link: 'https://r0cky-j0nes.github.io/jones_web125_weatherapp/'
  },
  {
    title: 'Price Calculator',
    description: 'A tool to help clients view services and prices. Allowing calculations to view total price',
    imageUrl: '/assets/pricelist.png',
    link: 'https://r0cky-j0nes.github.io/BRW-priceList/'
  },
  {
    title: 'County Website Redesign',
    description: 'Redesigned Macon County, NC website using Bootstrap and CSS Grid for responsive layouts.',
    imageUrl: './assets/images/county-redesign.png',
    link: 'https://r0cky-j0nes.github.io/maconCounty/'
  }
];

const Projects = () => {
  return (
    <main className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
