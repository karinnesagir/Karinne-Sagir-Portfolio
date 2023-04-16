import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" id="navigation" class="list">
      <li className={`nav-item ${currentPage === 'About' ? 'active' : ''}`}>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className="nav-link"
        >
          About
        </a>
      </li>
      <li className={`nav-item ${currentPage === 'Portfolio' ? 'active' : ''}`}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className="nav-link"
        >
          Portfolio
        </a>
      </li>
      <li className={`nav-item ${currentPage === 'Contact' ? 'active' : ''}`}>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className="nav-link"
        >
          Contact
        </a>
      </li>
      <li className={`nav-item ${currentPage === 'Resume' ? 'active' : ''}`}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className="nav-link"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;