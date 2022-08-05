import React from 'react';
// import Client from '../components/Client';
import LatestNews from '../components/LatestNews';
import ProductDisplay from '../components/ProductDisplayHome';
import Intro from '../components/Intro';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <div>
      <LatestNews />
      <ProductDisplay />
      <Intro />
      <WhyUs />
      {/* <Client /> */}
    </div>
  );
};

export default Home;
