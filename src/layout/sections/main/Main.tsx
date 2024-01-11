import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container';
import {MainContent} from './mainContent/MainContent';
import {CardImageContainer} from './cardImageContainer/CardImageContainer';
import {Statistics} from './statistics/Statistics';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <GridContainer>
                    <GridItem>
                        <MainContent/>
                    </GridItem>

                    <GridItem>
                        <CardImageContainer/>
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
  height: 100vh;
  margin-top: 50px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 0.2fr;
  row-gap: 50px;

  justify-content: center;
  align-content: center;

`

const GridItem = styled.div`
  max-width: 544px;

  &:first-child {
    grid-area: 1/1/2/2;
    background-color: rgba(245, 70, 70, 0.8);
    margin-top: 20px;
    align-self: center;
  }

  &:nth-child(2) {
    grid-area: 1/2/3/3;
    background-color: rgba(24, 101, 215, 0.56);
    margin-left: 92px;

  }

  &:last-child {
    grid-area: 2/1/3/2;
    background-color: rgba(105, 23, 136, 0.59);
    display: flex;
    justify-content: space-between;
  }
`

