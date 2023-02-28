import { ArtI } from '@/data/interfaces';
import React from 'react';
import Card from '../Card';
import CardContent from '../CardContent';

interface Props{
    art: ArtI
}

const SingleCard:React.FC<Props> = ({art}) => {
    return <Card>
        <div className='p-1'>
            <div className='aspect-square'>
                <img src={art.src} alt={art.name} className='rounded-[10px]' />
            </div>
        </div>
        <CardContent name={art.name} price={art.price} />
    </Card>
}

export default SingleCard