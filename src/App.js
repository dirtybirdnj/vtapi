import styled, { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset/string';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  .topcap {
    height: 60px;
    width: 200px;
    margin: 0px 0px 25px;;

  }

  a {
    color: #000;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }

  h1 {
    font-size: ${isMobileOnly ? '2.5em' : '4em'};
    margin-bottom: 10px;
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
    margin-bottom: 0.5em;
    font-style: italic;
    font-weight: 100;
  }

  h4 {
    font-size: ${isMobileOnly ? '1em' : '1.5em'};
    font-weight: bold;
    margin-bottom: .25em;
  }

  small  {
    font-size: .75em;
    letter-spacing: .25em;
    font-style: italic;
    font-weight: 100;
  }

  ul {
    margin: ${isMobileOnly ? '0px 0px 0px 2em' : '0px 12em'};
  }

  li {
    font-size: 1em;
    line-height: 1.5em;
    text-align: left;
    padding: 0.5em;
    list-style-type: disc;
  }

  p {
    text-align: left;
    margin-bottom: 1em;
    line-height: 2em;
  }
`;

const AppContainer = styled.div`
  width: 90vw;
  margin: 0px auto;
  max-width: 800px;
  overflow: hidden;
`;

function App() {
  //useTracking('G-7DFBQJNE5N')
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
