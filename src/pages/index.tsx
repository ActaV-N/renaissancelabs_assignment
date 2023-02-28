import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MetamaskProfile from '@/components/Profile/MetamaskProfile'
import Tab, { TabItem } from '@/components/Layout/Header/Tab'

const inter = Inter({ subsets: ['latin'] })

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
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tab onChange={(s:any) => {console.log(s)}} defaultValue='all'>
        {Tabs.map(tabInfo => <TabItem value={tabInfo.value} key={tabInfo.value}>
          <div className='mr-1'>
            {tabInfo.name}
          </div>
          <div className='text-[#797a7e]'>
            {tabInfo.count}
          </div>
        </TabItem>)}
      </Tab>
      <main className='text-2xl'>
        
      </main>
    </>
  )
}
