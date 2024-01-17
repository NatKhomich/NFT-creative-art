import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container';
import {Content} from './content/Content';
import {CardImage} from './cardImage/CardImage';
import {Statistics} from './statistics/Statistics';
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
                        <Statistics/>
                    </GridItem>
                </GridContainer>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  margin-top: 70px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 0.2fr;
  row-gap: 50px;
  column-gap: 80px;

  @media ${theme.media.medium} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    justify-items: center;
  }
`

const GridItem = styled.div`

  &:first-child {
    grid-area: 1/1/2/2;
    background-color: rgba(245, 70, 70, 0.8);
    margin-top: 20px;
    align-self: center;
  }

  &:nth-child(2) {
    grid-area: 1/2/3/3;
    background-color: rgba(94, 215, 24, 0.56);
    margin-left: 40px;

    @media ${theme.media.medium} {
      grid-area: 2/1/3/2;
      max-width: 450px;
      width: 100%;
    }

    @media ${theme.media.mobile} {
      max-width: 300px;
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
      margin-top: 50px;
    }

    @media ${theme.media.mobile} {
      max-width: 344px;
    }
  }
`

