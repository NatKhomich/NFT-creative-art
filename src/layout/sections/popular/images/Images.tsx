import React from 'react';
import {popularData} from '../data/data';
import {S} from './Images_Styles'

export const Images = () => {
    return (
        <S.Images>
            <S.GridContainer>
                {popularData.map((p, index) => (
                    <S.GridItem key={index} image={p.image}>
                        <S.DescriptionImage>
                            <S.Avatar src={p.avatar} alt="avatar"/>
                            <S.AvatarDescription>
                                <small>{p.nick}</small>
                                <span>{p.userName}</span>
                            </S.AvatarDescription>
                        </S.DescriptionImage>
                    </S.GridItem>
                ))}
            </S.GridContainer>
        </S.Images>
    );
};

