import React from 'react';
import styled from 'styled-components';
import { AdsSection } from '../components/ads/AdsSection';
import { HeroSection } from '../components/HeroSection';
import Products from '../components/products/Products';
<<<<<<< HEAD
import { Ads } from '../components/utils/Ads';
=======
>>>>>>> 574b97a (Product Detail)

const Containter = styled.div``;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  position: relative;
  padding: 20px;
`;

export const Home = () => {
  return (
    <Containter>
      <HeroSection />
<<<<<<< HEAD
      <Ads />
=======
      <AdsSection />
      <Products />
>>>>>>> 574b97a (Product Detail)
      <ProductsContainer>
        <Products />
      </ProductsContainer>
    </Containter>
  );
};
