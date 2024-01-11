import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {Title} from '../../../components/title/Title';

import osvaldo from '../../../assets/images/popular/osvaldo.webp'
import ranson from '../../../assets/images/popular/ranson.webp'
import cristio from '../../../assets/images/popular/cristio.webp'
import sebastian from '../../../assets/images/popular/sebastian.webp'
import abraham from '../../../assets/images/popular/abraham.webp'

import osvaldoAvatar from '../../../assets/images/popular/avatar/osvaldoAvatar.png'
import ransonAvatar from '../../../assets/images/popular/avatar/ransonAvatar.png'
import cristioAvatar from '../../../assets/images/popular/avatar/cristioAvatar.png'
import sebastianAvatar from '../../../assets/images/popular/avatar/sebastianAvatar.png'
import abrahamAvatar from '../../../assets/images/popular/avatar/abrahamAvatar.png'
import {Span} from '../../../components/span/Span';
import {Container} from '../../../components/container/Container';


type PopularData = {
    id: number
    image: string
    nick: string
    userName: string
    avatar: string
}

const popularData: PopularData[] = [
    {
        id: 1,
        image: osvaldo,
        nick: 'Owner',
        userName: 'Osvaldo Percy',
        avatar: osvaldoAvatar,
    },
    {
        id: 2,
        image: ranson,
        nick: 'Owner',
        userName: 'Ranson Sqiure',
        avatar: ransonAvatar,
    },
    {
        id: 3,
        image: sebastian,
        nick: 'Owner',
        userName: 'Sebastian waltan',
        avatar: sebastianAvatar,
    },
    {
        id: 4,
        image: abraham,
        nick: 'Owner',
        userName: 'Abraham Zack',
        avatar: abrahamAvatar,
    },
    {
        id: 5,
        image: cristio,
        nick: 'Owner',
        userName: 'Cristio leo',
        avatar: cristioAvatar,
    },
]

export const Popular = () => {
    return (
        <StyledPopular>
            <Container>
            <PopularContent>
                <Title>Popular <Span>Artists</Span> On This Week</Title>
                <Button styleButton="accent">See All</Button>
            </PopularContent>

            <ArtistImage>
                <GridContainer>
                    {popularData.map(p => (
                        <GridItem>
                            <Image src={p.image}/>
                            <DescriptionImage>
                                <img src={p.avatar} alt="avatar"/>
                                <div>
                                    <small>{p.nick}</small>
                                    <span>{p.userName}</span>
                                </div>
                            </DescriptionImage>
                        </GridItem>
                    ))}

                </GridContainer>

            </ArtistImage>
            </Container>
        </StyledPopular>
    );
};

const StyledPopular = styled.section`
  display: flex;
  flex-direction: column;
`

const PopularContent = styled.div`
  display: flex;
`

const ArtistImage = styled.div`

`

const GridContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 310px);
  max-width: 1290px;
`

const GridItem = styled.div`
  position: relative;

  &:first-child {
    grid-area: 1/1/1/4;
  }

  &:nth-child(2) {
    grid-area: 1/4/1/9;
  }

  &:nth-child(3) {
    grid-area: 2/1/3/5;
  }

  &:nth-child(4) {
    grid-area: 2/5/3/9;
  }

  &:last-child {
    grid-area: 1/9/3/13;

  }
`

const Image = styled.img`
  border-radius: 16px;
`

const DescriptionImage = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 2;

  display: flex;
  
  div {
    display: flex;
    flex-direction: column;
  }
`
