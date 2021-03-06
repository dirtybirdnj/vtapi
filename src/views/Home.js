import styled from 'styled-components';
import { Link } from "react-router-dom";
import { isMobileOnly } from 'react-device-detect';

import apiScrollsBanner from '../svgs/scrolls-api-paths.svg';
import divider from '../svgs/divider.svg';

const Container = styled.div`
  justify-content: center;
  text-align: center;

  h1 {
    font-size: ${isMobileOnly ? '2.5em' : '5em'};
  }

 p {
  text-align: center;
 }
`;

const Spacer = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  margin: 1em 0px;

  h4 {
    padding-bottom: 20px;
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin-top: 10px;
  }

  &:last-of-type {
    margin: 0;
  }
`;

function Home({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>Don't call it a website</h1>
     <Spacer>
       <img src={divider} alt="visual divider" />
     </Spacer>

      {/* Not sure if this should be "What is" or "What's" an API*/}
      <h2>What's an API?</h2>
      <Spacer>
      <Link to="/whats-an-api"><p>Click here to learn more.</p></Link>
      </Spacer>

      <Spacer>
       <img src={divider} alt="visual divider" />
     </Spacer>

    <Spacer>
      <p>Providing Vermont with creative solutions to technical challenges since 2019</p>
     </Spacer>

      <Spacer>
      <img src={apiScrollsBanner} alt="Applications, Programming, Interfaces" />
      </Spacer>


    </Container>
  );
}

export default Home;
