import React from 'react';
// import Client from '../components/Client';
import LatestNews from '../components/LatestNews';
import ProductDisplay from '../components/ProductDisplay';
import Intro from '../components/Intro';
import WhyUs from '../components/WhyUs';
import SignatureProduct from '../components/SignatureProduct';

const Home = () => {
  return (
    <div>
      <LatestNews />
      <SignatureProduct />
      <ProductDisplay />
      <Intro />
      <WhyUs />
      {/* <Client /> */}
    </div>
  );
};

export default Home;
