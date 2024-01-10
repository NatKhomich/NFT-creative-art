import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import mainImage from '../../../assets/images/main/main.webp'
import group from '../../../assets/images/main/group.webp'
import star from '../../../assets/images/main/Star 1.png'
import {theme} from '../../../styles/Theme';
import {InfoLink} from '../../../components/infoLink/InfoLink';
import {Description} from '../../../components/description/Description';

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
                    <Title>
                        Discover and Collect The Best NFTs <span>Digital Art.</span>
                    </Title>
                    <Description>
                        Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.
                        Start exploring the world of digital art and NFTs today and take control of your digital assets
                        with confidence!
                    </Description>

                    <LinkBlock>
                        <Button as={'a'} styleButton='accent'>Explore Now</Button>
                        <InfoLink href="#">Learn More</InfoLink>
                    </LinkBlock>
                </GridItem>

                <GridItem>
                    <Image src={mainImage} alt="image-info"/>
                    {/*<img src={group} alt=''/>*/}
                    <img src={star} alt=''/>
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
                            <Button styleButton='base'> Place A Bid </Button>
                        </CardButtonGroup>

                    </MainCard>
                </GridItem>

                <GridItem>
                    {statisticsItem.map((el, index) => (<Statistics key={index}>
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
    position: relative;

    &::before {
      content: url(${group});
      position: absolute;
      width: 200px;
      height: 200px;
      left: -60px;
      top: 200px;
      z-index: 2;
    }
  }

  &:last-child {
    grid-area: 2/1/3/2;
    background-color: #5b68f6;
    display: flex;
    justify-content: space-between;
  }
`

const Title = styled.h1`
  font-family: Spectral, sans-serif;
`

const LinkBlock = styled.div`
  display: flex;
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

const CardButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`

//item-3
const Statistics = styled.div`

`