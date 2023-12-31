import { Typography } from '@mui/material';
import React from 'react';
import { Ihms } from '../../utils/getTime';

export const TimeSection = ({ time: { hours, minutes, seconds } }: { time: Ihms }) => {
    return (
        <Typography variant='h2' align='center'>
            {+hours ? `${hours}:` : ''}
            {minutes}:{seconds}
        </Typography>
    );
};
