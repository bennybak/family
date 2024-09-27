import React from 'react';
import Menu from './Menu';
import '../css/Menu.css';

const Home: React.FC = () => {
  return (
    <div>
      <Menu />
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default Home;