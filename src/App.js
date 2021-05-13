import styled, { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset/string';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

//TODO: Move menu info to json
import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';
import Services from './views/Services';
import Values from './views/Values';

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
      
      <Router>
       <Header />
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route exact path="/about" component ={About} />
          <Route exact path="/contact" component ={Contact} />
          <Route exact path="/services" component ={Services} />
          <Route exact path="/values" component ={Values} />
        </Switch>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
