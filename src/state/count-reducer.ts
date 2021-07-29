const CHANGE_CURRENT_VALUE = "CHANGE_CURRENT_VALUE"

type actionType = ReturnType<typeof changeCurrentValue>

type initialStateType = typeof initialState

const initialState = {
    currentValue: 0,
}

export const countReducer = (state: initialStateType = initialState, action: actionType) => {
    switch (action.type) {
        case CHANGE_CURRENT_VALUE:
            return {
                ...state,
                currentValue: action.value
            }
        default:
            return state
    }

}


export const changeCurrentValue = (value: any ) => ({type: CHANGE_CURRENT_VALUE, value})