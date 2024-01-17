import React from 'react';
import {Icon} from '../../../../../components/icon/Icon';
import {Button} from '../../../../../components/button/Button';
import {CardsDataProps} from '../../cardsData/cardsData';
import {S} from '../Card_Styles'

type Props = {
    cardsData: CardsDataProps
}

export const DescriptionCard = ({cardsData}: Props) => {
    const {time, smallText, price, title, buttonText} = cardsData

    return (
        <S.DescriptionCard>
            <S.UpperBlock>
                <S.TitleCard> {title}</S.TitleCard>
                <S.IconPriceBlock>
                    <Icon iconId='iconAmazing'/>
                    <S.Price>{price}</S.Price>
                </S.IconPriceBlock>
            </S.UpperBlock>

            <div>
                <S.Ending>
                    <small>{smallText}</small>
                    <S.Time>
                        <Icon iconId='time'/>
                        <span> {time}</span>
                    </S.Time>
                </S.Ending>
                <Button styleButton='base' width='168px' height='48px'> {buttonText} </Button>
            </div>
        </S.DescriptionCard>
    );
};

