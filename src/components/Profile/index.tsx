import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import FadeActionTooltip from '../Utils/FadeActionTooltip';
import ShadowContainer from '../Container/ShadowContainer';
import AfterLogin from './Login/AfterLogin';
import BeforeLogin from './Login/BeforeLogin';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

interface Props{
    active: boolean,
    account: string | null | undefined,
    handleDisconnect:Function,
    handleConnect: Function,
    library: any,
    isLoading: boolean
}

const Profile:React.FC<Props> = ({
    active,
    account,
    handleDisconnect,
    handleConnect,
    isLoading,
    library}) => {
    // balance state
    const [balance, setBalance] = useState(0);

    // State of open for wallet connect tooltip
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Get balance if wallet connected
    useEffect(() => {
        if(library){
            const getBalance= async () => {
                const result = await library.getBalance(account);
                setBalance(result/1e18)
            }

            getBalance();
        }
    }, [library])

    // Toggle open state of connect tooltip
    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen);
    }

    // Close connect tooltip
    const handleClose = () => {
        setIsOpen(false);
    }

    if(isLoading) return <div>Loading...</div>

    return <div className='relative w-fit ml-auto'>
        <div className='text-[#7E7F7F] flex items-center justify-center pointer w-fit' onClick={toggleOpen}>
            {active && 
            <div className='flex items-center mr-5'>
                <div className='w-[25px] h-[25px] mx-2 bg-[#ebedfc] rounded-full flex items-center justify-center'>
                    <img className='w-3/4 h-3/4' src='/ethereum.png' alt='ether' />
                </div>
                <div className='text-[#444444]'>
                    {balance} ETH
                </div>
            </div>}
            <div className='w-[40px] h-[40px] rounded-full bg-[#d2d3d4] text-[#545455] flex items-center justify-center'>
                {active && account ?
                <Jazzicon diameter={40} seed={jsNumberForAddress(account)} />:
                <FaUser/>}
                
            </div>
            <div className='ml-2 text-xl'>
                <FiChevronDown/>
            </div>
        </div>
        <FadeActionTooltip handleSubmit={active ? handleDisconnect : handleConnect} open={isOpen} tails={`absolute bottom-0 right-0 translate-y-[100%] pt-[15px] w-[max-content]`}>
            <ShadowContainer tails="w-[250px]">
                    {active ? 
                    <AfterLogin account={account} handleClose={handleClose} />:
                    <BeforeLogin handleClose={handleClose} />}
            </ShadowContainer>
        </FadeActionTooltip>
    </div>
}

export default Profile