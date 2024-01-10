import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import {Description} from '../../components/description/Description';
import {Icon} from '../../components/icon/Icon';
import {dataLink} from './data/footerData';


export const Footer = () => {
    return (
        <StyledFooter>
            <Content>

                <Information>
                    <Logo/>
                    <Description>
                        Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy
                        it!
                    </Description>
                    <SocialIcon>
                        <Icon iconId="facebook"/>
                        <Icon iconId="telegram"/>
                        <Icon iconId="twitter"/>
                        <Icon iconId="linkedin"/>
                    </SocialIcon>
                </Information>

                <LinkList>
                    {dataLink.map(el => (
                        <div key={el.id}>
                            <ListTitle>{el.title}</ListTitle>
                            <NavList>
                                <ul>
                                    {el.items.map((i, index) => (
                                        <ListItem key={index}>
                                            <a href="#">{i}</a>
                                        </ListItem>
                                    ))}

                                </ul>
                            </NavList>
                        </div>
                    ))}
                </LinkList>

            </Content>

            <Small>
                <Copyright>
                    Copyright 2024 - Creativeart
                </Copyright>

                <Copyright>
                    Privacy Policy
                    Terms & Conditions
                </Copyright>

            </Small>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 1590px;
  width: 100%;
`

const Content = styled.div`
display: flex;
  justify-content: space-between;
`

const Information = styled.div`

`

const SocialIcon = styled.div`

`

const LinkList = styled.div`
  display: flex;
`

const ListTitle = styled.h3`

`

const NavList = styled.nav``

const ListItem = styled.li``

const Small = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Copyright = styled.small`
  display: inline-block;
`