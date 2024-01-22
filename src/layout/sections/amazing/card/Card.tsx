import React from 'react';
import {cardsData} from '../cardsData/cardsData';
import {DescriptionCard} from './descriptionCard/DescriptionCard';
import {S} from './Card_Styles';
import {Fade} from 'react-awesome-reveal';

export const Card = () => {
    return (
        <Fade damping={1} delay={400} triggerOnce>
        <S.Card>
            {cardsData.map(c => (
                <S.CardItem key={c.id}>
                    <S.Image src={c.image} alt="card-image"/>
                    <DescriptionCard cardsData={c}/>
                </S.CardItem>
            ))}
        </S.Card>
        </Fade>
    );
};



