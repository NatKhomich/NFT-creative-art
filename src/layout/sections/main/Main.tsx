import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container';
import {Content} from './content/Content';
import {CardImage} from './cardImage/CardImage';
import {Statistics} from './statistics/Statistics';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';
import {theme} from '../../../styles/Theme';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <GridContainer>
                    <GridItem>
                        <Content/>
                    </GridItem>

                    <GridItem>
                        <CardImage/>
                    </GridItem>

                    <GridItem>
                        <Statistics />
                    </GridItem>
                </GridContainer>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  margin-top: 50px;

  @media ${theme.media.medium} {
    margin-top: 20px;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 0.2fr;
  row-gap: 50px;

  justify-content: center;
  align-content: center;

  @media ${theme.media.medium} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    justify-items: center;

    row-gap: 48px;
  }
`

const GridItem = styled.div`
  max-width: 544px;

  &:first-child {
    grid-area: 1/1/2/2;
    background-color: rgba(245, 70, 70, 0.8);
    margin-top: 20px;
    align-self: center;

    @media ${theme.media.medium} {
      grid-area: 1/1/1/2;
      text-align: center;
    }
  }

  &:nth-child(2) {
    grid-area: 1/2/3/3;
    background-color: rgba(94, 215, 24, 0.56);
    margin-left: 92px;

    @media ${theme.media.medium} {
      grid-area: 2/1/3/2;
      max-width: 450px;
      width: 100%;
    }

    @media ${theme.media.mobile} {
      max-width: 400px;
      //max-width: 300px;
      //width: 100%;
    }
  }

  &:last-child {
    grid-area: 2/1/3/2;
    background-color: rgba(105, 23, 136, 0.59);
    display: flex;
    justify-content: space-between;

    @media ${theme.media.medium} {
      grid-area: 3/1/4/2;
      max-width: 450px;
      width: 100%;
      margin-top: 40px;
    }
  }
`

