import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import FadeActionTooltip from '../Utils/FadeActionTooltip';
import ShadowContainer from '../Container/ShadowContainer';
import AfterLogin from './Login/AfterLogin';
import BeforeLogin from './Login/BeforeLogin';

interface Props{
    active: boolean,
    account: string | null | undefined,
    deactivate:Function,
    handleConnect: Function
}

const Profile:React.FC<Props> = ({active, account, deactivate, handleConnect}) => {
    // State of open for wallet connect tooltip
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Toggle open state of connect tooltip
    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen);
    }

    // Close connect tooltip
    const handleClose = () => {
        setIsOpen(false);
    }

    return <div className='relative w-fit ml-auto'>
        <div className='text-[#7E7F7F] flex items-center justify-center pointer w-fit' onClick={toggleOpen}>
            <div className='w-[40px] h-[40px] rounded-full bg-[#d2d3d4] text-[#545455] flex items-center justify-center'>
                <FaUser/>
            </div>
            <div className='ml-2 text-xl'>
                <FiChevronDown/>
            </div>
        </div>
        <FadeActionTooltip handleSubmit={active ? deactivate : handleConnect} open={isOpen} tails={`absolute bottom-0 right-0 translate-y-[100%] pt-[15px] w-[max-content]`}>
            <ShadowContainer tails="w-[250px]">
                    {active ? 
                    <AfterLogin account={account} handleClose={handleClose} />:
                    <BeforeLogin handleClose={handleClose} />}
            </ShadowContainer>
        </FadeActionTooltip>
    </div>
}

export default Profile