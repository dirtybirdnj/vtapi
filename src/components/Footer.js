import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";

// Data
import {menu} from '../data';

// SVGs
import footer from '../svgs/footer.svg';
import footerPerson from '../svgs/footerPerson.svg';
import footerSettings from '../svgs/footerSettings.svg';

const FooterContainer = styled.div`
	padding-top:25px;
	display: flex;
	flex-direction: column;
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

const StyledLink = styled(Link)`
	color: #000;
	line-height: 1.5;
	font-size: 10px;
	font-weight: 500;
	margin: 10px;
	position: relative;
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
`;

const FooterLogo = styled.div`
	display: flex;
	margin: 0px auto;
	justify-content: center;
	align-items: center;

	div {
		font-size: 20px;
		padding: 5px;
	}

	&:hover {
		cursor: pointer;
	}
`;

function Footer({
  ...props
}) {
	let history = useHistory();

  return (
    <FooterContainer {...props}>
	    <Logo>
	    	<img src={footer} alt="VTAPI" />
	    </Logo>
	    <MenuContainer>
	    	{Object.keys(menu).map((i) => {
          return(
            <StyledLink to={menu[i].path}>{menu[i].name}</StyledLink>
          )
        })}
	    </MenuContainer>
	    <FooterLogo onClick={() => history.push(`/`)}>
	    	<img src={footerPerson} alt="VTAPI" />
	    	<div>vtapi.co</div>
	    	<img src={footerSettings} alt="VTAPI" />
	    </FooterLogo>
    </FooterContainer>
  );
}

export default Footer;


