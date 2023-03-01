import React from 'react';

interface Props{
    children: React.ReactNode
}

const Card:React.FC<Props> = ({children}) => {
    return <div className='rounded-10 border border-solid border-white-300'>
        {children}
    </div>
}

export default Card;