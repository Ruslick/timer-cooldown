import { Container } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { TimeSection } from '../../UI/TimeSection';
import { getTime } from '../../../utils/getTime';
import { Controller } from './Controller';
import { storeCooldown } from '../../../store/ColldownStore';
import { getActionCooldown } from '../../../store/Actions';
import { CircularProgressWithLabel } from '../../UI/CircularProgressWithLabel';

export const Cooldown = () => {
    const { time, timeStart, isRun, isDone, isStarted } = storeCooldown.useStore();
    const dispatch = storeCooldown.useStoreDispatch();
    const getProgress = useMemo(() => {
        return Math.abs(isStarted ? (100 * time) / timeStart - 100 : isDone ? 100 : 0);
    }, [isStarted, timeStart, isDone, time]);

    const timeMemo = useMemo(() => getTime(time), [time]);
    useEffect(() => {
        if (isRun) {
            const running = () => {
                const timeoutId = setTimeout(() => {
                    dispatch(getActionCooldown('decrease'));
                    running();
                }, 1000);
                dispatch(getActionCooldown('updateTimeout', { timeoutId }));
            };
            running();
        }
    }, [isRun, dispatch]);

    useEffect(() => {
        if (isDone) {
            dispatch(getActionCooldown('reset'));
            dispatch(getActionCooldown('done'));
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
            <CircularProgressWithLabel variant='determinate' value={getProgress} />
            <TimeSection time={timeMemo} />
            <Controller />
        </Container>
    );
};
