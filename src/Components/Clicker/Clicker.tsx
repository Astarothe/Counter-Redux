import React, {useEffect} from 'react';
import {TableSettings} from "./TableSettings/TableSettings";
import {TableClicker} from "./TableClicker/TableClicker";
import {useDispatch, useSelector} from "react-redux";
import {
    ActionsType, changeCurrentValueAC, changeModeValueAC, changeRangeValueAC, initialStateType,
    maxValueId, minValueId
} from "../../state/clicker-reducer";
import {StoreType} from "../../state/store";
import {Grid} from "@material-ui/core";
import s from "./Clicker.module.css"


export function Clicker() {
    const dispatch = useDispatch()
    const {rangeValues, currentValue, changeMode} = useSelector<StoreType, initialStateType>
    (state => ({...state.clicker}))

    let minValue = rangeValues[minValueId].value
    let maxValue = rangeValues[maxValueId].value
    let errors = false

    if (minValue >= maxValue || minValue < 0 || maxValue < 0) errors = true;

    useEffect(() => {
        let valueLocal = localStorage.getItem("currentValueLocal");
        let maxValueLocal = localStorage.getItem("maxValueLocal");
        let startValueLocal = localStorage.getItem("startValueLocal");
        let changeModeLocal = localStorage.getItem("changeModeLocal");

        changeModeLocal && dispatch(changeModeValueAC(changeModeLocal && JSON.parse(changeModeLocal)))
        maxValueLocal && dispatch(changeRangeValueAC(JSON.parse(maxValueLocal), maxValueId, changeModeLocal && JSON.parse(changeModeLocal)))
        startValueLocal && dispatch(changeRangeValueAC(JSON.parse(startValueLocal), minValueId, changeModeLocal && JSON.parse(changeModeLocal)))
        valueLocal && dispatch(changeCurrentValueAC(JSON.parse(valueLocal)))
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("currentValueLocal", JSON.stringify(currentValue))
        localStorage.setItem("maxValueLocal", JSON.stringify(maxValue))
        localStorage.setItem("startValueLocal", JSON.stringify(minValue))
        localStorage.setItem("changeModeLocal", JSON.stringify(changeMode))
    }, [currentValue, maxValue, minValue, changeMode])

    const onChange = (value: ActionsType) => {
        dispatch(value)
    }

    return (
        <Grid container className={s.containerClicker}>
            <Grid container className={s.containerBlock}>
                <Grid item xs={8} sm={5} className={s.gridItem}>
                    <TableSettings onChange={onChange} rangeValues={rangeValues} error={errors}
                                   changeMode={changeMode}/>
                </Grid>
                <Grid item xs={8} sm={5} className={s.gridItem}>
                    <TableClicker onChange={onChange} currentValue={currentValue} changeMode={changeMode}
                                  minValue={minValue} maxValue={maxValue}
                                  error={errors}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

