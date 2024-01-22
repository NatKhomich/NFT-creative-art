import React from 'react';
import {Container} from '../../../components/container/Container';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';
import {Content} from './content/Content';
import {Images} from './images/Images';
import {S} from './Best_Styles'
import {Fade} from 'react-awesome-reveal';

export const Best = () => {
    return (
        <Fade damping={1} delay={400} triggerOnce>
        <S.Best id='community'>
            <Container>
                <FlexWrapper justify="space-between" wrap="wrap" align="center">
                    <Content/>
                    <Images/>
                </FlexWrapper>
            </Container>
        </S.Best>
        </Fade>
    );
};



