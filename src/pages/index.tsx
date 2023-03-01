import Head from 'next/head'
import { useState } from 'react'
import WidthSetter from '@/components/Layout/WidthSetter'
import Content from '@/components/Layout/Content'
import CardList from '@/components/Cards/CardList'
import HomeTab, { TabEnum } from '@/components/Layout/Header/Tabs/HomeTab'

export default function Home() {
  // Current Tab state
  const [currentTab, setCurrentTab] = useState<keyof typeof TabEnum>('all');

  const handleCurrentTab = (tabName: keyof typeof TabEnum) => {
    setCurrentTab(tabName)
  }

  return (
    <>
      <Head>
        <title>Renaissance Lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeTab handleCurrentTab={handleCurrentTab} />
      <main>
        <Content>
          <WidthSetter tails='py-20'>
            <CardList showType={currentTab} />
          </WidthSetter>
        </Content>
      </main>
    </>
  )
}
