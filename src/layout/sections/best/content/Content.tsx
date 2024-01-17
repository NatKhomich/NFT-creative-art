import React from 'react';
import {Title} from '../../../../components/title/Title';
import {Span} from '../../../../components/span/Span';
import {Description} from '../../../../components/description/Description';
import {Button} from '../../../../components/button/Button';
import {InfoLink} from '../../../../components/infoLink/InfoLink';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';

export const Content = () => {
    return (
        <StyledContent>
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
        </StyledContent>
    );
};

const StyledContent = styled.div`
  max-width: 426px;

  @media ${theme.media.large} {
    margin-bottom: 30px;
  }

  @media ${theme.media.mobile} {
    margin-bottom: 0;
  }
`

const LinkBlock = styled.div`
  display: flex;
  align-items: center;

  @media ${theme.media.mobile} {
    justify-content: center;
    margin-bottom: 0;
  }
  
`