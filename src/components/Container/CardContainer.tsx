import React from "react";

interface Props{
    children:React.ReactNode
}

const CardContainer:React.FC<Props> = ({children}) => {
    return <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,auto))]'>
        {children}
    </div>
}

export default CardContainer