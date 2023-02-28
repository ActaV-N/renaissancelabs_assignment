import React from 'react';
import { twMerge } from 'tailwind-merge';

enum SizeEnum{
    normal='w-[25px] h-[25px]',
    small='w-[21px] h-[21px]'
}

interface Props{
    size?:keyof typeof SizeEnum
}

const EtherIcon:React.FC<Props> = ({size='normal'}) => {
    return <div className={twMerge(SizeEnum[size], `bg-[#ebedfc] rounded-full flex items-center justify-center`)}>
        <img className='w-3/4 h-3/4' src='/ethereum.png' alt='ether' />
    </div>
}

export default EtherIcon