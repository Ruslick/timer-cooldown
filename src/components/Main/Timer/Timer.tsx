import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { getActionTimer } from '../../../store/Action';
import { storeTimer } from '../../../store/TimerStore';
import { getTime } from '../../../utils/getTime';
import { Buttons } from './Buttons';
import { TimeSection } from '../../UI/TimeSection';

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
    }, [isRun, dispatch]);

    return (
        <Container>
            <Container>
                <TimeSection time={getTime(time)} />
            </Container>
            <Buttons />
        </Container>
    );
};
