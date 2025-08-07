import React from 'react';
import './Home.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <img src="/IMG_4012.jpeg" alt="Site Visual" />
      <section>
        <h2>About Me</h2>
        <p>
          Hi, I'm a web developer passionate about building responsive and modern web applications.
        </p>
      </section>
      <section className="social-media">
        <h2>Connect with Me</h2>
        <div className="social-media-links">
          <div className="social-link">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={32} />
            </a>
          </div>
          <div className="social-link">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size={32} />
            </a>
          </div>
          <div className="social-link">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;