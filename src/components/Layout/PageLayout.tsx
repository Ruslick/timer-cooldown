import { Box, Typography } from '@mui/material';
import React from 'react';

interface IPageLayout {
    children: React.ReactNode;
    title: string;
    hidden: boolean;
}

export const Layout = ({ children, title, hidden }: IPageLayout) => {
    return (
        <Box
            sx={{
                height: `100vh`,
                display: hidden ? 'none' : 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant='h1' align='center'>
                {title}
            </Typography>
            {children}
        </Box>
    );
};
