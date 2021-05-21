import styled, { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset/string';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Data
import {menu} from './data';

// Components
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
  overflow: hidden;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      
      <Router basename={process.env.PUBLIC_URL}>
       <Header />
        <Switch>
          {Object.keys(menu).map((i) => {
            return(
              <Route key={i} exact path={menu[i].path} component ={menu[i].component} />
            )
          })}
        </Switch>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
