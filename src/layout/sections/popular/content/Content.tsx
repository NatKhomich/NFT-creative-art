import React from 'react';
import {Title} from '../../../../components/title/Title';
import {Span} from '../../../../components/span/Span';
import {Button} from '../../../../components/button/Button';
import styled from 'styled-components';

export const Content = () => {
    return (
        <StyledContent>
            <Title>Popular <Span>Artists</Span> On This Week</Title>
            <Button styleButton="accent" width="134px" height="52px">See All</Button>
        </StyledContent>
    );
};

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 14px 64px;

  & ${Title} {
    max-width: 400px;
  }
`