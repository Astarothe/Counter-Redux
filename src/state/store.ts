import {combineReducers, createStore} from "redux";
import {counterReducer} from "./clicker-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";
import {modeReducer} from "./mode-reducer";
import {countReducer} from "./count-reducer";
import {errorReducer} from "./errors-reducer";


const rootReducer = combineReducers({
    error: errorReducer,
    counter: counterReducer,
    mode: modeReducer,
    countValue: countReducer,
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        error: store.getState().error,
        counter: store.getState().counter,
        mode: store.getState().mode,
        countValue: store.getState().countValue,
    })
})
export type StoreType = ReturnType<typeof rootReducer>