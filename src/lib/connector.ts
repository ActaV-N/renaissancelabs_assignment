import {InjectedConnector} from '@web3-react/injected-connector';

export const metamaskConnector = new InjectedConnector({
    supportedChainIds: [
        1, // Mainnet chain ID
        5, // Goerli testnet chain ID
    ]
});