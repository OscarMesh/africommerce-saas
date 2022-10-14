import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  position: fixed;
  height: 150px;
  background: gray;
  width: inherit;
  margin: 0 auto;
  z-index: 99;
  top: 0;
`;
export const NavBar = () => {
  return <Navbar>NavBar</Navbar>;
};
