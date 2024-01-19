import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.webp'
import {animateScroll} from 'react-scroll';

export const Logo = () => {
    return (
        <a onClick={() => {animateScroll.scrollToTop()}}>
            <StyledLogo src={logo} alt={'creative-art'}/>
        </a>
    );
};

const StyledLogo = styled.img`
cursor: pointer;
`