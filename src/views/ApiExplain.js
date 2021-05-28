import { Link } from "react-router-dom";
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';

import apiFastFood from "../svgs/api-fastfood.svg";
import topCap from '../svgs/topcap.svg';
import divider from '../svgs/divider.svg';

const Container = styled.div`
  text-align: center;
  justify-content: center;

  h4 {
    text-align: left;
    padding-top: 30px;

    &:first-of-type {
      padding-top: 0px;
    }
  }

  h3 {
    margin: 15px 0px 20px;

    &.space {
      margin: 40px;
    }
  }

  .divider {
    padding-top: 20px;
  }

  ul {
    position: relative;
    left: 20px;
    margin-bottom: 50px;
  }
`;

const SpeakerTalk = styled.div`
  font-style: italic;
  padding: 2em 2em;
  padding-bottom: .5em;
  font-size: 1em;
`;

const Spacer = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  margin: 1em 0px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${isMobileOnly ? 'column' : 'row'};
  justify-content: space-between;
  margin-bottom: 20px;

  div:first-child {
    flex: 70% 0 0;
  }

  div:last-child {
    min-width: 17%;
  }

  p {
    margin-bottom: 5px;

    &:last-of-type {
      margin-top: 10px;
    }
  }

  ul {
    margin: 0px;
    margin: ${isMobileOnly ? '0 0 20px' : '0px'};
  }
`;

const FlexColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${isMobileOnly ? 'column' : 'row'};

  div {
    text-align: left;
    margin: 0 5% 0 0;

    ul {
      margin: 0px;
    }
  }

  div:last-of-type {
    flex: 50% 0 0;
    text-align: center;
    margin: 0px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const EndMessage = styled.div`
  font-size: 1.25em;
  line-height: 2em;
  margin: ${isMobileOnly ? '0 0 30px' : '0 5em 30px'};
  font-weight: 100;
`;

function ApiExplain({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>What is an API?</h1>
      <img className="topcap" src={topCap} alt="Applications, Programming, Interfaces" />
      <h4>The term API stands for:</h4>
      <h2>Application Programming Interface</h2>
      <img className="divider" src={divider} alt="Applications, Programming, Interfaces" />
      <h3>It's a way for developers to automate systems and software designed to be modular, extendable or integrated into other systems.</h3>
      <img src={divider} alt="Applications, Programming, Interfaces" />
      <h2>APIs are the glue that connect modern software and networks.</h2>
      <h4>At its most simple atomic level an API is:</h4>
      <Spacer>
        <h2>An Interface</h2>
      </Spacer>
      <p>One of the best real-world examples of an API that most people have interacted with is the menu and speaker found at any drive-through or fast food restaurant.</p>
      <FlexColumnContainer>
        <div>
          <h3>What Does an API do?</h3>
          <ul>
            <li>It provides information about what options are available and the status of the system</li>
            <li>It allows you to make requests and receive predictable responses</li>
            <li>It reduces transactional friction (self-serve or more)</li>
            <li>It integrates with an existing system or infrastructure.</li>
          </ul>
        </div>
        <Spacer>
          <SpeakerTalk>"Hello, can I take your order?"</SpeakerTalk>
          <img src={apiFastFood} alt="Example of interface showing a fast-food ordering sign with speaker and food options"/>
        </Spacer>
        
      </FlexColumnContainer>

      <Spacer>
        <p>Now that we better understand what APIs do, what are some more concrete examples? To truly understand APIs you have to consider that there are multiple types of software that all are correctly identifed as APIs. Deep understanding of web technologies allows us to reccomend the most cost effective technologies for each project for existing teams or greenfield projects still in planning.</p>
      </Spacer>

      <h3 className="space">Three types of APIs:</h3>

      
      <FlexContainer>
        <div>
          <h4>1. Software:</h4>
          <p>A library, module or other piece of code published and maintained by a specific organization. It can be included into existing software projects or packages to allow developers to integrate functionality. Developers write software that can call an API, as an example using the Google Maps API to include a dynamic front-end component on any webpage or a backend script that handles image uploads and saves them to AWS S3 buckets.</p>
        </div>
        <div>
          <p>Examples:</p>
          <ul>
            <li><a href="https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html">AWS SDK</a></li>
            <li>Google Maps</li>
          </ul>
        </div>
      </FlexContainer>


      
      <FlexContainer>
        <div>
        <h4>2. Service:</h4>
        <p>A URL and corresponding servers that execute behavior on behalf of the user. Developers can write code that makes an external request causing the API to perform an action and report back on the outcome. Every API described as a Service is powered by at least one, but sometimes many Applications. Examples include making an API call to a service to send an SMS text message, charge a credit card or add an email to a newsletter subscription list.</p>
        </div>
        <div>
          <p>Examples:</p>
          <ul>
            <li>Stripe</li>
            <li>Twilio</li>
            <li>Sendgrid</li>
          </ul>
        </div>
      </FlexContainer>


      
      <FlexContainer>
        <div>
        <h4>3. Application:</h4>
        <p>A collection of code that runs on a server and responds to requests from other systems. Similar to Service above, but this definition specifically refers to either a dedicated interface to data or functionality or an additional interface separate from the main frontend or backend.  Applications are the building blocks that power Services. Not every application built with these type of tools is explicitly an API, some offer an API to provide additional customization options (ex: Wordpress) and others are designed to be either standalone APIs (Hapi) or full-blown applications (Laravel, Next.js).</p>
        </div>
        <div>
          <p>Examples:</p>
          <ul>
            <li>Wordpress API</li>
            <li>Hapi</li>
            <li>Strapi</li>
            <li>Flask</li>
            <li>Laravel</li>
            <li>Next.js</li>
          </ul>
        </div>
      </FlexContainer>


      <h2>Do you know what
      kind of API you
      need help with?</h2>
    <Spacer>

    <EndMessage>Whether you're building software from scratch or extending an existing platform, you're going to have to deal with APIs at some point. Our experience building new systems and integrating with services can help anticipate problems and improve outcomes.</EndMessage>
    </Spacer>


      <Link to="/contact">Contact Us Today to Get Started</Link>
    </Container>
  );
}

export default ApiExplain;
