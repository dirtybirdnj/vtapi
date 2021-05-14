import styled from 'styled-components';

const Container = styled.div`

`;

function Values({
  ...props
}) {

  return (
    <Container {...props}>
	    <h1>Values</h1>
      <h3>These are the guiding principals and overall strategies used to provide the best outcomes for customers and their projects.</h3>
      <ul>
        <li>100% Honesty and Transparency</li>
        <li>Use the best tools available</li>
        <li>Avoid vendor lock in and use cross platform tools</li>
        <li>Question everything, be willing to deeply understand the problem</li>
        <li>Make decisions based on demonstrable facts and reasoning</li>
        <li>Communicate often and with specific purpose</li>
        <li>Prioritize learning and establishing self-sufficiency over stopgap bandaids</li>
        <li>Respect and aknowledge what you don't know</li>
        <li>Help others learn and achieve instead of just solving their problems</li>
      </ul>
    </Container>
  );
}

export default Values;
