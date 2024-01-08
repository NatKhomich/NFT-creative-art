import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import mainImage from '../../../assets/images/main/main.webp'
import {theme} from '../../../styles/Theme';

const statisticsItem = [
    {data: 8.9, small: 'K', text: 'Art work'},
    {data: 65, small: 'K', text: 'Artist'},
    {data: 87, small: 'K', text: 'Collection'}
]

export const Main = () => {
    return (
        <StyledMain>
            <GridContainer>
                <GridItem>
                    <TitleMain>
                        Discover and Collect The Best NFTs <span>Digital Art.</span>
                    </TitleMain>
                    <Description>
                        Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.
                        Start exploring the world of digital art and NFTs today and take control of your digital assets
                        with confidence!
                    </Description>

                    <LinkBlock>
                        <Button as={'a'}>Explore Now</Button>
                        <InfoLink href="#">Learn More</InfoLink>
                    </LinkBlock>
                </GridItem>

                <GridItem>
                    <Image src={mainImage} alt="image-info"/>
                    <MainCard>
                        <CardItemGroup>
                            <CardItem>
                                <span>Ends in</span>
                                <small>05:45:47</small>
                            </CardItem>

                            <CardItem>
                                <span>Current bid</span>
                                <small> 0.24ETH</small>
                            </CardItem>
                        </CardItemGroup>
                        <CardButtonGroup>
                            <CardButton> Place A Bid </CardButton>
                        </CardButtonGroup>

                    </MainCard>
                </GridItem>

                <GridItem>
                    {statisticsItem.map(el => (<Statistics>
                            <div>{el.data}<small>{el.small}</small></div>
                            <span>{el.text}</span>
                        </Statistics>
                    ))}
                </GridItem>

            </GridContainer>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: rgba(96, 36, 36, 0.59);
  height: 100vh;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2 544px);
  grid-template-columns: repeat(2 585px);
  justify-content: center;
  align-content: center;

  min-height: 575px;
`

const GridItem = styled.div`
  max-width: 544px;
  background-color: aqua;

  &:first-child {
    grid-area: 1/1/2/2;
    background-color: #f65b5b;
    min-height: 420px;
  }

  &:nth-child(2) {
    grid-area: 1/2/3/3;
    background-color: #27fd44;
    margin-left: 92px;
  }

  &:last-child {
    grid-area: 2/1/3/2;
    background-color: #5b68f6;
    display: flex;
    justify-content: space-between;
  }
`

const TitleMain = styled.h1`
  font-family: Spectral, sans-serif;
`

const Description = styled.p`

`

const LinkBlock = styled.div`
  display: flex;
`

const InfoLink = styled.a`

`

//item-2
const Image = styled.img`
  border-radius: 24px;
`

const MainCard = styled.div`
  width: 304px;
  min-height: 170px;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`

const CardItemGroup = styled.div`
  display: flex;
  justify-content: space-around;
`

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
`

const CardButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  height: 52px;
  background-color: #7575f1;
`

const CardButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`

//item-3
const Statistics = styled.div`

`