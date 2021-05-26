import styled from 'styled-components';
import { Link } from "react-router-dom";
import apiScrollsBanner from '../svgs/scrolls-api-paths.svg';
import divider from '../svgs/divider.svg';

const Container = styled.div`
justify-content: center;
text-align: center;

h1 {
  font-size: 5em;
  margin-bottom: .3em;
  font-weight: 800;
}

h2 {
  font-size: 3em;
}

h3 {
  font-size: 2em;
  margin: 1   em 0px;
  font-style: italic;
  font-weight: 100;
}
`;

const Spacer = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  margin: 1em 0px;
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
     <h4>Providing Vermont with creative solutions to technical challenges since 2019</h4>
     </Spacer>

      <Spacer>
      <img src={apiScrollsBanner} alt="Applications, Programming, Interfaces" />
      </Spacer>


    </Container>
  );
}

export default Home;
