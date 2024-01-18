import {theme} from '../../../styles/Theme';
import styled from 'styled-components';
import imageOne from '../../../assets/images/subscribe/subscribe1.webp'
import imageTwo from '../../../assets/images/subscribe/subscribe2.webp'
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';

const Subscribe = styled.section`
  & ${FlexWrapper} {
    gap: 50px;
  }
  
  @media ${theme.media.subscribeReset} {
    & ${FlexWrapper} {
      justify-content: center;
    }
  }
`

const Images = styled.div`
  max-width: 630px;
  width: 100%;
  height: 458px;
  position: relative;

  @media ${theme.media.mobile} {
    height: 250px;
    width: 350px;
  }
`

const ImageOne = styled.div`
  background: url(${imageOne}) no-repeat top;

  max-width: 470px;
  max-height: 460px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  bottom: 10px;
  left: 40px;

  &:hover {
    transition: ${theme.animations.transition};
    transform: ${theme.animations.transform};
    z-index: 3;
  }
  
  @media ${theme.media.mobile} {
    max-width: 240px;
    max-height: 228px;
    background-size: cover;
    background-position: center;
  }
`

const ImageTwo = styled.div`
  background: url(${imageTwo}) no-repeat top;
  
  max-width: 282px;
  max-height: 475px;
  width: 45%;
  height: 76%;
  border-radius: 18px;
  position: absolute;
  right: 0;
  bottom: 0;

  &:hover {
    transition: ${theme.animations.transition};
    transform: ${theme.animations.transform};
    z-index: 3;
  }

  @media ${theme.media.mobile} {
    max-width: 152px;
    max-height: 190px;
    background-size: cover;
    background-position: center;
  }
`

export const S = {
    Subscribe,
    Images,
    ImageOne,
    ImageTwo
}