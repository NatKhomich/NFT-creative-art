import React from 'react';
import {Icon} from '../../../../components/icon/Icon';
import {Button} from '../../../../components/button/Button';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';
import {cardsData} from '../cardsData/cardsData';

export const Card = () => {
    return (
        <StyledCard>
            {cardsData.map(c => (
                <CardItem key={c.id}>
                    <Image src={c.image} alt='card-image' />
                    <Description>
                        <UpperBlock>
                            <TitleCard> {c.title}</TitleCard>
                            <IconPriceBlock>
                                <Icon iconId='iconAmazing'/>
                                <Price>{c.price}</Price>
                            </IconPriceBlock>
                        </UpperBlock>

                        <div>
                            <Ending>
                                <small>{c.smallText}</small>
                                <Time>
                                    <Icon iconId='time'/>
                                    <span> {c.time}</span>
                                </Time>
                            </Ending>

                            <Button styleButton='base' width='168px' height='48px'> {c.buttonText} </Button>
                        </div>
                    </Description>
                </CardItem>
            ))}

        </StyledCard>
    );
};

const StyledCard = styled.div`
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

const Description = styled.div`
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