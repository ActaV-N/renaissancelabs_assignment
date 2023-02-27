import { useWeb3React } from '@web3-react/core';
import {metamaskConnector} from '@/lib/connector'
import React from 'react';
import Profile from '.';

const MetamaskProfile = () => {
    // Web3 variables
    const {activate, deactivate, active, account} = useWeb3React();

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
    }

    return <Profile
        active={active}
        account={account}
        deactivate={deactivate}
        handleConnect={handleConnect}
    />
}

export default MetamaskProfile;