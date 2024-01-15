import React, {useEffect} from 'react';

export const useWindowWidth = () => {

    const [width, setWidth] = React.useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    return {
        width
    }
}