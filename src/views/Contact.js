import styled from 'styled-components';

const Container = styled.div`

`;

function Contact({
  ...props
}) {

  return (
    <Container {...props}>
	    Contact content goes here!
    </Container>
  );
}

export default Contact;


