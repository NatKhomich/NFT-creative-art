import logo from '../../assets/images/LogoMobile.webp';
import styled from 'styled-components';
import React from 'react';

export const LogoMobile = () => {
    return (
        <a href={''}>
            <StyledLogo src={logo} alt={'creative-art'}/>
        </a>
    );
};

const StyledLogo = styled.img``