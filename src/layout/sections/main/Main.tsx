import React from 'react';
import {Container} from '../../../components/container/Container';
import {Content} from './content/Content';
import {CardImage} from './cardImage/CardImage';
import {Statistics} from './statistics/Statistics';
import {S} from './Main_Styles'

export const Main = () => {
    return (
        <S.Main id={'marketplace'}>
            <Container>
                <S.GridContainer>
                    <S.GridItem>
                        <Content/>
                    </S.GridItem>

                    <S.GridItem>
                        <CardImage/>
                    </S.GridItem>

                    <S.GridItem>
                        <Statistics/>
                    </S.GridItem>
                </S.GridContainer>
            </Container>
        </S.Main>
    );
};



