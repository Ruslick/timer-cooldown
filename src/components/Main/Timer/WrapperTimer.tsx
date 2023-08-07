import { useReducer } from 'react';
import { storeTimer } from '../../../store/TimerStore';
import { Layout } from '../../Layout/PageLayout';
import { Timer } from './Timer';

export const WrapperTimer = ({hidden}: {hidden: boolean}) => {
    const {reducer, timerStore, StoreContext, StoreDispatch} = storeTimer


    const [state, dispatch] = useReducer(reducer, timerStore);

    return (
        <StoreContext.Provider value={state}>
            <StoreDispatch.Provider value={dispatch}>
                <Layout title='Timeout' hidden={hidden}>
                  <Timer />
                </Layout>
            </StoreDispatch.Provider>
        </StoreContext.Provider>
    );
};
