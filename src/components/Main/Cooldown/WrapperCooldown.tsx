import { useReducer } from 'react';
import { Layout } from '../../Layout/PageLayout';
import { Cooldown } from './Cooldown';

export const WrapperCooldown = ({hidden}: {hidden: boolean}) => {
    // const {reducer, timerStore, StoreContext, StoreDispatch} = storeTimer
    // const [state, dispatch] = useReducer(reducer, timerStore);

    return (
        // <StoreContext.Provider value={state}>
            // { <StoreDispatch.Provider value={dispatch}> }
                <Layout title='Cooldown' hidden={hidden}>
                    <Cooldown />
                </Layout>
            // </StoreDispatch.Provider>
        // </StoreContext.Provider>
    );
};
