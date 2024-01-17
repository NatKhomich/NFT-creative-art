import React from 'react';
import {Title} from '../../../../components/title/Title';
import {Span} from '../../../../components/span/Span';
import {Button} from '../../../../components/button/Button';
import {S} from '../Popular_Styles'

export const Content = () => {
    return (
        <S.Content>
            <Title>Popular <Span>Artists</Span> On This Week</Title>
            <Button styleButton="accent" width="134px" height="52px">See All</Button>
        </S.Content>
    );
};

