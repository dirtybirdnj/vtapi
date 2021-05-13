import styled from 'styled-components';

/* SVGS */
import footer from '../svgs/footer.svg';
import footerPerson from '../svgs/footerPerson.svg';
import footerSettings from '../svgs/footerSettings.svg';

const FooterContainer = styled.div`
	padding-top:25px;
`;

const Logo = styled.div`
	text-align: center;

	img {
		margin: 0px auto;
		width: 360px;
		height: 55px;
	}
`;

const MenuContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Link = styled.a`
	color: #000;
	line-height: 1.5;
	font-size: 10px;
	font-weight: 500;
	margin: 10px;
	position: relative;

	&:hover {
		cursor: pointer;
	}
`;

const FooterLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		font-size: 20px;
		padding: 5px;
	}
`;

function Footer({
  ...props
}) {

  return (
    <FooterContainer {...props}>
	    <Logo>
	    	<img src={footer} alt="VTAPI" />
	    </Logo>
	    <MenuContainer>
	    	<Link>Home</Link>
	    	<Link>Services</Link>
	    	<Link>Values</Link>
	    	<Link>About</Link>
	    	<Link>Contact</Link>
	    </MenuContainer>
	    <FooterLogo>
	    	<img src={footerPerson} alt="VTAPI" />
	    	<div>vtapi.co</div>
	    	<img src={footerSettings} alt="VTAPI" />
	    </FooterLogo>
    </FooterContainer>
  );
}

export default Footer;


