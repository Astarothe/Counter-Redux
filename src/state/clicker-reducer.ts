import {v1} from "uuid";

const CHANGE_RANGE_VALUE = "CHANGE_RANGE_VALUE"

type changeRangeValueACType = {
    type: "CHANGE_RANGE_VALUE"
    value: number
    id: string
}
export type ActionsType = ReturnType<typeof changeRangeValueAC>

const initState = {
    rangeValues: [
        {
            value: 1,
            text: "Max Value",
            id: v1(),
            error: false
        },
        {
            value: 0,
            text: "Min Value",
            id: v1(),
            error: false
        },
    ],
}
export type initStateType = typeof initState

export const counterReducer = (state: initStateType = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case CHANGE_RANGE_VALUE:
            return {
                ...state,
                rangeValues: state.rangeValues.map(i => i.id === action.id ? {...i, value: action.value} : i),
            }
        default:
            return state
    }
}

export const changeRangeValueAC = (value: number, id: string): changeRangeValueACType =>
    ({type: CHANGE_RANGE_VALUE, value, id})
