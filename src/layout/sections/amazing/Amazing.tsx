import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {Card} from './card/Card';


export const Amazing = () => {
    return (
        <StyledAmazing>
            <TitleBlock>
                <Title><span>Amazing</span> and Super Unique Art of This <span>Week</span> </Title>
                <Button styleButton='accent'> See All </Button>
            </TitleBlock>

            <Card />
        </StyledAmazing>
    );
};

const StyledAmazing = styled.section`
  background-color: rgba(59, 56, 105, 0.59);
  height: 100vh;
`

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-around;
`

const Title = styled.h2`

`



