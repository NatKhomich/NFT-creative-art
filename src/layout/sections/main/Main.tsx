import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import mainImage from '../../../assets/images/main/main.webp'
import group from '../../../assets/images/main/group.webp'
import star from '../../../assets/images/main/Star 1.png'
import {theme} from '../../../styles/Theme';
import {InfoLink} from '../../../components/infoLink/InfoLink';
import {Description} from '../../../components/description/Description';
import {Container} from '../../../components/container/Container';
import {Span} from '../../../components/span/Span';

const statisticsItem = [
    {data: 8.9, small: 'K', text: 'Art work'},
    {data: 65, small: 'K', text: 'Artist'},
    {data: 87, small: 'K', text: 'Collection'}
]

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <GridContainer>
                    <GridItem>
                        <Title>
                            Discover and Collect The Best NFTs <span>Digital Art.</span>
                        </Title>
                        <Description>
                            Get started with the easiest and most secure platform to buy and trade digital ART and
                            NFT’s.
                            Start exploring the world of digital art and NFTs today and take control of your digital
                            assets
                            with confidence!
                        </Description>
                        <LinkBlock>
                            <Button as={'a'} styleButton="accent" width="178px" height="52px">Explore Now</Button>
                            <InfoLink href="#">Learn More</InfoLink>
                        </LinkBlock>
                    </GridItem>

                    <GridItem>
                        <CardImageContainer>
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
                                    <Button styleButton="base" width="264px" height="52px"> Place A Bid </Button>
                                </CardButtonGroup>
                            </MainCard>
                        </CardImageContainer>
                    </GridItem>

                    <GridItem>
                        {statisticsItem.map((el, index) => (<Statistics key={index}>
                                <span> <Span>{el.data}</Span><span>{el.small}</span></span>
                                <Text>{el.text}</Text>
                            </Statistics>
                        ))}
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

const Title = styled.h1`
  font-family: Spectral, sans-serif;
  font-size: 64px;
  font-weight: 600;
  word-wrap: break-word;

  span {
    color: ${theme.colors.accent};
    font-size: 64px;
    font-weight: 700;
  }
`

const LinkBlock = styled.div`
  display: flex;
  align-items: center;
`

//item-2
const CardImageContainer = styled.div`
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

  &::after {
    content: url(${star});
    position: absolute;
    left: 8px;
    top: 268px;
  }
`

const Image = styled.img`
  border-radius: 24px;
  object-fit: cover;
`

const MainCard = styled.div`
  width: 304px;
  min-height: 170px;
  padding: 20px;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: -80px;
  right: -4px;
`

const CardItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardItem = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.accent};
  }

  & small {
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0 20px;
  }
`

const CardButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`

//item-3
const Statistics = styled.div`
  font-size: 48px;
  font-family: Spectral, sans-serif;
  font-weight: 500;

  display: flex;
  flex-direction: column;

  position: relative;

  & span {
    margin-bottom: 10px;
  }

  & + &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    width: 2px;
    height: 80px;
    top: 0;
    left: -94px;
    z-index: 2;
  }

  &:last-child {
    margin-right: 24px;
  }
`

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  font-family: Inter, sans-serif;
`