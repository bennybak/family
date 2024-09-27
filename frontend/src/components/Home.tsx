import React from 'react';
import Menu from './Menu';
import '../css/Menu.css';
import { useAuth } from '../AuthContext';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <Menu />
        <div>
          <h1>Welcome, {user ? user.firstName: 'Guest'} , {user ? user.lastName: ''}</h1>
          {user && <p>Your username: {user.username}</p>}
        </div>

    </div>
  );
};

export default Home;