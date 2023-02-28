import React from 'react';
import EtherIcon from '../Icon/EtherIcon';
import Text from '../Typography/Text';

interface Props{
    label: string,
    value: number
}

const Price:React.FC<Props> = ({label, value}) => {
    return <div className='pr-5'>
        <Text weight='medium' face='urbanist' slate='slate-400' tails='pb-1'>
            {label}
        </Text>
        <div className='flex items-center'>
            <div>
                <EtherIcon size='small' />
            </div>
            <Text face='urbanist' slate='slate-600' weight='semibold' tails='pl-2'>
                {value} ETH
            </Text>
        </div>
    </div>
}

export default Price