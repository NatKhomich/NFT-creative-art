import React from 'react';
import {Button} from '../../../../components/button/Button';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';
import group from '../../../../assets/images/main/group.webp'
import star from '../../../../assets/images/main/Star 1.png'
import mainImage from '../../../../assets/images/main/main.webp'

export const CardImageContainer = () => {
    return (
        <MainContainer>
            <ImageBlock />
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
        </MainContainer>
    );
};

const MainContainer = styled.div`
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

const ImageBlock = styled.div`
  
  background: url(${mainImage}) no-repeat top;
  max-width: 464px;
  height: 544px;
  border-radius: 24px;
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