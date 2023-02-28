import { CollectionI } from '@/data/interfaces';
import React from 'react';
import CollectionContent from './CollectionContent';
import CollectionCount from './CollectionCount';
import CollectionImages from './CollectionImages';

interface Props{
    collection: CollectionI
}

const CollectionCard:React.FC<Props> = ({collection}) => {
    return <div className='max-w-[380px] rounded-[10px] border border-solid border-[#d2d3d4]'>
        <div className='relative'>
            <CollectionImages arts={collection.arts} />
            <CollectionCount count={collection.arts.length} />
        </div>
        <CollectionContent name={collection.name} marketCap={collection.marketCap} price={collection.price} />
    </div>
}

export default CollectionCard