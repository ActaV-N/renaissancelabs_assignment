import { CollectionI } from '@/data/interfaces';
import React from 'react';
import CollectionContent from './CollectionContent';
import CollectionImages from './CollectionImages';

interface Props{
    collection: CollectionI
}

const CollectionCard:React.FC<Props> = ({collection}) => {
    return <div className='max-w-[380px] rounded-[10px] border border-solid border-[#d2d3d4]'>
        <CollectionImages arts={collection.arts} />
        <CollectionContent name={collection.name} marketCap={collection.marketCap} price={collection.price} />
    </div>
}

export default CollectionCard