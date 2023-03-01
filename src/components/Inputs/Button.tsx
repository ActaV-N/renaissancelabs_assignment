import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label?:string,
}

const Button:React.FC<Props> = ({
    label='버튼',
    onClick,
    ...props
}) => {
    return <button onClick={onClick} className='w-full' {...props}>
        <div className='w-full px-4 py-3 bg-black-200 rounded-10 text-white tracking-[-0.1px] leading-[1.3]'>
            {label}
        </div>
    </button>
}

export default Button