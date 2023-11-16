import React, { useCallback } from 'react';
import { ButtonsWrapper } from '../../UI/ButtonsWrapper';
import { Button } from '@mui/material';
import { storeCooldown } from '../../../store/ColldownStore';
import { getActionCooldown } from '../../../store/Actions';

export const CooldownButtons = () => {
    const { isRun, time } = storeCooldown.useStore();
    const dispatch = storeCooldown.useStoreDispatch();

    const startPauseHandle = useCallback(() => {
        isRun ? dispatch(getActionCooldown('stop')) : dispatch(getActionCooldown('start'));
    }, [isRun, dispatch]);

    const resetHandle = useCallback(() => {
        dispatch(getActionCooldown('reset'));
    }, [dispatch]);
    return (
        <ButtonsWrapper>
            <Button variant='contained' disabled={time > 0 ? false : true} onClick={startPauseHandle}>
                {isRun ? 'Pause' : 'Start'}
            </Button>
            <Button variant='contained' color='error' onClick={resetHandle}>
                Reset
            </Button>
        </ButtonsWrapper>
    );
};
