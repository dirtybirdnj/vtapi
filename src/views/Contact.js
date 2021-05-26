import ContactForm from '../components/ContactForm';

import styled from 'styled-components';

const Container = styled.div`

`;

function Contact({
  ...props
}) {

  return (
    <Container {...props}>
      <ContactForm/>
    </Container>
  );
}

export default Contact;
