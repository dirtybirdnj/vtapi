import ContactForm from '../components/ContactForm';
import styled from 'styled-components';
import topCap from '../svgs/topcap.svg';

const Container = styled.div`

  h1 {
    text-align: center;
  }

  .topcap {
    margin: 0px auto 25px;
    display: block;
  }
`;

function Contact({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>Contact</h1>
      <img className="topcap" src={topCap} alt="Applications, Programming, Interfaces" />
      <ContactForm/>
    </Container>
  );
}

export default Contact;
