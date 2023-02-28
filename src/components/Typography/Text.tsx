import React from 'react';
import { twMerge } from 'tailwind-merge';

// Font weight Enum
enum WeightEnum{
    light = "font-light", // lt
    normal = "font-normal", // bk
    medium = "font-medium", // md
    semibold = "font-semibold", // bd
    bold = "font-bold", // xbd
    extrabold = "font-extrabold", // blk
}

// Font slate Enum
enum SlateEnum{
    "slate-200"='text-slate-200',
    "slate-400"='text-slate-400',
    "slate-600"='text-slate-600',
    "slate-800"='text-slate-800',
    "slate-900"='text-slate-900',
    "black"='text-black'
}

// Font face Enum
enum FaceEnum{
    'airbnb'='',
    'urbanist'='font-[Urbanist]'
}

interface Props{
    tails?: string
    children: React.ReactNode,
    weight?: keyof typeof WeightEnum,
    slate?: keyof typeof SlateEnum,
    face?: keyof typeof FaceEnum
}

const Text:React.FC<Props> = ({
    tails,
    children,
    weight = 'normal',
    slate = 'black',
    face='airbnb'
}) => {
    return <div className={twMerge(FaceEnum[face], SlateEnum[slate], WeightEnum[weight], tails)}>
        {children}
    </div>
}

export default Text;