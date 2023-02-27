import { useWeb3React } from '@web3-react/core';
import {metamaskConnector} from '@/lib/connector'
import React, { useEffect, useState } from 'react';
import Profile from '.';

const MetamaskProfile = () => {
    // Loading state
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // Web3 variables
    const {activate, deactivate, active, account, library, error} = useWeb3React();
    
    // Metamask connect
    const handleConnect = () => {
        if((window as any).ethereum === undefined){
            // Open metamask install page if not installed
            window.open(
                `https://metamask.app.link/dapp/${window.location.host}`,
                "_blank"
            );
            return;
        }
        
        // Connect with metamask connector
        activate(metamaskConnector);
        localStorage.setItem('chainType', 'ethereum');
    }

    const handleDisconnect = () => {
        deactivate();
        localStorage.removeItem('chainType')
    }

    // Keep connection
    useEffect(() => {
        const chainType = localStorage.getItem('chainType');
        
        if(chainType === 'ethereum'){
            activate(metamaskConnector);
        } else{
            deactivate();
        }
        setIsLoading(false)
    }, [activate])

    return <Profile
        active={active}
        account={account}
        handleDisconnect={handleDisconnect}
        handleConnect={handleConnect}
        library={library}
        isLoading={isLoading}
    />
}

export default MetamaskProfile;