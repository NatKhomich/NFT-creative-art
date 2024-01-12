import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/button/Button';
import {Card} from './card/Card';
import {Title} from '../../../components/title/Title';
import {Span} from '../../../components/span/Span';
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






