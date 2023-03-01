import Text from "@/components/Typography/Text"
import Tab, { TabItem } from "../Tab"

export enum TabEnum{
    'all',
    'collections',
    'singles'
}
  
const Tabs = [
    {
        value:'all',
        name:'All',
        count: '420k'
    },
    {
        value:'collections',
        name:'Collections',
        count: '220k'
    },
    {
        value:'singles',
        name:'Singles',
        count: '352k'
    },
]

interface Props{
    handleCurrentTab: Function
}

const HomeTab:React.FC<Props> = ({handleCurrentTab}) => {
    return <Tab onChange={handleCurrentTab} defaultValue='all'>
    {Tabs.map(tabInfo => <TabItem value={tabInfo.value} key={tabInfo.value}>
      <Text tails="mr-1" weight='semibold'>
        {tabInfo.name}
      </Text>
      <Text weight='semibold' slate='black-500'>
        {tabInfo.count}
      </Text>
    </TabItem>)}
  </Tab>
}

export default HomeTab