

const CHANGE_MIN_RANGE_VALUE = "CHANGE_MIN_RANGE_VALUE"
const CHANGE_MAX_RANGE_VALUE = "CHANGE_MAX_RANGE_VALUE"
const CHANGE_CURRENT_VALUE = "CHANGE_CURRENT_VALUE"
const CHANGE_MODE = "CHANGE_MODE"


export type rangeValueType = {
    value: number
    text: string
}
export type rangeValuesType = {
    minValue: rangeValueType,
    maxValue: rangeValueType,
}
export type initStateType = {
    rangeValues: rangeValuesType,
    currentValue: number
    mode: boolean
}

export type changeMinRangeValueACType = {
    type: "CHANGE_MIN_RANGE_VALUE"
    value: number
}
export type changeMaxRangeValueACType = {
    type: "CHANGE_MAX_RANGE_VALUE"
    value: number
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
    ReturnType<typeof changeMinRangeValueAC>
    | ReturnType<typeof changeMaxRangeValueAC>
    | ReturnType<typeof changeCurrentValueAC>
    | ReturnType<typeof changeModeValueAC>


const initState = {
    rangeValues: {
        minValue: {
            value: 0,
            text: "Min Value",
        },
        maxValue: {
            value: 1,
            text: "Max Value",
        },
    },
    currentValue: 0,
    mode: false
}

export const clickerReducer = (state: initStateType = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case CHANGE_MIN_RANGE_VALUE:
            return {
                ...state,
                rangeValues: {
                    ...state.rangeValues,
                    minValue: {...state.rangeValues.minValue,value: action.value}},
            }
        case CHANGE_MAX_RANGE_VALUE:
            return {
                ...state,
                rangeValues: {
                    ...state.rangeValues,
                    maxValue: {...state.rangeValues.maxValue,value: action.value}},
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
                currentValue: state.rangeValues.minValue.value
            }
        default:
            return state
    }
}
export const changeMinRangeValueAC = (value: number): changeMinRangeValueACType =>
    ({type: CHANGE_MIN_RANGE_VALUE, value})
export const changeMaxRangeValueAC = (value: number): changeMaxRangeValueACType =>
    ({type: CHANGE_MAX_RANGE_VALUE, value})
export const changeCurrentValueAC = (value: number): changeCurrentValueACType => ({type: CHANGE_CURRENT_VALUE, value})
export const changeModeValueAC = (mode: boolean): changeModeValueACType => ({type: CHANGE_MODE, mode})