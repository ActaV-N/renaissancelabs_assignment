import React from 'react';

const Logo = () => {
    return <div className='py-3 flex'>
        <div className='h-[20px]'>
            <img src='/logo/Logo_3.png' alt='logo image' className='h-full w-auto' />
        </div>
        <div className='hidden md:block ml-[8px] font-extrabold text-[18px] text-[#1b1d21] tracking-[0.2px] leading-[1.3]'>Renaissance Lab.</div>
    </div>
}

export default Logo;