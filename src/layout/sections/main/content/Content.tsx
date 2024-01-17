import React from 'react';
import {Description} from '../../../../components/description/Description';
import {Button} from '../../../../components/button/Button';
import {InfoLink} from '../../../../components/infoLink/InfoLink';
import {S} from './Content_Styles'


export const Content = () => {
    return (
        <S.Content>
            <S.Title>
                Discover and Collect The Best NFTs <span>Digital Art.</span>
            </S.Title>
            <Description>
                Get started with the easiest and most secure platform to buy and trade digital ART and
                NFT’s.
                Start exploring the world of digital art and NFTs today and take control of your digital
                assets
                with confidence!
            </Description>
            <S.LinkBlock>
                <Button as={'a'} styleButton="accent" width="178px" height="52px">Explore Now</Button>
                <InfoLink href="#">Learn More</InfoLink>
            </S.LinkBlock>
        </S.Content>
    );
};


