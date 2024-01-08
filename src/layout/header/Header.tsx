import React from 'react';
import styled from 'styled-components';
import {Button} from '../../components/button/Button';
import {Logo} from '../../components/logo/Logo';

const menuItem = ['Marketplace', 'Artists', 'Community', 'Collections']

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <StyledMenu>
                <ul>
                    {menuItem.map((item, index) => {
                        return <MenuItem key={index}>
                            <MenuLink href="#">{item}</MenuLink>
                        </MenuItem>
                    })}
                </ul>
            </StyledMenu>
            <Button as='a' width='143px' height='48px'>Contact</Button>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: rgba(36, 96, 80, 0.87);
  display: flex;
  justify-content: space-around;
`

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px
  }
`

const MenuItem = styled.li``

const MenuLink = styled.a``