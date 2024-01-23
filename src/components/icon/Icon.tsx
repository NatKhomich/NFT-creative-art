import React from 'react';
import sprite from '../../assets/images/sprite.svg'

type Props = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = ({iconId, width, height, viewBox}: Props) => {
    return (
        <svg width={width || '28'} height={height || '28'} viewBox={viewBox || "0 0 28 28"}
              xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${iconId}`}/>
        </svg>
    );
};
