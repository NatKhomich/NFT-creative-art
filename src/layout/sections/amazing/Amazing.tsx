import React from 'react';
import {Card} from './card/Card';
import {Container} from '../../../components/container/Container';
import {Content} from './content/Content';
import {S} from './Amazing_Styles'


export const Amazing = () => {
    return (
        <S.Amazing id="collections">
            <Container>
                <Content/>
                <Card/>
            </Container>
        </S.Amazing>
    );
};








