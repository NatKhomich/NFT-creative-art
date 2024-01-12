import osvaldo from '../../../../assets/images/popular/osvaldo.webp'
import ranson from '../../../../../src/assets/images/popular/ranson.webp'
import cristio from '../../../../assets/images/popular/cristio.webp'
import sebastian from '../../../../assets/images/popular/sebastian.webp'
import abraham from '../../../../assets/images/popular/abraham.webp'

import osvaldoAvatar from '../../../../assets/images/popular/avatar/osvaldoAvatar.png'
import ransonAvatar from '../../../../assets/images/popular/avatar/ransonAvatar.png'
import cristioAvatar from '../../../../assets/images/popular/avatar/cristioAvatar.png'
import sebastianAvatar from '../../../../assets/images/popular/avatar/sebastianAvatar.png'
import abrahamAvatar from '../../../../assets/images/popular/avatar/abrahamAvatar.png'


type Data = {
    id: number
    image: string
    nick: string
    userName: string
    avatar: string
}

export const popularData: Data[] = [
    {
        id: 1,
        image: osvaldo,
        nick: 'Owner',
        userName: 'Osvaldo Percy',
        avatar: osvaldoAvatar,
    },
    {
        id: 2,
        image: ranson,
        nick: 'Owner',
        userName: 'Ranson Sqiure',
        avatar: ransonAvatar,
    },
    {
        id: 3,
        image: sebastian,
        nick: 'Owner',
        userName: 'Sebastian waltan',
        avatar: sebastianAvatar,
    },
    {
        id: 4,
        image: abraham,
        nick: 'Owner',
        userName: 'Abraham Zack',
        avatar: abrahamAvatar,
    },
    {
        id: 5,
        image: cristio,
        nick: 'Owner',
        userName: 'Cristio leo',
        avatar: cristioAvatar,
    },
]