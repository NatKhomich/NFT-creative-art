import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.webp'

export const Logo = () => {
    return (
        <a href={''}>
            <StyledLogo src={logo} alt={'creative-art'}/>
        </a>
    );
};

const StyledLogo = styled.img`

`