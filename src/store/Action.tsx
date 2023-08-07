import { IActionTimer } from "./TimerStore";

export const getActionTimer = (actionType: IActionTimer["type"], payload?: IActionTimer["payload"]) => {
  if (payload) return {type: actionType, payload}
  return {type: actionType}
}