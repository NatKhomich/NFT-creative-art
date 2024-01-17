import React from 'react';
import {mainData} from '../data/mainData';
import {Span} from '../../../../components/span/Span';
import {S} from './Statistics_Styles'

export const Statistics = () => {
    return (
        <>
            {mainData.map((el, index) => (
                <S.Statistics key={index}>
                    <span> <Span>{el.data}</Span><span>{el.small}</span></span>
                    <S.Text>{el.text}</S.Text>
                </S.Statistics>
            ))}
        </>
    );
};

