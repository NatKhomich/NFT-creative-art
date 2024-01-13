import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme';

//menu
const MenuItem = styled.li`
  position: relative;
`

const MenuLink = styled.a`
  font-size: 16px;
  line-height: 26px;
  
  &:hover {
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

export const S = {
    MenuItem,
    MenuLink,
    DesktopMenu,
    Menu,
    MobileMenu,
    BurgerButton,
    MenuPopup
}


