import Head from 'next/head'
import Tab, { TabItem } from '@/components/Layout/Header/Tab'
import { useState } from 'react'
import WidthSetter from '@/components/Container/WidthSetter'
import Content from '@/components/Layout/Content'
import CollectionCard from '@/components/Cards/Collection/CollectionCard'
import { collections } from '@/data/mockData'
import Text from '@/components/Typography/Text'

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

export default function Home() {
  const [currentTab, setCurrentTab] = useState('all');

  const handleCurrentTab = (tabName: string) => {
    setCurrentTab(tabName)
  }

  return (
    <>
      <Head>
        <title>Renaissance Lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Tab onChange={handleCurrentTab} defaultValue='all'>
        {Tabs.map(tabInfo => <TabItem value={tabInfo.value} key={tabInfo.value}>
          <Text tails="mr-1" weight='semibold'>
            {tabInfo.name}
          </Text>
          <Text weight='semibold' slate='slate-400'>
            {tabInfo.count}
          </Text>
        </TabItem>)}
      </Tab>
      <main>
        <Content>
          <WidthSetter tails='py-20'>
            <CollectionCard collection={collections[0]} />
            <CollectionCard collection={collections[1]} />
          </WidthSetter>
        </Content>
      </main>
    </>
  )
}
