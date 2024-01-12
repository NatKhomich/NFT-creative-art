import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container';
import {Images} from './images/Images';
import {Content} from './content/Content';

export const Popular = () => {
    return (
        <StyledPopular>
            <Container>
                <Content/>
                <Images/>
            </Container>
        </StyledPopular>
    );
};

const StyledPopular = styled.section``




