import { Footer } from './Footer';
import { NavBar } from './header/NavBar';
import styled from 'styled-components';

const Container = styled.div`
  height: auto;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #333;
`;
const Children = styled.div`
  margin: 0 auto;
  margin-top: 200px;
`;
export const Layout = (props) => {
  return (
    <Container>
      <NavBar />
      <Children>{props.children}</Children>
      <Footer />
    </Container>
  );
};
