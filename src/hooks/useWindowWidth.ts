import React, {useEffect} from 'react';

export const useWindowWidth = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 820;

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    return width <= breakpoint
}