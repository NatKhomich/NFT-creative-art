import React from 'react';
import {Logo} from '../../../../components/logo/Logo';
import {Menu} from '../menu/Menu';
import {FlexWrapper} from '../../../../components/flexWrapper/FlexWrapper';
import {S} from '../HeaderMenu_Styles'

export const DesktopMenu = () => {
    return (
        <S.DesktopMenu>
            <FlexWrapper justify="space-between" align="center">
                <Logo/>
                <S.Menu>
                    <Menu />
                </S.Menu>
                <S.MainLink to={'contact'} smooth>Contact</S.MainLink>
            </FlexWrapper>
        </S.DesktopMenu>
    );
};

