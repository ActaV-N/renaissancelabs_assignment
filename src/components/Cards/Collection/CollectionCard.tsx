import { CollectionI } from '@/data/interfaces';
import React from 'react';
import Card from '../Card';
import CardContent from '../CardContent';
import CollectionCount from './CollectionCount';
import CollectionImages from './CollectionImages';

interface Props{
    collection: CollectionI
}

const CollectionCard:React.FC<Props> = ({collection}) => {
    
    return <Card>
        <div className='relative'>
            <CollectionImages arts={collection.arts} />
            <CollectionCount count={collection.arts.length} />
        </div>
        <CardContent name={collection.name} marketCap={collection.marketCap} price={collection.price} />
    </Card>
}

export default CollectionCard