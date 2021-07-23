import React, {useEffect} from 'react';
import {TableSettings} from "./TableSettings/TableSettings";
import {TableClicker} from "./TableClicker/TableClicker";
import {useDispatch, useSelector} from "react-redux";
import {
    ActionsType,
    changeCurrentValueAC, changeModeValueAC,
    changeRangeValueAC,
    maxValueId,
    minValueId,
    rangeValuesType
} from "../../state/clicker-reducer";
import {StoreType} from "../../state/store";

type all = rangeValuesType | any

export function Clicker() {
    const dispatch = useDispatch()
    const [rangeValues, currentValue, changeMode] = useSelector<StoreType, Array<all>>(state => {
        return [state.clicker.rangeValues, state.clicker.currentValue, state.clicker.changeMode]
    })
    let errors = false
    if (rangeValues[minValueId].value >= rangeValues[maxValueId].value
        || rangeValues[minValueId].value < 0
        || rangeValues[maxValueId].value < 0) {
        errors = true;
    }

    useEffect(() => {
        let counterValue = localStorage.getItem("CounterValue");
        let counterMaxValue = localStorage.getItem("CounterMaxValue");
        let counterStartValue = localStorage.getItem("CounterStartValue");
        let changedMode = localStorage.getItem("ChangedMode");

        changedMode && dispatch(changeModeValueAC(changedMode && JSON.parse(changedMode)))
        counterMaxValue && dispatch(changeRangeValueAC(JSON.parse(counterMaxValue), maxValueId, changedMode && JSON.parse(changedMode)))
        counterStartValue && dispatch(changeRangeValueAC(JSON.parse(counterStartValue), minValueId, changedMode && JSON.parse(changedMode)))
        counterValue && dispatch(changeCurrentValueAC(JSON.parse(counterValue)))
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("CounterValue", JSON.stringify(currentValue))
        localStorage.setItem("CounterMaxValue", JSON.stringify(rangeValues[maxValueId].value))
        localStorage.setItem("CounterStartValue", JSON.stringify(rangeValues[minValueId].value))
        localStorage.setItem("ChangedMode", JSON.stringify(changeMode))
    }, [currentValue, rangeValues, changeMode])

    const onChange = (value: ActionsType) => {
        dispatch(value)
    }

    return (
        <div>
            <div>
                <TableSettings onChange={onChange} rangeValues={rangeValues} error={errors} changeMode={changeMode}/>
            </div>
            <div>
                <TableClicker onChange={onChange} currentValue={currentValue} changeMode={changeMode}
                              minValue={rangeValues[minValueId].value} maxValue={rangeValues[maxValueId].value}/>
            </div>
        </div>
    );
}

