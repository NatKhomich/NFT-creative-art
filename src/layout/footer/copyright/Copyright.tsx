import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../styles/Theme';

export const Copyright = () => {
    return (
        <CopyrightBlock>
            <Text>
                Copyright 2024 - Creativeart
            </Text>

            <Text>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
            </Text>
        </CopyrightBlock>
    );
};

const CopyrightBlock = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${theme.media.mobile} {
    flex-direction: column;
  }


`

const Text = styled.small`
  display: flex;
  gap: 28px;
  color: #FFFFFD;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.60px;

  @media ${theme.media.mobile} {
      flex-direction: column;
    gap: 16px
  }

  &:first-child {
    margin-bottom: 16px;
  }
`