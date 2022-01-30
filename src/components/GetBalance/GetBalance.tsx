import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletError, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useCallback, FC, useState, useRef } from 'react';
import './GetBalance.css';
import { Button } from '@mui/material';
import { WalletNotConnected } from './WalletNotConnected';

export const GetBalance: FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [checkAmount, setAmount] = useState(0);


    const checkBalance = useCallback(async () => {
        if (!publicKey) {
            throw new WalletNotConnectedError() && alert('Wallet not connected');
        }

        const walletBalance = await connection.getBalance(publicKey, 'confirmed');
        const walletBalanceSOL = (walletBalance / LAMPORTS_PER_SOL).toFixed(2);
        setAmount(walletBalanceSOL);
        console.log(walletBalanceSOL);
        console.log(publicKey);
        // balanceElement= <p>{walletBalanceSOL}</p>;
    }, [connection, publicKey]);

    return (
        <Button onClick={checkBalance} variant= "text" ><p>{checkAmount} SOL</p></Button>
    );
};

