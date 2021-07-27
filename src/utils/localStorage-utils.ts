import {StoreType} from "../state/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if(serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState)
    }catch {
        return undefined
    }
}

export const saveState = (state: StoreType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState)
    } catch {
        return undefined
    }
}