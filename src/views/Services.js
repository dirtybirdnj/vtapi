import styled from 'styled-components';

const Container = styled.div`
  justify-content: center;
  text-align: center;
`;

function Services({
  ...props
}) {

  return (
    <Container {...props}>
      <h1>Services</h1>

<h3>Research and Discovery</h3>
<p>Figuring out how to solve business problems using technology requires understanding of both the challenge as well as the solution applied. By combining years of experience using off the shelf tools, CMS systems and completely bespoke platforms we can help organizations achieve their goals whether it’s rapid prototyping or a sustainable and extendable system to power their business.</p>

<h3>Project Roadmapping</h3>
<p>Determining project scope and navigating the order of things to build on a software project can be challenging at best. By setting your project up with a solid procedural foundation you can be nimble and adapt to feedback and QA instead of accumulating unfocused work like a ball of mud. Ruthless prioritization and focused attention on the essentials ensure the M in your MVP is taken seriously.</p>

<h3>Application Development</h3>
<p>Developing custom applications takes more than writing code. It’s a combination of knowing when to use off the shelf tools and when to make something uniquely tailored to your challenges. By leveraging existing open source technologies we can help companies find and implement sustainable technology solutions.</p>

<h3>Linux Systems Adminstration</h3>
<p>Whether it’s for running systems on cloud providers, or getting local development environments set up to coordinate between disparate teams, experience with the command line is key to developing and maintaining infrastructure. Our expertise with setup and administration of systems means we can help get existing software running on new machines or take advantage of low cost and battle tested software methodologies that won’t tie you to a single cloud provider.</p>

<h3>Creative Services</h3>
<p>It’s one thing to make a functional system, but it helps when things look nice too. We’re not afraid to roll up our sleeves and mess with font weights, color pallets and even identity branding. Creativity has never been something we’ve shied away from and it’s part of our special sauce. For more insight into the creative mastermind check out <a href="http://www.robotdrawsyou.com" target="_blank" rel="noreferrer">www.robotdrawsyou.com</a> to learn what happens when vector artwork and pen plotters collide.</p>
    </Container>
  );
}

export default Services;
