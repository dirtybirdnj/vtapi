import { Link } from "react-router-dom";

import styled from 'styled-components';

const Container = styled.div`

`;

function About({
  ...props
}) {

  return (
    <Container {...props}>
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
    </Container>
  );
}

export default About;
