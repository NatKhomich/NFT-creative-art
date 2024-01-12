import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';
import imageOne from '../../../assets/images/subscribe/subscribe1.webp'
import imageTwo from '../../../assets/images/subscribe/subscribe2.webp'
import {Content} from './content/Content';


export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Container>
                <FlexWrapper justify="space-between" wrap="wrap-reverse">
                    <StyledImages>
                        <ImageOne/>
                        <ImageTwo/>
                    </StyledImages>

                    <Content/>
                </FlexWrapper>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
  display: flex;
`

const StyledImages = styled.div`
  max-width: 630px;
  width: 100%;
  height: 458px;
  position: relative;
`

const ImageOne = styled.div`
  background: url(${imageOne}) no-repeat top;

  max-width: 470px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  bottom: 10px;
  left: 40px;
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
`