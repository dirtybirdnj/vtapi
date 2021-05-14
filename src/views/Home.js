import styled from 'styled-components';

import apiScrollsBanner from '../svgs/api-fancy-banners-2.svg';
import divider from '../svgs/divider.svg';

const Container = styled.div`
justify-content: center;
text-align: center;
`;



function Home({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>We don't do "websites"</h1>
      <h3>We provide advice, information and solutions</h3>


      <img src={divider} alt="visual divider" />
      {/* Not sure if this should be "What is" or "What's" an API*/}
      <h2>What's an API?</h2>
      <p>Click here to learn more.</p>
      <img src={divider} alt="visual divider" />


      <img src={apiScrollsBanner} alt="Applications, Programming, Interfaces" />

      <h4>Providing Vermont with creative solutions to technical challenges since 2019</h4>
    </Container>
  );
}

export default Home;
