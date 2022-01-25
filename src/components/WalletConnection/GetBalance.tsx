import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import * as web3 from '@solana/web3.js';
import React, { useCallback, FC } from 'react';

export const GetBalance : FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    const checkBalnace = useCallback( async() => {
        if (!publicKey) throw new WalletNotConnectedError();
            
        const walletBalance = await connection.getBalance(publicKey,"confirmed");
        const walletBalanceSOL = (walletBalance) / LAMPORTS_PER_SOL;
        console.log(walletBalanceSOL);
        console.log(publicKey);

    }, [connection, publicKey]);

    const Connected = useCallback(async () => {
        try {
            if (!publicKey) {
                console.log('Wallet not connected');
            } else {
                console.log('Wallet connected');
                console.log(publicKey);
            }
            console.log(publicKey);
        } catch (err) {
            console.log(err);
        }
    }, [publicKey]);

    return (<button onClick={checkBalnace}>Check Connection</button>);
};
