import Text from '@/components/Typography/Text';
import { unitAbbreviation } from '@/lib/utils';
import React from 'react';

interface Props{
    count:number
}

const CollectionCount:React.FC<Props> = ({count}) => {

    // If art count is lower than 6, return nothing
    if(count <= 5) return <></>

    return <Text face='urbanist' weight='bold' tails="min-w-[50px] text-center text-[13px] absolute bottom-0 right-0 rounded-br-md rounded-tl-10 m-1 p-1.5 bg-white-100">
        + {unitAbbreviation(count - 5, true)}
    </Text>
}

export default CollectionCount