import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';
import group from '../../../../assets/images/main/group.webp'
import star from '../../../../assets/images/main/Star 1.png'
import mainImage from '../../../../assets/images/main/main.webp'
import mainSmall from '../../../../assets/images/main/mainSmall.webp'
import starMobile from '../../../../assets/images/main/starMobile.png'
import groupMobile from '../../../../assets/images/main/groupMobile.webp'

const CardImage = styled.div`
  position: relative;

  &::before {
    content: url(${group});
    position: absolute;
    width: 200px;
    height: 200px;
    left: -60px;
    top: 200px;
    z-index: 2;

    @media ${theme.media.mobile} {
      content: url(${groupMobile});
      position: absolute;
      width: 200px;
      height: 200px;
      left: -30px;
      top: 160px;
    }
  }

  &::after {
    content: url(${star});
    position: absolute;
    left: 8px;
    top: 268px;

    @media ${theme.media.mobile} {
      content: url(${starMobile});
      position: absolute;
      left: 0;
      top: 190px;
    }
  }
`

const ImageBlock = styled.div`
  background: url(${mainImage}) no-repeat top;
  max-width: 464px;
  width: 100%;
  height: 544px;
  border-radius: 26px;

  @media ${theme.media.medium} {
    max-width: 380px;
    height: 444px;
    width: 100%;
  }

  @media ${theme.media.mobile} {
    max-width: 280px;
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
  border-top: 1px solid ${theme.colors.accent};

  position: absolute;
  bottom: -70px;
  right: 0;

  @media ${theme.media.medium} {
    right: 20px;
    max-width: 254px;
    width: 100%;
    min-height: 137px;
  }

  @media ${theme.media.mobile} {
    max-width: 224px;
    width: 100%;
    min-height: 137px;
    padding: 12px;
    
    bottom: -70px;
    right: 0;
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

export const S = {
    CardImage,
    ImageBlock,
    MainCard,
    CardItemGroup,
    CardItem,
    CardButtonGroup
}