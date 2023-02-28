import Header from '@/components/Layout/Header'
import '@/styles/globals.css'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider);
}

export default function App({ Component, pageProps }: AppProps) {
  return <Web3ReactProvider getLibrary={getLibrary}>
    <Header />
    <Component {...pageProps} />
  </Web3ReactProvider>
}
