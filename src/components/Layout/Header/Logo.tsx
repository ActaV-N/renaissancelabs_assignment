import Text from '@/components/Typography/Text';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return <div className='py-3 flex'>
        <div className='h-[20px]'>
            <Image priority src='/logo/Logo_3.png' alt='logo image' width={36} height={20} />
        </div>
        <Text face='urbanist' weight='extrabold' tails='hidden md:block ml-[8px] text-[18px] text-black-100 tracking-[0.2px] leading-[1.3]'>
            Renaissance Lab.
        </Text>
    </div>
}

export default Logo;