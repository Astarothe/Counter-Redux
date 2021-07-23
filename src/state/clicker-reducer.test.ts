import {
    changeCurrentValueAC,
    changeRangeValueAC,
    clickerReducer,
    initialStateType, maxValueId, minValueId
} from "./clicker-reducer";

let startState: initialStateType;
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
        changeMode: false
    }
})

test("correct max value should be changed", () => {
    const endState = clickerReducer(startState, changeRangeValueAC(5, maxValueId, true))

    expect(endState.rangeValues.minValue.value).toBe(0)
    expect(endState.rangeValues.maxValue.value).toBe(5)
    expect(endState.currentValue).toBe(0)
    expect(endState.changeMode).toBe(true)

})

test("correct min value should be changed", () => {
    const endState = clickerReducer(startState, changeRangeValueAC(3, minValueId, true))

    expect(endState.rangeValues.minValue.value).toBe(3)
    expect(endState.rangeValues.maxValue.value).toBe(4)
    expect(endState.currentValue).toBe(0)
    expect(endState.changeMode).toBe(true)
})

test("correct current value should be changed", () => {
    const endState = clickerReducer(startState, changeCurrentValueAC(1))

    expect(endState.rangeValues.minValue.value).toBe(0)
    expect(endState.rangeValues.maxValue.value).toBe(4)
    expect(endState.currentValue).toBe(1)
})