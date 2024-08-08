import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import './notFound.css';

const NotFound = () => (
  <div className="not-found-container">
    <div className="icon-container">
      <FaExclamationTriangle className="not-found-icon" />
    </div>
    <h1 className="not-found-title">Oops! Page Not Found</h1>
    <p className="not-found-text">It looks like you took a wrong turn. Let's get you back on track!</p>
    <Link to="/" className="not-found-link">
      Go to Home
    </Link>
  </div>
);

export default NotFound;
