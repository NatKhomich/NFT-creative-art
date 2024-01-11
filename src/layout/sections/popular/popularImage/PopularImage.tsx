import React from 'react';
import {popularData} from '../popularData/popularData';
import styled from 'styled-components';

export const PopularImage = () => {
    return (
        <PopularImageStyles>
            <GridContainer>
                {popularData.map(p => (
                    <GridItem image={p.image}>
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

const PopularImageStyles = styled.div`

`

const GridContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 310px);
  max-width: 1290px;
`

const GridItem = styled.div<{ image: string }>`
  position: relative;

  background-size: cover;
  background: url(${props => props.image}) no-repeat top;
  border-radius: 16px;

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

const Avatar = styled.img``

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