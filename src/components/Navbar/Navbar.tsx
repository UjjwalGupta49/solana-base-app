import React, { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Airdrop } from '../Airdrop/Airdrop';
import { GetBalance } from '../GetBalance/GetBalance';
import { SolPayments  } from '../MerchantIntegration/main'
import { SendTransaction } from '../Transaction/transaction'
import { Content } from '../WalletConnection/WalletConnection';
import './Navbar.css';

export const NavAppBar: FC = (props) => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            🔥
                        </Typography>
                        <Airdrop />
                        <GetBalance />
                        <SendTransaction />
                        <SolPayments />
                        <div className="align-button-top-right">
                            <Content />
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};
