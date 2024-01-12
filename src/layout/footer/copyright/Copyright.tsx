import React from 'react';
import styled from 'styled-components';

export const Copyright = () => {
    return (
        <CopyrightBlock>
            <Text>
                Copyright 2024 - Creativeart
            </Text>

            <Text>
                Privacy Policy
                Terms & Conditions
            </Text>
        </CopyrightBlock>
    );
};

const CopyrightBlock = styled.div`
  margin-top: 96px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Text = styled.small`
  display: flex;
  gap: 28px;
  color: #FFFFFD;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.60px;
`