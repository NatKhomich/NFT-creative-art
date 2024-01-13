import React from 'react';
import {S} from '../HeaderMenu_Styles'

const menuItem = ['Marketplace', 'Artists', 'Community', 'Collections']
export const Menu = () => {
    return (
        <ul>
            {menuItem.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.MenuLink href="#">{item}</S.MenuLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

