import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <img src="https://via.placeholder.com/300" alt="Placeholder" />
      <section>
        <h2>About Me</h2>
        <p>
          Hi, I'm a web developer passionate about building responsive and modern web applications.
        </p>
      </section>
    </div>
  );
}

export default Home;