import {changeRangeValueAC} from "./clicker-reducer";

const CHANGE_MODE = "CHANGE_MODE"
const CHANGE_RANGE_VALUE = "CHANGE_RANGE_VALUE"

export type initialStateType = typeof initialState

const initialState = {
    mode: false
}

export type actionType =
    ReturnType<typeof changeModeValueAC>
    | ReturnType<typeof changeRangeValueAC>


export const modeReducer = (state: initialStateType = initialState, action: actionType) => {
    switch (action.type) {
        case CHANGE_MODE:
            return {
                mode: action.mode
            }
        case CHANGE_RANGE_VALUE:
            // hardcode value - change settings
            return {
                mode: true
            }
        default:
            return state
    }
}

export const changeModeValueAC = (mode: boolean) => ({type: CHANGE_MODE, mode})