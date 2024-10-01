import React from 'react';
import Menu from './Menu';
import '../css/Home.css';
import { useAuth } from '../AuthContext';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
<div className="home">
      <header>
        <Menu />
      </header>

      <main>
        <section id="home">
          <h2>Welcome to My Website</h2>
          <p>This is the home page content.</p>
        </section>

        <footer className="footer-sections">
          <section id="about">
            <h2>About Us</h2>
            <p>Information about us.</p>
          </section>

          <section id="services">
            <h2>Our Services</h2>
            <p>Details about services we offer.</p>
          </section>

          <section id="contact">
            <h2>Contact Us</h2>
            <p>How to reach us.</p>
          </section>
        </footer>
      </main>
    </div>
  );
};

export default Home;