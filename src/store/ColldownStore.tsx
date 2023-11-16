import { InitStore } from './StoreCreator';

export interface IStoreCooldown {
    isDone: boolean;
    isStarted: boolean;
    isRun: boolean;
    timeStart: number;
    time: number;
    minutes: number;
    seconds: number;
    timeoutId: null | NodeJS.Timeout;
}

export interface IPayloadTimeObj {
    time?: number;
    minutes?: number;
    seconds?: number;
}
export type IActionCooldown = {
    type: 'start' | 'stop' | 'reset' | 'decrease' | 'updateTimeout' | 'set' | 'done';
    payload?: { timeoutId?: NodeJS.Timeout; time?: IPayloadTimeObj };
};

const initStore: IStoreCooldown = {
    time: 0,
    minutes: 0,
    seconds: 0,
    timeStart: 0,
    isStarted: false,
    isRun: false,
    isDone: false,
    timeoutId: null,
};

export const reducerCooldown = (state: IStoreCooldown, action: IActionCooldown): IStoreCooldown => {
    if (action.type === 'start') {
        const newState = {
            ...state,
            isRun: true,
            isStarted: true,
            timeStart: state.isStarted ? state.timeStart : state.time,
            isDone: false,
        };
        return newState;
    }

    if (action.type === 'stop') {
        if (state.timeoutId) clearTimeout(state.timeoutId);
        return { ...state, isRun: false, timeoutId: null };
    }

    if (action.type === 'reset') {
        if (state.timeoutId) clearTimeout(state.timeoutId);
        return initStore;
    }
    if (action.type === 'done') {
        return { ...state, isDone: true };
    }

    if (action.type === 'decrease') {
        const newTime = state.time - 1;

        return {
            ...state,
            time: newTime,
            isDone: newTime <= 0,
            isStarted: newTime > 0,
            seconds: newTime % 60,
            minutes: Math.floor((newTime / 60) % 60),
        };
    }

    if (action.type === 'updateTimeout') {
        if (!action?.payload?.timeoutId) throw new Error('payload timerId is not number');
        return { ...state, timeoutId: action.payload.timeoutId };
    }
    if (action.type === 'set') {
        // storeTime + (variant === 'minutes' ? diff * 60 : diff)
        if (!action?.payload?.time) throw new Error('payload time error');
        const timeObj = action.payload.time;
        if (typeof timeObj?.minutes === 'number') {
            return { ...state, minutes: timeObj.minutes, time: timeObj.minutes * 60, seconds: 0 };
        }
        if (typeof timeObj?.seconds === 'number') {
            return { ...state, seconds: timeObj.seconds, time: state.time + (timeObj.seconds - state.seconds) };
        }
        if (typeof timeObj?.time === 'number') return { ...state, time: timeObj.time };
        throw new Error('action set error');
    }

    return state;
};

class CooldownStore extends InitStore<IStoreCooldown, IActionCooldown> {
    store;
    reducer;
    constructor(initCooldownStore: typeof initStore, reducer: typeof reducerCooldown) {
        super();
        this.store = initCooldownStore;
        this.reducer = reducer;
    }
}

export const storeCooldown = new CooldownStore(initStore, reducerCooldown);
