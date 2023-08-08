import React from 'react';
import { ButtonsWrapper } from '../../UI/ButtonsWrapper';
import { Button } from '@mui/material';
import { storeCooldown } from '../../../store/ColldownStore';

export const CooldownButtons = () => {
    const { isRun, time } = storeCooldown.useStore();
    const dispatch = storeCooldown.useStoreDispatch();

    const startPauseHandle = () => {
        isRun ? dispatch({ type: 'stop' }) : dispatch({ type: 'start' });
    };

    const resetHandle = () => {
        dispatch({ type: 'reset' });
    };
    return (
        <ButtonsWrapper>
            <Button variant="contained"  disabled={time > 0 ? false: true} onClick={startPauseHandle}>{isRun ? 'Pause' : 'Start'}</Button>
            <Button variant="contained" color='error' onClick={resetHandle}>Reset</Button>
        </ButtonsWrapper>
    );
};
