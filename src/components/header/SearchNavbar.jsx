import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const SearchNavbars = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2em;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  padding: 1em 0;
  border-color: var(--soft-secondary) !important;
  border-bottom: 1px solid #dee2e6 !important;
`;

const LogoContainer = styled.div`
 
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
 
  display: flex;
  align-items: center;
  

  .form-group-container {
    display: flex;
    align-items: center;

    .form-search input{
    
      height: 20px;
      padding: .73em;
      border: 1px solid #eee;
      
      border-radius: 4px 0 0 4px;
    }

    .form-icon-btn{
      background-color: red;
      padding: .5em 1em;
      color: white !important;
      border-radius: 0 4px 4px 0;
      min-height: 20px;
    }
  }
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2em;

  .options-list {
    display: flex;
    align-items: center;
    gap: 0.4em;
  }
`;

export const SearchNavbar = () => {
  return (
    <SearchNavbars>
      <LogoContainer className="logo">
        <h1>LOGO</h1>
      </LogoContainer>

      <SearchContainer>
        <form>
          <div className="form-group-container">
            <div className="form-search" >
              <input placeholder="search for your products" />
            </div>
            <div className="form-icon-btn">
              <SearchIcon />
            </div>
          </div>
        </form>
      </SearchContainer>

      <Options className="options">
        <div className="options-list">
          <div>
            <FlipCameraAndroidIcon />
          </div>
          <div>
            <div>
              <p>Compare</p>
            </div>
          </div>
        </div>
        <div className="options-list">
          <div>
            <FavoriteBorderIcon />
          </div>
          <div>
            <div>
              <p>Wishlist</p>
            </div>
          </div>
        </div>
        <div className="options-list">
          <div>
            <ShoppingCartOutlinedIcon />
          </div>
          <div>
            <div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </Options>
    </SearchNavbars>
  );
};
