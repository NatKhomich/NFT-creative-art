import React from 'react';
import {S} from '../HeaderMenu_Styles'

const menuItem = ['marketplace', 'collections', 'community', 'artists']
export const Menu = () => {
    return (
        <ul>
            {menuItem.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.MenuLink to={item} smooth>{item}</S.MenuLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

