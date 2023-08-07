import { Box, Button } from '@mui/material';
import React from 'react';
import { getActionTimer } from '../../../store/Action';
import { storeTimer } from '../../../store/TimerStore';

export const Buttons = () => {
    const { isStarted, isRun } = storeTimer.useStore();
    const dispatch = storeTimer.useStoreDispatch();

    const getStartButton = () => {
        if (!isStarted) return 'Start';
        if (isStarted && isRun) return 'Pause';
        if (isStarted && !isRun) return 'Continue';
        throw new Error('error start button');
    };

    const onStartButton = () => {
        isRun ? dispatch(getActionTimer('stop')) : dispatch(getActionTimer('start'));
    };

    const onResetButton = () => {
        dispatch(getActionTimer('reset'));
    };

    return (
        <Box justifyContent='center' display='flex' mt={6} gap={5}>
            <Button onClick={onStartButton} size='large'>
                {getStartButton()}
            </Button>
            <Button onClick={onResetButton} size='large'>
                Reset
            </Button>
        </Box>
    );
};
