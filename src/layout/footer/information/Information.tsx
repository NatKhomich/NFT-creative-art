import React from 'react';
import {Logo} from '../../../components/logo/Logo';
import {Description} from '../../../components/description/Description';
import {Icon} from '../../../components/icon/Icon';
import {S} from '../Footer_Styles'

export const Information = () => {
    return (
        <S.Information>
            <Logo/>
            <Description>
                Discover NFTs by category, track the latest drop, and and follow the collections you love.
                Enjoy
                it!
            </Description>
            <S.SocialIcon>
                <Icon iconId="facebook"/>
                <Icon iconId="telegram"/>
                <Icon iconId="twitter"/>
                <Icon iconId="linkedin"/>
            </S.SocialIcon>
        </S.Information>
    );
};

