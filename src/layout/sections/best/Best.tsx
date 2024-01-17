import React from 'react';
import {Container} from '../../../components/container/Container';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';
import {Content} from './content/Content';
import {Images} from './images/Images';
import {S} from './Best_Styles'

export const Best = () => {
    return (
        <S.Best>
            <Container>
                <FlexWrapper justify="space-between" wrap="wrap" align="center">
                    <Content/>
                    <Images/>
                </FlexWrapper>
            </Container>
        </S.Best>
    );
};



