import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props{
    children: React.ReactNode,
    tails?:string
}

const WidthSetter:React.FC<Props> = ({children, tails}) => {
    return <div className={twMerge('px-5 md:px-[8vw]', tails)}>
        {children}
    </div>
}

export default WidthSetter