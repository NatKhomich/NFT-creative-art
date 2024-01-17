import React from 'react';
import {Title} from '../../../../components/title/Title';
import {Span} from '../../../../components/span/Span';
import {Description} from '../../../../components/description/Description';
import {Button} from '../../../../components/button/Button';
import {InfoLink} from '../../../../components/infoLink/InfoLink';
import {S} from '../Best_Styles'

export const Content = () => {
    return (
        <S.Content>
            <Title>Create And Sell Your <Span>Best NFTs</Span> </Title>
            <Description>
                Start exploring the world of digital art and NFTs today and take control of your digital
                assets with
                confidence!
            </Description>

            <S.LinkBlock>
                <Button styleButton="accent" width="176px" height="52px">Create Now</Button>
                <InfoLink href="#">Learn More</InfoLink>
            </S.LinkBlock>
        </S.Content>
    );
};

