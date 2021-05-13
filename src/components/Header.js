import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";

// Data
import {menu} from '../data';

// SVGs
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

		&:hover {
			cursor: pointer;
		}
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
	text-decoration: none;

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
	let history = useHistory();

  return (
    <HeaderContainer {...props}>
	    <Logo>
	    	<img onClick={() => history.push(`/`)} src={logo} alt="VTAPI" />
	    </Logo>
	    <MenuContainer>
	    	{Object.keys(menu).map((i) => {
          return(
            <StyledLink to={menu[i].path}>{menu[i].name}</StyledLink>
          )
        })}
	    </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;


