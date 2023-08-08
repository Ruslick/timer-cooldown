import { Container } from '@mui/material';
import { useEffect } from 'react';
import { getActionTimer } from '../../../store/Action';
import { storeTimer } from '../../../store/TimerStore';
import { getTime } from '../../../utils/getTime';
import { TimeSection } from '../../UI/TimeSection';
import { TimerButtons } from './TimerButtons';

export const Timer = () => {
    const { time, isRun } = storeTimer.useStore();
    const dispatch = storeTimer.useStoreDispatch();

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
    }, [isRun]);

    return (
        <Container>
            <Container>
                <TimeSection time={getTime(time)} />
            </Container>
            <TimerButtons />
        </Container>
    );
};
