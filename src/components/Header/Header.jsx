import { HeaderContainer, Nav, NavLinkStyled, Image } from './Header.styled';
import icon from '../../images/header-icon.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLinkStyled to="/">HOME</NavLinkStyled>
        <NavLinkStyled to="/catalog">ALL SHOP</NavLinkStyled>
      </Nav>
      <Image src={icon} alt="car-icon" width={50} />
    </HeaderContainer>
  );
};

export default Header;
