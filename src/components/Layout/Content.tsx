import React from 'react';

interface Props{
    children: React.ReactNode
}

const Content:React.FC<Props> = ({children}) => {
    return <div className='pt-[143px]'>
        {children}
    </div>
}

export default Content;