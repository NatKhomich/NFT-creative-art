import React from 'react';
import {dataLink} from '../data/footerData';
import {S} from '../Footer_Styles'

export const LinkList = () => {
    return (
        <S.LinkList>
            {dataLink.map(el => (
                <div key={el.id}>
                    <S.ListTitle>{el.title}</S.ListTitle>
                    <S.NavList>
                        <ul>
                            {el.items.map((i, index) => (
                                <S.ListItem key={index}>
                                    <a href="#">{i}</a>
                                </S.ListItem>
                            ))}
                        </ul>
                    </S.NavList>
                </div>
            ))}
        </S.LinkList>
    );
};

