const CHANGE_ERROR_STATUS = "CHANGE_ERROR_STATUS"

export type errorInitialType = typeof initialState

const initialState = {
    errorRangeValues: false,
}

type actionTypes = ReturnType<typeof changeErrorStatus>


export const errorReducer = (state: errorInitialType = initialState, action: actionTypes) => {
    switch (action.type) {
        case CHANGE_ERROR_STATUS:
            return {
                ...state,
                errorRangeValues: action.errorRange,
            }
        default:
            return state
    }
}

export const changeErrorStatus = (errorRange: boolean) => ({
    type: CHANGE_ERROR_STATUS,
    errorRange,
})