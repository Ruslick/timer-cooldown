import { IActionCooldown, IPayloadTimeObj } from './ColldownStore';
import { IActionTimer } from './TimerStore';

export const getActionTimer = (actionType: IActionTimer['type'], payload?: IActionTimer['payload']) => {
    if (payload) return { type: actionType, payload };
    return { type: actionType };
};

export const getActionCooldown = (actionType: IActionCooldown['type'], payload?: IActionCooldown['payload']) => {
    if (payload) return { type: actionType, payload };
    return { type: actionType };
};

export const getSetActionCooldown = (settetField: keyof IPayloadTimeObj, value: number): IActionCooldown => {
    const newTimeObj: IPayloadTimeObj = {};
    newTimeObj[settetField] = value;
    return { type: 'set', payload: { time: newTimeObj } };
};
