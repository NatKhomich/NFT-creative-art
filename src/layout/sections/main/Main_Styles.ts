import {theme} from '../../../styles/Theme';
import styled from 'styled-components';

const Main = styled.section`
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
    margin-top: 20px;
    align-self: center;
  }

  &:nth-child(2) {
    grid-area: 1/2/3/3;
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

export const S = {
    Main,
    GridContainer,
    GridItem
}