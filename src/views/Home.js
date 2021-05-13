import styled from 'styled-components';

const Container = styled.div`

`;

function Home({
  ...props
}) {

  return (
    <Container {...props}>
	    Home content goes here!
    </Container>
  );
}

export default Home;


