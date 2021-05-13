import styled from 'styled-components';
import { Link } from "react-router-dom";

import logo from '../svgs/logo.svg';
import menuDivider from '../svgs/menuDivider.svg';

const HeaderContainer = styled.div`
	padding-bottom: 25px;
`;

const Logo = styled.div`
	text-align: center;

	img {
		margin: 0px auto;
		width: 300px;
		height: 200px;
	}
`;

const MenuContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledLink = styled(Link)`
	color: #000;
	line-height: 1.5;
	font-size: 16px;
	font-weight: 500;
	margin: 10px;
	padding-right: 26px;
	position: relative;

	&:hover {
		cursor: pointer;
	}

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		transform: translate3d(0, -50%, 0);
		right: 0px;
		width: 100%;
		height: 16px;
		background-image: url(${menuDivider});
		background-repeat: no-repeat;
		background-position: center right;
	}

	&:last-of-type {
		padding-right: 0px;

		&::after {
			display: none;
		}
	}
`;

function Header({
  ...props
}) {

  return (
    <HeaderContainer {...props}>
	    <Logo>
	    	<img src={logo} alt="VTAPI" />
	    </Logo>
	    <MenuContainer>
	    	<StyledLink to={`/`}>Home</StyledLink>
	    	<StyledLink to={`/services`}>Services</StyledLink>
	    	<StyledLink to={`/values`}>Values</StyledLink>
	    	<StyledLink to={`/about`}>About</StyledLink>
	    	<StyledLink to={`/contact`}>Contact</StyledLink>
	    </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;


