import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {Card} from './card/Card';
import {Title} from '../../../components/title/Title';


export const Amazing = () => {
    return (
        <StyledAmazing>
            <AmazingContent>
                <Title><span>Amazing</span> and Super Unique Art of This <span>Week</span> </Title>
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




