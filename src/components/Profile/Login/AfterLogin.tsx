import Text from '@/components/Typography/Text';
import React from 'react';

interface Props{
    handleClose: React.MouseEventHandler,
    account: string | null | undefined
}

const AfterLogin:React.FC<Props> = ({handleClose, account}) => {
    return <div>
        <div className='border-b border-solid border-slate-50 pb-5'>
            <div className='w-[28px] h-[28px] mx-auto my-2.5'>
                <img src='/metamask.png' alt='metamask icon' className='w-full h-full ' />
            </div>
            <Text tails='w-2/3 overflow-hidden text-ellipsis mx-auto' weight='semibold'>
                {account}
            </Text>
        </div>
        <div className='py-5 border-b border-solid border-slate-50 '>
            <button className='text-left w-full'>
                <Text weight='medium'>
                    Setting
                </Text>
            </button>
        </div>
        <div className='py-5 '>
            <button className='text-left w-full' type='submit' onClick={handleClose}>
                <Text weight='medium'>
                    Disconnect
                </Text>
            </button>
        </div>
    </div>
}

export default AfterLogin;