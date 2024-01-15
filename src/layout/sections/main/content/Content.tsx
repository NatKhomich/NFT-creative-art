import React from 'react';
import {Description} from '../../../../components/description/Description';
import {Button} from '../../../../components/button/Button';
import {InfoLink} from '../../../../components/infoLink/InfoLink';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';

export const Content = () => {
    return (
        <StyledContent>
            <Title>
                Discover and Collect The Best NFTs <span>Digital Art.</span>
            </Title>
            <Description>
                Get started with the easiest and most secure platform to buy and trade digital ART and
                NFT’s.
                Start exploring the world of digital art and NFTs today and take control of your digital
                assets
                with confidence!
            </Description>
            <LinkBlock>
                <Button as={'a'} styleButton="accent" width="178px" height="52px">Explore Now</Button>
                <InfoLink href="#">Learn More</InfoLink>
            </LinkBlock>
        </StyledContent>
    );
};


const StyledContent = styled.div`
  max-width: 544px;
`

const Title = styled.h1`
  font-family: Spectral, sans-serif;
  font-size: 64px;
  font-weight: 600;
  word-wrap: break-word;

  & span {
    color: ${theme.colors.accent};
    font-weight: 700;
  }

  @media ${theme.media.medium} {
    font-size: 48px;
  }

  @media ${theme.media.mobile} {
    font-size: 40px;
  }
}
`

const LinkBlock = styled.div`
  display: flex;
  align-items: center;
`