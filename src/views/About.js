import styled from 'styled-components';

const Container = styled.div`
	
`;

function About({
  ...props
}) {

  return (
    <Container {...props}>
	    About content goes here!
    </Container>
  );
}

export default About;


