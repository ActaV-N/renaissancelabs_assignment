import WidthSetter from '@/components/Container/WidthSetter';
import gsap from 'gsap';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import {createPortal} from 'react-dom';

// Tab Context
const TabContext = createContext<[string, Function]>(['', () => {}]);

// Tab Container Component
interface Props{
    children: React.ReactNode,
    onChange:Function,
    defaultValue?: string
}

const Tab:React.FC<Props> = ({children, onChange, defaultValue=''}) => {
    // Tab state
    const [tab, setTab] = useState(defaultValue);

    // Header element state
    const [headerEl, setHeaderEl] = useState<Element | null>(null);

    useEffect(() => {
        setHeaderEl(document.getElementById('header') as Element);
    }, [])

    // handleTabChange
    // Scroll to top when tab changed
    const isBrowser = () => typeof window !== 'undefined';
    const handleTabChange = (tabValue: string) => {
        setTab(tabValue);
        onChange(tabValue);
        
        // Scroll to top
        if(!isBrowser()) return;
        window.scrollTo({top:0});
    }

    // If There is no headerEl, return nothing.
    if(!headerEl) return <></>;

    return createPortal(
    <TabContext.Provider value={[tab, handleTabChange]}>
        <div className='h-[67px]'>
            <div className='h-full'>
                <WidthSetter tails='h-full flex'>
                    {children}
                </WidthSetter>
            </div>
        </div>
    </TabContext.Provider>
    , headerEl)
}

// Tab Item Component
interface TabItemProps{
    children: React.ReactNode,
    value: string,
}

export const TabItem:React.FC<TabItemProps> = ({children, value}) => {
    // Ref for animating
    const buttonRef = useRef(null);

    // Context for changing tab state
    const [currentTab, setTab] = useContext(TabContext);

    const handleTabChange = () => {
        setTab(value);
    }

    // Animate active bar
    useEffect(() => {
        gsap.context(() => {
            if(currentTab === value){
                gsap.to('.active-bar', {
                    scaleX:1,
                    duration:0.2,
                    ease:'power1.out'
                })
            } else{
                gsap.to('.active-bar', {
                    scaleX: 0,
                    duration:0.2,
                    ease:'power1.inOut'
                })
            }
        }, buttonRef)
    }, [currentTab, value])

    return <button ref={buttonRef} className='relative h-full flex items-center justify-center px-2 mr-5 md:mr-[4.5vw] last:mr-0' onClick={handleTabChange}>
        {children}
        <div className='active-bar w-full h-[2px] absolute bottom-[-1px] bg-black origin-center scale-x-0'></div>
    </button>
}

export default Tab;