import {v1} from "uuid";

const CHANGE_RANGE_VALUE = "CHANGE_RANGE_VALUE"
const CHANGE_CURRENT_VALUE = "CHANGE_CURRENT_VALUE"
const CHANGE_MODE = "CHANGE_MODE"

export const minValueId = v1();
export const maxValueId = v1();

export type rangeValueType = {
    id: string
    value: number
    text: string
}
export type rangeValuesType = {
    [key: string]: rangeValueType,
}
export type initStateType = {
    rangeValues: rangeValuesType,
    currentValue: number
    mode: boolean
}

type changeRangeValueACType = {
    type: "CHANGE_RANGE_VALUE"
    value: number
    id: string
}
type changeCurrentValueACType = {
    type: "CHANGE_CURRENT_VALUE"
    value: number
}
type changeModeValueACType = {
    type: "CHANGE_MODE"
    mode: boolean
}

export type ActionsType =
    ReturnType<typeof changeRangeValueAC>
    | ReturnType<typeof changeCurrentValueAC>
    | ReturnType<typeof changeModeValueAC>

const initState = {
    rangeValues: {
        [minValueId]: {
            id: minValueId,
            value: 0,
            text: "Min Value"
        },
        [maxValueId]: {
            id: maxValueId,
            value: 1,
            text: "Max Value"
        },
    },
    currentValue: 0,
    mode: false
}

export const clickerReducer = (state: initStateType = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case CHANGE_RANGE_VALUE:
            return {
                ...state,
                rangeValues: {
                    ...state.rangeValues, [action.id]:
                        {...state.rangeValues[action.id], value: action.value}
                },
            }
        case CHANGE_CURRENT_VALUE:
            return {
                ...state,
                currentValue: action.value
            }
        case CHANGE_MODE:
            return {
                ...state,
                mode: action.mode,
                currentValue: state.rangeValues[minValueId].value
            }
        default:
            return state
    }
}

export const changeRangeValueAC = (value: number, id: string): changeRangeValueACType =>
    ({type: CHANGE_RANGE_VALUE, value, id})
export const changeCurrentValueAC = (value: number): changeCurrentValueACType => ({type: CHANGE_CURRENT_VALUE, value})
export const changeModeValueAC = (mode: boolean): changeModeValueACType => ({type: CHANGE_MODE, mode})