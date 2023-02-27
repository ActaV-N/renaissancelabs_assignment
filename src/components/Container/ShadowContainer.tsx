import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props{
    tails?:string,
    children: React.ReactNode
}

const ShadowContainer:React.FC<Props> = ({tails, children}) => {
    return <div className={twMerge('bg-white rounded-[8px] shadow-basic p-6', tails)}>
        {children}
    </div>
}

export default ShadowContainer;