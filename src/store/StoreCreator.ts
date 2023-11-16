import React, { useContext } from 'react';

export class InitStore<TStore, IAction> {
    StoreContext = React.createContext<TStore | null>(null);
    StoreDispatch = React.createContext<((action: IAction) => void) | null>(null);
    useStoreDispatch = () => {
        const context = useContext(this.StoreDispatch);
        if (context === null) throw new Error('storeDispatch is not init');
        return context;
    };
    useStore = () => {
        const context = useContext(this.StoreContext);
        if (context === null) throw new Error('store is not init');
        return context;
    };
}
