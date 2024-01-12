import React from 'react';
import {Title} from '../../../../components/title/Title';
import {Span} from '../../../../components/span/Span';
import {Button} from '../../../../components/button/Button';
import styled from 'styled-components';

export const Content = () => {
    return (
        <StyledContent>
            <Title>
                <Span>Amazing</Span> and Super Unique Art of This <Span>Week</Span>
            </Title>
            <Button styleButton="accent" width="134px" height="52px"> See All </Button>
        </StyledContent>
    );
};

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;


  & ${Title} {
    max-width: 600px;
    flex-shrink: 1;
  }

  & ${Button} {
    max-width: 600px;
    flex-shrink: 0;
  }
`