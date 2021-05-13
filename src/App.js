import styled, { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset/string';

import Header from './components/Header';
import Footer from './components/Footer';

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  body {
    font-family: 'Alata', sans-serif;
  }
`;

const AppContainer = styled.div`
  width: 90vw;
  margin: 0px auto;
  max-width: 1440px;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      HAY AN APP
      <Footer />
    </AppContainer>
  );
}

export default App;
