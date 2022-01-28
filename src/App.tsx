import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');

import './App.css';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';

import { BioElement } from './components/BioElement/BioElement';
import { GetBalance } from './components/GetBalance/GetBalance';
import { Airdrop } from './components/Airdrop/Airdrop';
import { NavAppBar } from './components/Navbar/Navbar';

import twitterLogo from './assets/twitter-logo.svg';
import githubLogo from './assets/github-logo.svg';

const HANDLE = ['https://twitter.com/UjjwalG52261234', 'https://github.com/UjjwalGupta49/'];
const LOGO = [twitterLogo, githubLogo];

export const App: FC = () => {
    const Context: FC<{ children: ReactNode }> = ({ children }) => {
        // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
        const network = WalletAdapterNetwork.Devnet;

        // You can also provide a custom RPC endpoint.
        const endpoint = useMemo(() => clusterApiUrl(network), [network]);

        // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
        // Only the wallets you configure here will be compiled into your application, and only the dependencies
        // of wallets that your users connect to will be loaded.
        const wallets = useMemo(
            () => [
                new PhantomWalletAdapter(),
                new SlopeWalletAdapter(),
                new SolflareWalletAdapter(),
                new TorusWalletAdapter(),
                new LedgerWalletAdapter(),
                new SolletWalletAdapter({ network }),
                new SolletExtensionWalletAdapter({ network }),
            ],
            [network]
        );

        return (
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>{children}</WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        );
    };

    const Content: FC = () => {
        return <WalletMultiButton />;
    };

    return (
        <div>
                <div>
                    <NavAppBar />
                </div>
            <Context>
                <div className="align-button-top-right">
                    <Content />
                </div>
                <div>
                    <GetBalance />
                </div>
                <div>
                    <Airdrop />
                </div>

            </Context>
            <div className='base-app-text'>
                <h1>Solana-Base-App 🔥 </h1>
            </div>
            <div>
                <BioElement logo={LOGO} link={HANDLE}></BioElement>
            </div>
        </div>
    );
};

// wallet is connected or not to be given as props to GetBalance component and then render and pefrom function based on that.
// wallet connectio to be defined by useWallet()
