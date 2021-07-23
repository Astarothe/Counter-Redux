import {combineReducers, createStore} from "redux";
import {clickerReducer} from "./clicker-reducer";

const rootReducer = combineReducers({
    clicker: clickerReducer
})

export const store = createStore(rootReducer)

export type StoreType = ReturnType<typeof rootReducer>