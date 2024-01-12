import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {InfoLink} from '../../../components/infoLink/InfoLink';
import imageOne from '../../../assets/images/best/create1.webp'
import imageTwo from '../../../assets/images/best/create2.webp'
import {Title} from '../../../components/title/Title';
import {Description} from '../../../components/description/Description';
import {Span} from '../../../components/span/Span';
import {Container} from '../../../components/container/Container';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';

export const Best = () => {
    return (
        <StyledBest>
            <Container>
                <FlexWrapper justify="space-between" wrap="wrap" align="center">
                    <BestContent>
                        <Title>Create And Sell Your <Span>Best NFTs</Span> </Title>
                        <Description>
                            Start exploring the world of digital art and NFTs today and take control of your digital
                            assets with
                            confidence!
                        </Description>

                        <LinkBlock>
                            <Button styleButton="accent" width="176px" height="52px">Create Now</Button>
                            <InfoLink href="#">Learn More</InfoLink>
                        </LinkBlock>
                    </BestContent>

                    <BestImage>
                        <ImageOne/>
                        <ImageTwo/>
                    </BestImage>

                </FlexWrapper>
            </Container>
        </StyledBest>
    );
};

const StyledBest = styled.section`
`

const BestContent = styled.div`
  max-width: 426px;
`

const LinkBlock = styled.div`
  display: flex;
  align-items: center;
`

const BestImage = styled.div`
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