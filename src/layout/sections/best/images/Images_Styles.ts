import styled from 'styled-components';
import imageOne from '../../../../assets/images/best/create1.webp'
import imageTwo from '../../../../assets/images/best/create2.webp'
import imageOneMobile from '../../../../assets/images/best/imageOneMobile.webp'
import imageTwoMobile from '../../../../assets/images/best/imageTwoMobile.webp'
import {theme} from '../../../../styles/Theme';

const Images = styled.div`
  position: relative;

  max-width: 740px;
  width: 100%;
  height: 559px;

  @media ${theme.media.mobile} {
   margin-top: 48px;

    max-width: 342px;
    width: 100%;
    height: 300px;
  }
`

const ImageOne = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background: url(${imageOne}) no-repeat top;
  border-radius: 24px;
  max-width: 410px;
  max-height: 475px;
  width: 55%;
  height: 71.5%;
  z-index: 2;

  @media ${theme.media.mobile} {
    max-width: 190px;
    height: 186px;
    width: 100%;
    background: url(${imageOneMobile}) no-repeat top;
  }
`

const ImageTwo = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  background: url(${imageTwo}) no-repeat top;
  border-radius: 24px;
  max-width: 410px;
  max-height: 475px;
  width: 55%;
  height: 85%;

  @media ${theme.media.mobile} {
    max-width: 190px;
    height: 220px;
    width: 100%;
    background: url(${imageTwoMobile}) no-repeat top;
  }
`

export const S = {
    Images,
    ImageOne,
    ImageTwo
}