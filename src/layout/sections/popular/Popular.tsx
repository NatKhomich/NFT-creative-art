import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {Title} from '../../../components/title/Title';
import {Container} from '../../../components/container/Container';
import {Span} from '../../../components/span/Span';
import {PopularImage} from './popularImage/PopularImage';

export const Popular = () => {
    return (
        <StyledPopular>
            <Container>
                <Content>
                    <Title>Popular <Span>Artists</Span> On This Week</Title>
                    <Button styleButton="accent" width="134px" height="52px">See All</Button>
                </Content>

                <PopularImage/>

            </Container>
        </StyledPopular>
    );
};

const StyledPopular = styled.section`
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 14px 64px;

  & ${Title} {
    max-width: 400px;
  }
`


