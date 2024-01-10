import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {InfoLink} from '../../../components/infoLink/InfoLink';
import imageOne from '../../../assets/images/best/create1.webp'
import imageTwo from '../../../assets/images/best/create2.webp'
import {Title} from '../../../components/title/Title';
import {Description} from '../../../components/description/Description';

export const Best = () => {
    return (
        <StyledBest>
            <BestContent>
                <Title>Create And Sell Your <span>Best NFTs</span> </Title>
                <Description>
                    Start exploring the world of digital art and NFTs today and take control of your digital assets with
                    confidence!
                </Description>

                <LinkBlock>
                    <Button styleButton="accent">Create Now</Button>
                    <InfoLink href="#">Learn More</InfoLink>
                </LinkBlock>
            </BestContent>

            <BestImage>
                <ImageOne src={imageOne} alt="image-one"/>
                <ImageTwo src={imageTwo} alt="image-two"/>
            </BestImage>
        </StyledBest>
    );
};

const StyledBest = styled.section`
  display: flex;
`

const BestContent = styled.div`

`

const LinkBlock = styled.div`
  display: flex;
`

const BestImage = styled.div`
  display: flex;
`

const ImageOne = styled.img`
  border-radius: 24px;
  width: 410px;
  height: 400px;
  
`

const ImageTwo = styled.img`
  border-radius: 24px;
  width: 410px;
  height: 475px;
`