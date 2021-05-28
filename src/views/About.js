import { Link } from "react-router-dom";
import { isMobileOnly } from 'react-device-detect';

import styled from 'styled-components';
import matPic from '../imgs/mat-at-vtcc.jpeg';
import topCap from '../svgs/topcap.svg';

const Container = styled.div`
  width: 100%;
  text-align: center;  
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${isMobileOnly ? 'column' : 'row'};
  justify-content: space-between;
  text-align: left;
`

const ImageContainer = styled.div`
  ${isMobileOnly && `
    background-image: url(${matPic});
    height: 375px;
    background-size: cover;
    border-radius: 15px;
    background-position: center;
    margin-bottom: 20px;
  `};

  img {
    width: 400px;
    border-radius: 15px;
    height: auto;
    display: ${isMobileOnly ? 'none' : 'flex'};
  }
`;

const Content = styled.div`
`;

const Item = styled.div`
  margin-bottom: 25px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

function About({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>About</h1>
     <img className="topcap" src={topCap} alt="Applications, Programming, Interfaces" />
       <ContentContainer>
        {isMobileOnly && (
          <ImageContainer>
            <img src={matPic} alt="Mat Gilbert"/>
          </ImageContainer>
        )}  
        <Content>
          <Item>
            <h4>Who:</h4>
            <p>Mat Gilbert</p>
          </Item>
          <Item>
            <h4>What:</h4>
            <p>vtapi.co | aka Vermont API, LLC</p>
          </Item>
          <Item>
            <h4>When:</h4>
            <p>Since 2019</p>
          </Item>
          <Item>
            <h4>Where:</h4>
            <p>Vermont, the greater Burlington area.</p>
          </Item>
          <Item>
            <h3>Why?</h3>
            <p>To improve understanding of web technologies and help organizations improve efficiency.</p>
            <p><Link to="/values">Learn more about our Values</Link></p>
          </Item>
        </Content>
        {!isMobileOnly && (
          <ImageContainer>
            <img src={matPic} alt="Mat Gilbert"/>
          </ImageContainer>
      )}     
       </ContentContainer> 
    </Container>
  );
}

export default About;
