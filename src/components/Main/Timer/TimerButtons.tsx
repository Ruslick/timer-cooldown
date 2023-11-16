import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import { getActionTimer } from '../../../store/Actions';
import { storeTimer } from '../../../store/TimerStore';
import { ButtonsWrapper } from '../../UI/ButtonsWrapper';

export const TimerButtons = () => {
    const { isStarted, isRun } = storeTimer.useStore();
    const dispatch = storeTimer.useStoreDispatch();

    const getStartButton = useMemo(() => {
        if (!isStarted) return 'Start';
        if (isStarted && isRun) return 'Pause';
        if (isStarted && !isRun) return 'Continue';
        throw new Error('error start button');
    }, [isStarted, isRun]);

    const onStartButton = React.useCallback(() => {
        isRun ? dispatch(getActionTimer('stop')) : dispatch(getActionTimer('start'));
    }, [isRun, dispatch]);

    const onResetButton = React.useCallback(() => {
        dispatch(getActionTimer('reset'));
    }, [dispatch]);

    return (
        <ButtonsWrapper>
            <Button variant='contained' onClick={onStartButton} size='large'>
                {getStartButton}
            </Button>
            <Button variant='contained' color='error' onClick={onResetButton} size='large'>
                Reset
            </Button>
        </ButtonsWrapper>
    );
};
