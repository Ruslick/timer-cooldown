import { InitStore } from './StoreCreator';

// types
export interface IStoreTimer {
    time: number;
    isRun: boolean;
    isStarted: boolean;
    timeoutId: null | NodeJS.Timeout;
}

export type IActionTimer = {
    type: 'start' | 'stop' | 'reset' | 'increase' | 'updateTimeout';
    payload?: { timeoutId: NodeJS.Timeout };
};


const store: IStoreTimer = {
    time: 0,
    isRun: false,
    isStarted: false,
    timeoutId: null,
};

const reducerTimer = (state: IStoreTimer, action: IActionTimer): IStoreTimer => {
    if (action.type === 'start') {
        return { ...state, isRun: true, isStarted: true };
    }

    if (action.type === 'stop') {
        if (state.timeoutId) clearTimeout(state.timeoutId);
        return { ...state, isRun: false, timeoutId: null };
    }

    if (action.type === 'reset') {
        if (state.timeoutId) clearTimeout(state.timeoutId);
        return store;
    }

    if (action.type === 'increase') {
        return { ...state, time: state.time + 1 };
    }
    if (action.type === 'updateTimeout') {
        if (!action?.payload?.timeoutId) throw new Error('payload timerId is not number');
        return { ...state, timeoutId: action.payload?.timeoutId };
    }
    return state;
};


class TimerStore extends InitStore<IStoreTimer, IActionTimer> {
    timerStore
    reducer;
    constructor(timerStore: typeof store, reducer: typeof reducerTimer) {
        super();
        this.timerStore = timerStore;
        this.reducer = reducer;
    }
}


export const storeTimer = new TimerStore(store, reducerTimer)
