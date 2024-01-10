import React from 'react';
import styled from 'styled-components';
import {Button} from '../../components/button/Button';
import {Logo} from '../../components/logo/Logo';
import {Container} from '../../components/container/Container';
import {FlexWrapper} from '../../components/flexWrapper/FlexWrapper';
import {theme} from '../../styles/Theme';

const menuItem = ['Marketplace', 'Artists', 'Community', 'Collections']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <StyledMenu>
                        <ul>
                            {menuItem.map((item, index) => {
                                return <MenuItem key={index}>
                                    <MenuLink href="#">{item}</MenuLink>
                                </MenuItem>
                            })}
                        </ul>
                    </StyledMenu>
                    <Button as="a" width="143px" height="48px" styleButton="accent">Contact</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 28px 0;
  height: 104px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`

const StyledMenu = styled.nav`
  ul {
    display: flex;
  }
`

const MenuItem = styled.li`
  position: relative;
  
  &+li {
    margin-left: 40px;
  }

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