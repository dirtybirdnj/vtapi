import styled from 'styled-components';

const Container = styled.div`

`;

function Values({
  ...props
}) {

  return (
    <Container {...props}>
	    Values content goes here!
    </Container>
  );
}

export default Values;


