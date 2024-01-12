import React from 'react';
import styled from 'styled-components';
import {Card} from './card/Card';
import {Container} from '../../../components/container/Container';
import {Content} from './content/Content';


export const Amazing = () => {
    return (
        <StyledAmazing>
            <Container>
                <Content/>
                <Card/>
            </Container>
        </StyledAmazing>
    );
};

const StyledAmazing = styled.section`
`






