import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {Card} from './card/Card';
import {Title} from '../../../components/title/Title';
import {Span} from '../../../components/span/Span';
import {Container} from '../../../components/container/Container';


export const Amazing = () => {
    return (
        <StyledAmazing>
            <Container>
                <AmazingContent>
                    <Title><Span>Amazing</Span> and Super Unique Art of This <Span>Week</Span> </Title>
                    <Button styleButton="accent" width='134px' height='52px'> See All </Button>
                </AmazingContent>
                <Card/>
            </Container>
        </StyledAmazing>
    );
};

const StyledAmazing = styled.section`
`

const AmazingContent = styled.div`
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




