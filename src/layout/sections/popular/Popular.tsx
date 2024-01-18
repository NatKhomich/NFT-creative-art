import React from 'react';
import {Container} from '../../../components/container/Container';
import {Images} from './images/Images';
import {Content} from './content/Content';
import {S} from './Popular_Styles'

export const Popular = () => {
    return (
        <S.Popular id='artists'>
            <Container>
                <Content/>
                <Images/>
            </Container>
        </S.Popular>
    );
};






