import styled, { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset/string';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Data
import {menu} from './data';
import { isMobileOnly } from 'react-device-detect';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  body {
    font-family: 'Alata', sans-serif;
  }

  h1 {
    font-size: ${isMobileOnly ? '2.5em' : '5em'};
    margin-bottom: .5em;
    font-weight: 800;

    ${isMobileOnly && `
      line-height: 1.25;
    `};
  }

  h2 {
    font-size: ${isMobileOnly ? '2em' : '3em'};
    margin: 0.5em .25em;
  }

  h3 {
    font-size: 2em;
    margin: 1em 0px;
    font-style: italic;
    font-weight: 100;
  }

  h4 {
    font-size: ${isMobileOnly ? '1em' : '1.5em'};
     ${isMobileOnly && `
      line-height: 1.25;
    `};
    font-weight: 9  00;
    margin-top: 1em;
    margin-bottom: .5em;
    font-family: Lato;
  }

  small  {
    font-size: .75em;
    letter-spacing: .25em;
    font-style: italic;
    font-weight: 100;
  }

  ul {
    width: auto;
    margin: 0px 12em;
  }

  li {
    font-size: 1em;
    line-height: 1.5em;
    text-align: left;
    padding: 1em;
    list-style-type: disc;
  }

  p {
    margin-bottom: 1em;
    margin-left: 5em;
    margin-right: 5em;
    line-height: 2em;
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
