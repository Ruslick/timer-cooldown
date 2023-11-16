import { Box, Switch, SxProps } from '@mui/material';
import React from 'react';
import { ToggleTitle } from '../UI/ToggleTitle';
import { TPages } from '../../app';

const styled: SxProps = {
    display: 'grid',
    position: 'fixed',
    gridTemplateColumns: '6fr 1fr 6fr',
    justifyItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 3,
};

export const HeaderLayout = ({ page, onPageChange }: { page: TPages; onPageChange: () => void }) => {
    return (
        <Box sx={styled}>
            <Box justifySelf='end'>
                <ToggleTitle variant='timer' page={page} />
            </Box>
            <Switch
                sx={{
                    '& .MuiSwitch-thumb': {
                        color: 'white',
                    },
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            '& + .MuiSwitch-track': {
                                backgroundColor: 'blue',
                                opacity: 0.2,
                            },
                        },
                    },
                    '& .MuiSwitch-track': {
                        backgroundColor: 'blue',
                        opacity: 0.2,
                    },
                }}
                value={page === 'timer' ? 'on' : 'off'}
                // ********************************************
                // ********************************************
                onChange={onPageChange}
            />
            <Box justifySelf='start'>
                <ToggleTitle variant='cooldown' page={page} />
            </Box>
        </Box>
    );
};
