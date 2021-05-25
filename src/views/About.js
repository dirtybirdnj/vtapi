import { Link } from "react-router-dom";

import styled from 'styled-components';
import matPic from '../imgs/mat-at-vtcc.jpeg';

const Container = styled.div`

  display: flex;
  flex-direction: row;
  align-items: stretch;

  img {
    width: 50%;
  }
`;

function About({
  ...props
}) {

  return (
    <Container {...props}>
      <div>
      <img src={matPic} alt="Mat Gilbert"/>
      </div>
      <div>
      <h2>Who:</h2>
      <p>Mat Gilbert</p>
      <h2>What:</h2>
      <p>vtapi.co</p>
      <p>aka Vermont API, LLC</p>
      <h2>When:</h2>
      <p>Since 2019</p>
      <h2>Where:</h2>
      <p>Vermont, the greater Burlington area.</p>
      <h1>Why?</h1>
      <p>To improve understanding of web technologies and help organizations improve efficiency.</p>
      <p><Link to="/values">Learn more about our Values</Link></p>
      </div>
    </Container>
  );
}

export default About;
