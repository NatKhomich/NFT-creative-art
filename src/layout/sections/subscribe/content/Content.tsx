import React from 'react';
import {Title} from '../../../../components/title/Title';
import {Span} from '../../../../components/span/Span';
import {Description} from '../../../../components/description/Description';
import {Button} from '../../../../components/button/Button';
import {S} from './Content_Styles'

export const Content = () => {
    return (
        <S.Content>
            <Title>Subscribe And <Span> get our Updates</Span> Every Week </Title>
            <Description>
                We have a blog related to NFT so we can share thoughts and routines on our blog which is
                updated
                weekly
            </Description>

            <S.Form>
                <S.Input placeholder="Enter your e-mail"/>
                <Button styleButton="accent" width="160px">Subscribe</Button>
            </S.Form>
        </S.Content>
    );
};

