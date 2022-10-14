import React from 'react';
import styled from 'styled-components';
import { BottomNavbar } from './BottomNavbar';
import { TopNavbar } from './TopNavbar';
import { SearchNavbar } from './SearchNavbar';

const Top = styled.div`
  position: fixed;
  // height: 150px;
  width: 100%;
`;

const Navbar = styled.div`
  position: fixed;
  // height: 150px;
  width:100%;
  border-bottom: 1px solid #dee2e6!important;
  /* .z-1035 : z-index: 1035 !important; */
  margin: 0 auto;
`;

export const NavBar = () => {
  return (
    <>
      <Navbar>
        <div style={{borderBottom: "0.1px solid rgb(204 204 204 / 52)"}}>
          <TopNavbar />
        </div>
        <div style={{borderBottom: "0.1px solid rgb(204 204 204 / 52)"}}>
          <SearchNavbar />
        </div>
        <div style={{borderBottom: "0.1px solid rgb(204 204 204 / 52)"}}>
          <BottomNavbar />
        </div>
        {/*
      <BottomNavbar /> */}
      </Navbar>
    </>
  );
};
