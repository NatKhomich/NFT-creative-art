import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme';
import {Link} from 'react-scroll';


//menu
const MenuItem = styled.li`
  position: relative;
`

const MenuLink = styled(Link)`
  font-size: 16px;
  line-height: 26px;
  text-transform: capitalize;
  cursor: pointer;
  
  &:hover, &.active {
    &::before {
      height: 2px;
      transition: .2s;
    }
  }
  
  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
  }
`

//desktop menu
const DesktopMenu = styled.div``

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }
`

//mobile menu
const MobileMenu = styled.div``

const BurgerButton = styled.button`
& svg {
  z-index: 999999;
}
`

const MenuPopup = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(31, 31, 32, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: .8s ease-in-out;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `}
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px
  }
`

const MainLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${theme.colors.accent};
  width: 143px;
  height: 48px;
  color: ${theme.colors.fontBlack};
`

export const S = {
    MenuItem,
    MenuLink,
    DesktopMenu,
    Menu,
    MobileMenu,
    BurgerButton,
    MenuPopup,
    MainLink
}


