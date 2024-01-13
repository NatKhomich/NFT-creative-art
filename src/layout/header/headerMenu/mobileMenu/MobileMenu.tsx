import React, {useState} from 'react';
import {FlexWrapper} from '../../../../components/flexWrapper/FlexWrapper';
import {Menu} from '../menu/Menu';
import {Icon} from '../../../../components/icon/Icon';
import {LogoMobile} from '../../../../components/logo/LogoMobile';
import {S} from '../HeaderMenu_Styles'

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const isOpenHandler = () => setIsOpen(!isOpen)

    return (
        <S.MobileMenu>
            <FlexWrapper justify='space-between' align='center'>
                <LogoMobile/>
                <S.BurgerButton onClick={isOpenHandler}>
                    {isOpen ?  <Icon iconId="close"/> : <Icon iconId="menu"/>}
                </S.BurgerButton>

                <S.MenuPopup onClick={isOpenHandler} isOpen={isOpen}>
                    <Menu/>
                </S.MenuPopup>
            </FlexWrapper>
        </S.MobileMenu>
    );
};

