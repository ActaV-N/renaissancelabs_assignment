import Text from "@/components/Typography/Text"
import { CollectionI } from "@/data/interfaces"
import Price from "../Price"

interface Props{
    name: string,
    price: number,
    marketCap: number
}

const CollectionContent:React.FC<Props> = ({name, price, marketCap}) => {
    return <div className='px-3 py-1'>
        <Text tails='py-3' face='urbanist' weight='bold' slate='slate-900'>
            {name}
        </Text>
        <div className='flex items-center mb-3'>
            <Price label="Price" value={price} />
            <Price label="Market Cap" value={marketCap} />
        </div>
    </div>
}

export default CollectionContent