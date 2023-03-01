import { ArtI, CollectionI } from '@/data/interfaces';
import { arts, collections } from '@/data/mockData';
import React, { useEffect, useState } from 'react';
import CardContainer from '../Container/CardContainer';
import { TabEnum } from '../Layout/Header/Tabs/HomeTab';
import Text from '../Typography/Text';
import CollectionCard from './Collection/CollectionCard';
import SingleCard from './Single/SingleCard';
import DotLoader from 'react-spinners/DotLoader';

interface Props{
    showType: keyof typeof TabEnum
}

const CardList:React.FC<Props> = ({showType}) => {
    // List data
    const [collectionData, setCollectionData] = useState<CollectionI[]>([]);
    const [artData, setArtData] = useState<ArtI[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Set List data
    useEffect(() => {
        if(showType === 'all'){
            setCollectionData(collections);
            setArtData(arts.filter(art => art.collectionRef === -1))
        } else if(showType === 'collections'){
            setCollectionData(collections);
        } else{
            setArtData(arts);
        }
        setIsLoading(false);
    }, [showType])

    if(isLoading) return <div className='h-52 flex items-center justify-center'>
        <DotLoader/> 
    </div>

    return <div>
        {(showType === 'all' || showType === 'collections') &&
        <div className='mb-12 last:mb-0'>
            <Text tails='text-xl pb-3' weight='semibold'>
                Collections
            </Text>
            <CardContainer>
                {collectionData.map(item => <CollectionCard key={item.id} collection={item}/>)}
            </CardContainer>
        </div>}
        {(showType === 'all' || showType === 'singles') &&
        <div className='mb-12 last:mb-0'>
            <Text tails='text-xl pb-3' weight='semibold'>
                Arts
            </Text>
            <CardContainer>
                {artData.map(item => <SingleCard key={item.id} art={item}/>)}
            </CardContainer>
        </div>}
    </div>
    
}

export default CardList;