import { CircularProgress, Container } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { TimeSection } from '../../UI/TimeSection';
import { getTime } from '../../../utils/getTime';
import { Controller } from './Controller';
import { storeCooldown } from '../../../store/ColldownStore';

export const Cooldown = () => {
    const { time, timeStart, isRun, isDone, isStarted } = storeCooldown.useStore();
    const dispatch = storeCooldown.useStoreDispatch();

    const timeMemo = useMemo(() => getTime(time), [time])

    useEffect(() => {
        if (isRun) {
            const running = () => {
                const timeoutId = setTimeout(() => {
                    dispatch({ type: 'decrease' });
                    running();
                }, 1000);
                dispatch({ type: 'updateTimeout', payload: { timeoutId } });
            };
            running();
        }
    }, [isRun, dispatch]);

    useEffect(() => {
        if (isDone) {
            dispatch({ type: 'reset' });
            dispatch({ type: 'done' });
        }
    }, [isDone, dispatch]);

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
            }}
        >
            <TimeSection time={timeMemo} />
            <CircularProgress variant='determinate' value={isStarted? (100 * time / timeStart) - 100 : 0} />
            <Controller />
        </Container>
    );
};
