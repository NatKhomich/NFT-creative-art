import React from 'react';
import {S} from '../Footer_Styles'

export const Copyright = () => {
    return (
        <S.CopyrightBlock>
            <S.Text>
                Copyright 2024 - Creativeart
            </S.Text>

            <S.Text>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
            </S.Text>
        </S.CopyrightBlock>
    );
};

