import Link from 'next/link';
import React from 'react';
import MetamaskProfile from '../../Profile/MetamaskProfile';
import Logo from './Logo';

const Header = () => {
    return <div id="header" className='z-30 bg-white border-b border-solid border-[#e4e4e4] fixed w-full'>
        <div className='h-[76px]'>
            <div className='flex items-center justify-between px-7 h-full'>
                <Link href={"/"}>
                    <Logo/>
                </Link>
                <div>
                    <MetamaskProfile />
                </div>
            </div>
        </div>
    </div>
}

export default Header