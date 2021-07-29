import {
    changeCurrentValueAC,
    changeRangeValueAC,
    counterReducer,
    initStateType, maxValueId, minValueId
} from "./clicker-reducer";

let startState: initStateType;
beforeEach(() => {
    startState = {
        rangeValues: {
            [minValueId]: {
                id: minValueId,
                value: 0,
            },
            [maxValueId]: {
                id: minValueId,
                value: 4,
            }
        },
        currentValue: 0,
        mode: false
    }
})

test("correct max value should be changed", () => {
    const endState = counterReducer(startState, changeRangeValueAC(5, maxValueId, true))

    expect(endState.rangeValues.minValue.value).toBe(0)
    expect(endState.rangeValues.maxValue.value).toBe(5)
    expect(endState.currentValue).toBe(0)
    expect(endState.mode).toBe(true)

})

test("correct min value should be changed", () => {
    const endState = counterReducer(startState, changeRangeValueAC(3, minValueId, true))

    expect(endState.rangeValues.minValue.value).toBe(3)
    expect(endState.rangeValues.maxValue.value).toBe(4)
    expect(endState.currentValue).toBe(0)
    expect(endState.mode).toBe(true)
})

test("correct current value should be changed", () => {
    const endState = counterReducer(startState, changeCurrentValueAC(1))

    expect(endState.rangeValues.minValue.value).toBe(0)
    expect(endState.rangeValues.maxValue.value).toBe(4)
    expect(endState.currentValue).toBe(1)
})