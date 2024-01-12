import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';
import {Content} from './content/Content';
import {Images} from './images/Images';

export const Best = () => {
    return (
        <StyledBest>
            <Container>
                <FlexWrapper justify="space-between" wrap="wrap" align="center">
                    <Content/>
                    <Images/>
                </FlexWrapper>
            </Container>
        </StyledBest>
    );
};

const StyledBest = styled.section``

