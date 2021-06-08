
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';

import topCap from '../svgs/topcap.svg';
import contactInfo from '../svgs/contact-info.svg';

const Container = styled.div`

  text-align: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

  h3 {
    font-size: 3em;
  }

  .topcap {
    margin: ${isMobileOnly ? '0px auto' : '0px auto 10px'};
    display: block;
  }

  ${isMobileOnly && `
    .contact {
      width: 100%;
    }
  `}

  

  p {
    width: 100%;
    text-align: center;
  }


`;

function Contact({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>Contact</h1>
      <img className="topcap" src={topCap} alt="Applications, Programming, Interfaces" />
      <img className="contact" src={contactInfo} alt="contact information, in SVG path form to avoid scraping. For visually impaired readers, please email m a t at the website domain listed."/>
      <p>Email is preferred, most messages responded to within 24 to 48 hours.</p>

    </Container>
  );
}

export default Contact;
