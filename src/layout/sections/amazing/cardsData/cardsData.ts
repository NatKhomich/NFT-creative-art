import cyberpunkImage from '../../../../assets/images/amazing/cyberpunk.webp';
import chargeImage from '../../../../assets/images/amazing/charge.webp';
import surgeonImage from '../../../../assets/images/amazing/surgeon.webp';

export type CardsDataProps = {
    id: string
    image: string
    title: string
    price: string
    smallText: string
    time: string
    buttonText: string
}

export const cardsData: CardsDataProps[] = [
    {
        id: '1',
        image: cyberpunkImage,
        title: 'Cyberpunk Cocomo',
        price: '490ETH',
        smallText: 'Ending In',
        time: '03:24:56',
        buttonText: 'Place A Bid'
    },
    {
        id: '2',
        image: chargeImage,
        title: 'Charge, Qi tiao yu',
        price: '490ETH',
        smallText: 'Ending In',
        time: '03:24:56',
        buttonText: 'Place A Bid'
    },
    {
        id: '3',
        image: surgeonImage,
        title: 'Surgeon, Josh Rife',
        price: '490ETH',
        smallText: 'Ending In',
        time: '03:24:56',
        buttonText: 'Place A Bid'
    },
]