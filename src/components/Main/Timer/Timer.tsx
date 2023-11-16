import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { getActionTimer } from '../../../store/Actions';
import { storeTimer } from '../../../store/TimerStore';
import { getTime } from '../../../utils/getTime';
import { TimeSection } from '../../UI/TimeSection';
import { TimerButtons } from './TimerButtons';

export const Timer = () => {
    const { time, isRun } = storeTimer.useStore();
    const dispatch = storeTimer.useStoreDispatch();

    const timeMemo = React.useMemo(() => getTime(time), [time]);

    useEffect(() => {
        if (isRun) {
            const running = () => {
                const timeoutId = setTimeout(() => {
                    dispatch(getActionTimer('increase'));
                    running();
                }, 1000);
                dispatch(getActionTimer('updateTimeout', { timeoutId }));
            };
            running();
        }
    }, [isRun, dispatch]);

    return (
        <Container>
            <Container>
                <TimeSection time={timeMemo} />
            </Container>
            <TimerButtons />
        </Container>
    );
};
