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
    "black-600"='text-black-600',
    "black-500"='text-black-500',
    "black-400"='text-black-400',
    "black-300"='text-black-300',
    "black-200"="text-black-200",
    "black-100"='text-black-100',
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