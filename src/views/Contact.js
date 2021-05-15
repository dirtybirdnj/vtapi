import ContactForm from '../components/ContactForm';

import styled from 'styled-components';

const Container = styled.div`

`;

function Contact({
  ...props
}) {

  return (
    <Container {...props}>
      <h2>Contact Form</h2>
      <ContactForm/>
    </Container>
  );
}

export default Contact;
