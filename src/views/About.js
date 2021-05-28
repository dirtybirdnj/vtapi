import { Link } from "react-router-dom";

import styled from 'styled-components';
import matPic from '../imgs/mat-at-vtcc.jpeg';
import divider from '../svgs/divider.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 800px;
  margin: 0px auto;
`;

const ImageContainer = styled.div`
  img {
    width: 400px;
    border-radius: 15px;
    height: auto;
    display: flex;
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
      <ImageContainer>
        <img src={matPic} alt="Mat Gilbert"/>
      </ImageContainer>
    </Container>
  );
}

export default About;
