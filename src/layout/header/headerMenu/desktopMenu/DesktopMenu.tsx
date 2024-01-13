import React from 'react';
import {Logo} from '../../../../components/logo/Logo';
import {Menu} from '../menu/Menu';
import {Button} from '../../../../components/button/Button';
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
                <Button as="a" width="143px" height="48px" styleButton="accent">Contact</Button>
            </FlexWrapper>
        </S.DesktopMenu>

    );
};

