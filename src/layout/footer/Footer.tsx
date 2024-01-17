import React from 'react';
import {Container} from '../../components/container/Container';
import {Information} from './information/Information';
import {LinkList} from './linkList/LinkList';
import {Copyright} from './copyright/Copyright';
import {S} from './Footer_Styles'

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.Content>
                    <Information/>
                    <LinkList/>
                </S.Content>

                <Copyright/>
            </Container>
        </S.Footer>
    );
};


