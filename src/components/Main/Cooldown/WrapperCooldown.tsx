import { useReducer } from 'react';
import { Layout } from '../../Layout/PageLayout';
import { Cooldown } from './Cooldown';
import { storeCooldown } from '../../../store/ColldownStore';

export const WrapperCooldown = ({ hidden }: { hidden: boolean }) => {
    console.log('cooldown render');
    const { reducer, StoreDispatch, StoreContext, store } = storeCooldown;
    const [state, dispatch] = useReducer(reducer, store);

    return (
        <StoreContext.Provider value={state}>
            <StoreDispatch.Provider value={dispatch}>
                <Layout title='Cooldown' hidden={hidden}>
                    <Cooldown />
                </Layout>
            </StoreDispatch.Provider>
        </StoreContext.Provider>
    );
};
