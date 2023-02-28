import Link from 'next/link';
import React, { createContext } from 'react';
import MetamaskProfile from '../../Profile/MetamaskProfile';

const Header = () => {
    return <div id="header" className='border-b border-solid border-[#e4e4e4]'>
        <div className='h-[76px]'>
            <div className='flex items-center justify-between px-7 h-full'>
                <Link href={"/"}>
                    <div className='py-3 flex'>
                        <div className='h-[20px] mr-[8px]'>
                            <img src='/logo/Logo_3.png' alt='logo image' className='h-full w-auto' />
                        </div>
                        <div className='font-extrabold text-[18px] text-[#1b1d21] tracking-[0.2px] leading-[1.3]'>Renaissance Lab.</div>
                    </div>
                </Link>
                <div>
                    <MetamaskProfile />
                </div>
            </div>
        </div>
    </div>
}

export default Header