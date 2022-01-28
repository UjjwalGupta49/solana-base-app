import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


export const AirdropSucessFull: FC = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Airdrop Sucessfull! 🎉
                </Alert>
            </Collapse>
        </Box>
    );
};

