import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {Card} from './card/Card';
import {Title} from '../../../components/title/Title';
import {Span} from '../../../components/span/Span';


export const Amazing = () => {
    return (
        <StyledAmazing>
            <AmazingContent>
                <Title><Span>Amazing</Span> and Super Unique Art of This <Span>Week</Span> </Title>
                <Button styleButton='accent'> See All </Button>
            </AmazingContent>

            <Card />
        </StyledAmazing>
    );
};

const StyledAmazing = styled.section`
`

const AmazingContent = styled.div`
  display: flex;
  justify-content: space-around;
`




