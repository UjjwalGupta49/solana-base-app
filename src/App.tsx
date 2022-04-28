import React, { FC } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');

import './App.css';

import { Context } from './components/WalletConnection/WalletConnection';
import { BioElement } from './components/BioElement/BioElement';;
import {NavAppBar} from './components/Navbar/Navbar';

import twitterLogo from './assets/twitter-logo.svg';
import githubLogo from './assets/github-logo.svg';

const HANDLE = ['https://twitter.com/ujjwalgupta49', 'https://github.com/UjjwalGupta49/'];
const LOGO = [twitterLogo, githubLogo];

export const App: FC = () => {

    return (
        <div>
            <Context>
                <div className='navbar-position'>        {/* className='navbar-position' */}
                    <NavAppBar  />
                </div>
    
            </Context>
            <div className="base-app-text">
                <h1>Solana-Base-App 🔥 </h1> 
            </div>
            <div id="qr-solanaPay"><p>Apple</p></div>
            <div>
                <BioElement logo={LOGO} link={HANDLE}></BioElement>
            </div>
        </div>
    );
};



// Built By Ujjwal Gupta https://twitter.com/UjjwalG52261234
