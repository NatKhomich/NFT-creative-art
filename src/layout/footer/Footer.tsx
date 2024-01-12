import React from 'react';
import styled from 'styled-components';
import {Container} from '../../components/container/Container';
import {Information} from './information/Information';
import {LinkList} from './linkList/LinkList';
import {Copyright} from './copyright/Copyright';


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Content>
                    <Information/>
                    <LinkList/>
                </Content>

                <Copyright/>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  
  &::before {
    content: '';
    display: inline-block;
    background-color: #777676;
    height: 1px;
    position: absolute;
    bottom: -48px;
    left: 0;
    right: 0;
  }
`

