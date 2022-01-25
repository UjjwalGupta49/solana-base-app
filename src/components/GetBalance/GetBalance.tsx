import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletError, WalletNotConnectedError, NotConnected } from '@solana/wallet-adapter-base';
import { Keypair, SystemProgram, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useCallback, FC, useState, useRef } from 'react';
import './GetBalance.css';
import { Button } from '@mui/material';
import { WalletNotConnected } from './WalletNotConnected';

export const GetBalance: FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [checkAmount, setAmount] = useState(0);

    // const ErrorComponent = () => {
    //     return (
    //         <div>
    //             <WalletNotConnected />
    //             {new WalletNotConnectedError()}
    //         </div>
    //     );
    // };

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
        <div>
            <div className='align-button'>
                <Button onClick={checkBalance} variant="contained" size='large'>
                    Wallet Balance
                </Button>
                {<p>Balance: {checkAmount} SOL</p>}
            </div>
        </div>
    );
};
// how to read value of walletBalanceSOL outside of the function?
