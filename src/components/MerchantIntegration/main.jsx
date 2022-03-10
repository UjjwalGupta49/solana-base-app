import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import React, { FC, useCallback, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey } from "@solana/web3.js";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import {
  encodeURL,
  createQR,
  findTransactionSignature,
  FindTransactionSignatureError,
  validateTransactionSignature,
} from "@solana/pay";


export const SolPayments = () => {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const MERCHANT_WALLET = new PublicKey(
    "EnYqiB4AsV9dcihwCdcPrnE6fXZLNxYxfrzVG4CT2vR8"
  );

  const makeUrl = useCallback(async () => {
    const label = "";
    const message = "";
    const memo = "";
    const amount = new BigNumber(1);
    const reference = new Keypair().publicKey;
    let paymentStatus;
    try {
        console.log("3. 💰 Create a payment request link \n");
        const url = encodeURL({
          recipient: MERCHANT_WALLET,
          amount,
          reference,
          label,
          message,
          memo,
        });
    
        console.log(url);
        // // encode URL in QR code
        const qrCode = createQR(url); // to make qr code for encoded payment link
        console.log(qrCode);
        const element = document.getElementById('qr-solanaPay');
        if (element !== null) {
        // // append QR code to the element
        qrCode.append(element);}


    //     paymentStatus = 'pending';
    //     console.log(`payment status: ${paymentStatus}`);
    //     let signatureInfo;
    //     const { signature } = await new Promise((resolve, reject) => {
    //       const interval = setInterval(async () => {
    //           console.count('Checking for transaction...');
    //           try {
    //               signatureInfo = await findTransactionSignature(connection, reference, undefined, 'confirmed');
    //               console.log('\n 🖌  Signature found: ', signatureInfo.signature);
    //               clearInterval(interval);
    //               resolve(signatureInfo);
    //           } catch (error: any) {
    //               if (!(error instanceof FindTransactionSignatureError)) {
    //                   console.error(error);
    //                   clearInterval(interval);
    //                   reject(error);
    //               }
    //           }
    //       }, 250);
    //   });

    //   paymentStatus = "confirmed";
    //   console.log(`payment status: ${paymentStatus}`);
    //   try {
    //     const amountInLamports = amount.times(LAMPORTS_PER_SOL).integerValue(BigNumber.ROUND_FLOOR);
  
    //     await validateTransactionSignature(
    //         connection,
    //         signature,
    //         MERCHANT_WALLET,
    //         amountInLamports,
    //         undefined,
    //         reference
    //     );
  
    //     // Update payment status
    //     paymentStatus = 'validated';
    //     console.log('✅ Payment validated');
    //     console.log('📦 Ship order to customer');
    // } catch (error) {
    //     console.error('❌ Payment failed', error);
    // }
  
    }catch(err) {
     console.log(err)   
    }



  }, []);



    


  

  return (
    <div>
      <div>
        <Button onClick={makeUrl} disabled={publicKey == null} variant="text">
          <p>Solana Pay</p>
        </Button>
      </div>
    </div>
  );
};
