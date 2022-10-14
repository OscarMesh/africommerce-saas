import React from 'react';
import styled from 'styled-components';
import { HeroSection } from '../components/HeroSection';
import { Products } from '../components/products/Products';
import { Ads } from '../components/utils/Ads';
const Containter = styled.div``;
export const Home = () => {
  return (
    <Containter>
      <HeroSection />
      <Ads />
      <Products />
    </Containter>
  );
};