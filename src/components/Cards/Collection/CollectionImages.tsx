import { ArtI } from '@/data/interfaces';
import { range } from '@/lib/utils';
import React from 'react';
import CollectionImage from './CollectionImage';

interface Props{
    arts: ArtI[]
}

const CollectionImages:React.FC<Props> = ({arts}) => {
    return <div className='p-1'>
        <div className='grid grid-cols-4 grid-rows-2 gap-1'>
            {range(5).map((i) => <CollectionImage key={i} main={i === 0} src={arts[i] ? arts[i].src : null} />)}
        </div>
    </div>
}

export default CollectionImages;