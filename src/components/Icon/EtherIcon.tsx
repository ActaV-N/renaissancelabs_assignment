import Image from 'next/image';
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
    return <div className={twMerge(SizeEnum[size], `bg-token-ether rounded-full flex items-center justify-center`)}>
        <div className='w-3/4 h-3/4 relative'>
            <Image src='/ethereum.png' alt='ether' fill sizes={"25px"} />
        </div>
    </div>
}

export default EtherIcon