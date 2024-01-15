import React from 'react';
import {Container} from '../../components/container/Container';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu';
import {S} from './Header_Styles'
import {useWindowWidth} from '../../hooks/useWindowWidth';
import {useWindowScroll} from '../../hooks/useWindowScroll';


export const  Header = () => {

    const {isScrolled} = useWindowScroll()
    const {width} = useWindowWidth()
    const breakpoint = 820;

    return (
        <S.Header isScrolled={isScrolled}>
            <Container>
                {width < breakpoint
                    ? <MobileMenu/>
                    : <DesktopMenu/>}
            </Container>
        </S.Header>
    );
};




