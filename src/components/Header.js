import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";
import { isMobileOnly } from 'react-device-detect';

// Data
import {menu} from '../data';

// SVGs
import logo from '../svgs/logo.svg';
import menuDivider from '../svgs/menuDivider.svg';

const HeaderContainer = styled.div`
	padding-bottom: ${isMobileOnly ? '15px' : '25px'};
	margin-top: 40px;
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
	justify-content: ${isMobileOnly ? 'space-between' : 'center'};
	padding: ${isMobileOnly ? '10px 0px 0px' :  '0px 0px 0px'};
	flex-wrap: wrap;
	justify-content: center;
`;

const StyledLink = styled(Link)`
	color: #000;
	line-height: 1.5;
	font-size: 16px;
	font-weight: 500;
	margin: ${isMobileOnly ? '0 10px 10px' : '10px'};
	padding-right: ${isMobileOnly ? '0' : '26px'};
	position: relative;
	text-decoration: none;
	white-space: no-wrap;

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
		height: ${isMobileOnly ? '12px' : '16px'};
		background-image: url(${menuDivider});
		background-repeat: no-repeat;
		background-position: center right;

		${isMobileOnly && `
			display: none;
		`}
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
            <StyledLink key={i} to={menu[i].path}>{menu[i].name}</StyledLink>
          )
        })}
	    </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;
