import React from 'react';
import HeaderTop from '../components/HedaerTop/HeaderTop';
import MenuPage from '../components/MenuPage/MenuPage';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderTop />
      <MenuPage />
    </div>
  );
};

export default Home;