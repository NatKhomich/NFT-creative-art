import React from 'react';
import {Button} from '../../../../components/button/Button';
import {S} from './CardImage_Styles'

export const CardImage = () => {
    return (
        <S.CardImage>
            <S.ImageBlock/>
            <S.MainCard>
                <S.CardItemGroup>
                    <S.CardItem>
                        <span>Ends in</span>
                        <small>05:45:47</small>
                    </S.CardItem>

                    <S.CardItem>
                        <span>Current bid</span>
                        <small> 0.24ETH</small>
                    </S.CardItem>
                </S.CardItemGroup>
                <S.CardButtonGroup>
                    <Button styleButton="base" width="264px" height="52px"> Place A Bid </Button>
                </S.CardButtonGroup>
            </S.MainCard>
        </S.CardImage>
    );
};

