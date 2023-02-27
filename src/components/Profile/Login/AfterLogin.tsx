import React from 'react';

interface Props{
    handleClose: React.MouseEventHandler,
    account: string | null | undefined
}

const AfterLogin:React.FC<Props> = ({handleClose, account}) => {
    return <div>
        <div className='border-b border-solid border-[rgba(0, 0, 0, 0.08)] pb-5'>
            <div className='w-[28px] h-[28px] mx-auto my-2.5'>
                <img src='/metamask.png' alt='metamask icon' className='w-full h-full ' />
            </div>
            <div className='w-2/3 overflow-hidden text-ellipsis mx-auto'>
                {account}
            </div>
        </div>
        <div className='py-5 border-b border-solid border-[rgba(0, 0, 0, 0.08)] '>
            <button className='text-left w-full'>
                Setting
            </button>
        </div>
        <div className='py-5 '>
            <button className='text-left w-full' type='submit' onClick={handleClose}>
                Disconnect
            </button>
        </div>
    </div>
}

export default AfterLogin;