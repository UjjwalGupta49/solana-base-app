import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { FC, useCallback, useState } from 'react';
import { Button } from '@mui/material';
import { AirdropSucessFull } from './AirdropSucess';
import './Styles/Airdrop.css'

export const Airdrop: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [isAirdrop, setAirdrop] = useState(false);

    const airdropSol = useCallback(async () => {
        if (publicKey != null) {
            try {
                console.log('Air dropping... 2 SOL');
                const fromAirDropSignature = await connection.requestAirdrop(
                    publicKey,
                    2 * LAMPORTS_PER_SOL // max airdrop at max 2 SOL in one transaction
                );
                await connection.confirmTransaction(fromAirDropSignature);
                console.log('Drop successful!');
                setAirdrop(true);
            } catch (err) {
                console.log(err);
            }
        }
        else {
            console.log('⚠️ Wallet not connected');
        }


    }, [publicKey, connection]);

    return (
        <div>
            <div>
                <Button onClick={airdropSol}  variant="text" >
                    <p>Airdrop SOL</p>
                </Button>
            </div>
            <div className='notification-airdrop-sucess'>
                {isAirdrop ? <AirdropSucessFull /> : null}
            </div>
        </div>
    );
};
