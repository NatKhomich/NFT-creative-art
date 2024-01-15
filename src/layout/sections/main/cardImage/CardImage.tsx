import React from 'react';
import {Button} from '../../../../components/button/Button';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';
import group from '../../../../assets/images/main/group.webp'
import star from '../../../../assets/images/main/Star 1.png'
import mainImage from '../../../../assets/images/main/main.webp'
import mainSmall from '../../../../assets/images/main/mainSmall.webp'

export const CardImage = () => {
    return (
        <StyledCardImage>
            <ImageBlock>
                {/*<Image src={mainImage} alt='' />*/}

            </ImageBlock>
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
        </StyledCardImage>
    );
};

const StyledCardImage = styled.div`
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
  width: 100%;
  height: 544px;
  border-radius: 26px;

  @media ${theme.media.mobile} {
    max-width: 294px;
    height: 344px;
    width: 100%;
    background: url(${mainSmall}) no-repeat top;
  }
`

const MainCard = styled.div`
  max-width: 304px;
  width: 100%;
  min-height: 170px;
  padding: 20px;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: -70px;
  right: 0;

  @media ${theme.media.medium} {
    right: -30px;
  }

  @media ${theme.media.mobile} {
    max-width: 224px;
    width: 100%;
    min-height: 137px;
    padding: 12px;
    
    bottom: -80px;
    right: 100px;
  }
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

    @media ${theme.media.mobile} {
      margin: 10px 0 12px;
    }
    
  }
`

const CardButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`