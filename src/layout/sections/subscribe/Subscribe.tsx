import React from 'react';
import {Container} from '../../../components/container/Container';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';
import {Content} from './content/Content';
import {S} from './Subscribe_Styles'
import {Fade} from 'react-awesome-reveal';

export const Subscribe = () => {
    return (
        <S.Subscribe id="contact">
            <Fade damping={1} delay={400} triggerOnce>
                <Container>
                    <FlexWrapper justify="space-between" wrap="wrap-reverse">
                        <S.Images>
                            <S.ImageOne/>
                            <S.ImageTwo/>
                        </S.Images>

                        <Content/>
                    </FlexWrapper>
                </Container>
            </Fade>
        </S.Subscribe>
    );
};

