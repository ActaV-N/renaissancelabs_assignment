import React from 'react';

interface Props{
    src?:string | null,
    main?: boolean
}

const CollectionImage:React.FC<Props> = ({main = false, src}) => {
    return <div className={`${main && 'col-span-2 row-span-2'} aspect-square`}>
        {src ? 
        <img src={src} alt="collection Image" className='rounded-[10px]' />:
        <div className='rounded-[10px] bg-[#e4e4e4] w-full h-full'></div>}
    </div>
}

export default CollectionImage;