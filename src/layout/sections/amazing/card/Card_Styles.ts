import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';

//card
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 64px;

  @media ${theme.media.mobile} {
    margin-top: 32px;
  }
`

const CardItem = styled.div`
  max-width: 410px;
  padding: 20px;
  border-radius: 28px;
  background-color: ${theme.colors.secondaryBg};
  margin: 5px;
  border-top: 1px solid ${theme.colors.accent};

  &:hover {
    transition: ${theme.animations.transition};
    transform: ${theme.animations.transform};
  }

  @media ${theme.media.mobile} {
    max-width: 343px;
    padding: 16px;
  }
`

const Image = styled.img`
  border-radius: 18px;
  object-fit: cover;
  max-width: 100%;
`


//descriptionCard
const DescriptionCard = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
`

const UpperBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px;
`

const TitleCard = styled.h3`
  font-size: 24px;
  font-weight: 700;

  @media ${theme.media.mobile} {
    font-size: 18px;
  }

`
const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
`

const IconPriceBlock = styled.div`
  display: flex;
  align-items: center;
`

const Ending = styled.div`
  display: flex;
  flex-direction: column;

  & small {
    color: #838382;
    font-size: 14px;
    font-weight: 400;
  }
`

const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  & span {
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
  }
`

export const S = {
    Card,
    CardItem,
    Image,
    DescriptionCard,
    UpperBlock,
    TitleCard,
    Price,
    IconPriceBlock,
    Ending,
    Time
}