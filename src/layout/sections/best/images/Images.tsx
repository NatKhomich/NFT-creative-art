import React from 'react';
import styled from 'styled-components';
import imageOne from '../../../../assets/images/best/create1.webp'
import imageTwo from '../../../../assets/images/best/create2.webp'

export const Images = () => {
    return (
        <StyledImages>
            <ImageOne/>
            <ImageTwo/>
        </StyledImages>
    );
};


const StyledImages = styled.div`
  position: relative;

  max-width: 740px;
  width: 100%;
  height: 559px;
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
`