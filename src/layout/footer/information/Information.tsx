import React from 'react';
import {Logo} from '../../../components/logo/Logo';
import {Description} from '../../../components/description/Description';
import {Icon} from '../../../components/icon/Icon';
import styled from 'styled-components';
import {theme} from '../../../styles/Theme';

export const Information = () => {
    return (
        <StyledInformation>
            <Logo/>
            <Description>
                Discover NFTs by category, track the latest drop, and and follow the collections you love.
                Enjoy
                it!
            </Description>
            <SocialIcon>
                <Icon iconId="facebook"/>
                <Icon iconId="telegram"/>
                <Icon iconId="twitter"/>
                <Icon iconId="linkedin"/>
            </SocialIcon>
        </StyledInformation>
    );
};

const StyledInformation = styled.div`
  max-width: 276px;

  & ${Description} {
    margin: 8px 0 24px;
    text-align: left;
  }

  @media ${theme.media.mobile} {
    & ${Description} {
      margin: 16px 0 32px;
    }
  }
`

const SocialIcon = styled.div`
  margin-bottom: 48px;
  
  & svg + svg {
    margin-left: 12px;
  }

  & svg:hover {
    cursor: pointer;
    transform: ${theme.animations.transform};
  }

  @media ${theme.media.mobile} {
    margin-bottom: 48px;
  }

`