import { Link } from "react-router-dom";

import styled from 'styled-components';

const Container = styled.div`
  text-align: center;

  h1 {
    font-size: 5em;
    margin-bottom: .3em;
    font-weight: 800;
  }
  
  h2 {
    font-size: 3em;
    margin: 1em 6em;
  }
  
  h3 {
    font-size: 2em;
    margin: 1   em 0px;
    font-style: italic;
    font-weight: 100;  
  }  
`;

function ApiExplain({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>What is an API?</h1>
      <p>The term API stands for:</p>
      <p>Application Programming Interface</p>
      <small>What does that mean in plain english?</small>
      <h3>It's a way for developers to automate systems and software designed to be modular, extendable or integrated into other systems.</h3>
      <small>Ok uh... what's an API again?</small>
      <h2>APIs are the glue that connect modern software and networks.</h2>
      <p>At its core, an API is simply:</p>
      <h3>An Interface</h3>
      <p>One of the best real-world examples of an API that most people have interacted with is the menu and speaker found at any drive-through or fast food restaurant.</p>

      <Link to="/contact">Contact Us Today</Link>
    </Container>
  );
}

export default ApiExplain;
