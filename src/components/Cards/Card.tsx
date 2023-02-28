import React from 'react';

interface Props{
    children: React.ReactNode
}

const Card:React.FC<Props> = ({children}) => {
    return <div className='rounded-[10px] border border-solid border-[#d2d3d4]'>
        {children}
    </div>
}

export default Card;