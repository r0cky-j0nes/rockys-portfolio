import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles.css';

const InfoCard = ({ imageSrc, name, role, bio, onHoverToggle }) => {
  return (
    <div className="about-card">
      <div className="about-card-image">
        <img
          src={imageSrc}
          alt={`${name} Headshot`}
          onMouseEnter={() => onHoverToggle(true)}
          onMouseLeave={() => onHoverToggle(false)}
        />
      </div>
      <div className="about-card-text">
        <h1 className="about-card-name typing">{name}</h1>
        <h2 className="about-card-role typing">{role}</h2>
        <p className="about-card-bio">{bio}</p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  onHoverToggle: PropTypes.func.isRequired
};

export default InfoCard;
