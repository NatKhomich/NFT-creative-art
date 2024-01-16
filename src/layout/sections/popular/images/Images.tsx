import React from 'react';
import {popularData} from '../data/data';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';

export const Images = () => {
    return (
        <PopularImageStyles>
            <GridContainer>
                {popularData.map((p, index) => (
                    <GridItem key={index} image={p.image}>
                        <DescriptionImage>
                            <Avatar src={p.avatar} alt="avatar"/>
                            <AvatarDescription>
                                <small>{p.nick}</small>
                                <span>{p.userName}</span>
                            </AvatarDescription>
                        </DescriptionImage>
                    </GridItem>
                ))}
            </GridContainer>
        </PopularImageStyles>
    );
};

const PopularImageStyles = styled.div``

const GridContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 310px);
  
  @media ${theme.media.extraMedium} {
    grid-template-rows: repeat(4, 310px);
    grid-template-columns: repeat(12, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-rows: repeat(5, 356px);
  }
`

const GridItem = styled.div<{ image: string }>`
  position: relative;
  
  background-size: cover;
  background: linear-gradient(2deg, rgba(19, 30, 58, 0.92) 0%, rgba(19, 30, 58, 0) 94.62%),
  url(${props => props.image}) top no-repeat;
  border-radius: 18px;
  

  @media ${theme.media.extraMedium} {
    background-size: cover;
    border-radius: 24px;
    background-position: center;
  }

  &:first-child {
    grid-area: 1/1/2/4;

    @media ${theme.media.extraMedium} {
      grid-area: 1/1/1/7;
      
    }
    @media ${theme.media.mobile} {
      grid-area: 1/1/1/13;
    }
  }

  &:nth-child(2) {
    grid-area: 1/4/2/9;

    @media ${theme.media.extraMedium} {
      grid-area: 1/7/1/13;
    }
    @media ${theme.media.mobile} {
      grid-area: 2/1/3/13;
    }
  }

  &:nth-child(3) {
    grid-area: 2/1/3/5;

    @media ${theme.media.extraMedium} {
      grid-area: 2/7/3/13;
      
    }
    @media ${theme.media.mobile} {
      grid-area: 4/1/5/13;
    }
  }

  &:nth-child(4) {
    grid-area: 2/5/3/9;

    @media ${theme.media.extraMedium} {
      grid-area: 3/1/5/13;
    }

    @media ${theme.media.mobile} {
      grid-area: 5/1/6/13;
    }
  }

  &:last-child {
    grid-area: 1/9/3/13;

    @media ${theme.media.extraMedium} {
      grid-area: 2/1/3/7;
    }

    @media ${theme.media.mobile} {
      grid-area: 3/1/4/13;
    }
  }
`

const Avatar = styled.img`
border-radius: 50%;
`

const AvatarDescription = styled.div`
  margin-left: 12px;
  display: flex;
  justify-content: center;

  & small {
    font-size: 14px;
    font-weight: 400;
  }

  & span {
    font-size: 16px;
    font-weight: 700;
    margin-top: 4px;
  }
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