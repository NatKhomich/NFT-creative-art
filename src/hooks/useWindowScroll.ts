import React, {useEffect} from 'react';

export const useWindowScroll = () => {

    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 1 ? setIsScrolled(true) : setIsScrolled(false)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return {
        isScrolled
    }
}