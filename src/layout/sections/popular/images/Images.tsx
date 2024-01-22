import React from 'react';
import {popularData} from '../data/data';
import {S} from './Images_Styles'
import {Fade} from 'react-awesome-reveal';

export const Images = () => {
    return (
        <Fade cascade damping={1} delay={300} triggerOnce>
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
        </Fade>
    );
};

