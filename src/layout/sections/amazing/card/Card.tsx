import React from 'react';
import {cardsData} from '../cardsData/cardsData';
import {DescriptionCard} from './descriptionCard/DescriptionCard';
import {S} from './Card_Styles'

export const Card = () => {
    return (
        <S.Card>
            {cardsData.map(c => (
                <S.CardItem key={c.id}>
                    <S.Image src={c.image} alt="card-image"/>
                    <DescriptionCard cardsData={c}/>
                </S.CardItem>
            ))}

        </S.Card>
    );
};



