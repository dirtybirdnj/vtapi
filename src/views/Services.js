import styled from 'styled-components';

const Container = styled.div`

`;

function Services({
  ...props
}) {

  return (
    <Container {...props}>
	    Services content goes here!
    </Container>
  );
}

export default Services;


