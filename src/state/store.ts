import {combineReducers, createStore} from "redux";
import {clickerReducer} from "./clicker-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: clickerReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})
export type StoreType = ReturnType<typeof rootReducer>