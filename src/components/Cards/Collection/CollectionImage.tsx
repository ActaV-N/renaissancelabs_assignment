import Image from 'next/image';
import React from 'react';

interface Props{
    src?:string | null,
    main?: boolean
}

const CollectionImage:React.FC<Props> = ({main = false, src}) => {
    return <div className={`${main && 'col-span-2 row-span-2'} relative aspect-square`}>
        {src ? 
        <Image fill sizes={"160px"} src={src} alt="collection Image" className='rounded-10' />:
        <div className='rounded-10 bg-white-200 w-full h-full'></div>}
    </div>
}

export default CollectionImage;