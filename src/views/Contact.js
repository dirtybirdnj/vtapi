import ContactForm from '../components/ContactForm';
import styled from 'styled-components';

import divider from '../svgs/divider.svg';

const Container = styled.div`
  h1 {
    text-align: center;
  }
`;

const Spacer = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  margin: 1em 0px;
`;

function Contact({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>Contact</h1>
      <Spacer>
       <img src={divider} alt="visual divider" />
     </Spacer>
      <ContactForm/>
    </Container>
  );
}

export default Contact;
