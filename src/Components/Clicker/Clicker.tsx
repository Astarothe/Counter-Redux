import React, {useEffect} from 'react';
import {TableSettings} from "./TableSettings/TableSettings";
import {TableClicker} from "./TableClicker/TableClicker";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../state/store";
import {Grid} from "@material-ui/core";
import s from "./Clicker.module.css"
import {
    ActionsType, changeCurrentValueAC, changeModeValueAC, changeRangeValueAC,
    initStateType, maxValueId, minValueId
} from "../../state/clicker-reducer";


export function Clicker() {
    const dispatch = useDispatch()
    const {rangeValues, currentValue, mode} = useSelector<StoreType, initStateType>(state => ({...state.clicker}))

    let minValue = rangeValues[minValueId].value
    let maxValue = rangeValues[maxValueId].value
    let errors = false

    if (minValue >= maxValue || minValue < 0 || maxValue < 0) errors = true;

    useEffect(() => {
        let currentValueLocal = localStorage.getItem("currentValue");
        let maxValueLocal = localStorage.getItem("maxValue");
        let minValueLocal = localStorage.getItem("minValue");
        let modeLocal = localStorage.getItem("mode");

        if (modeLocal && maxValueLocal && minValueLocal && currentValueLocal && modeLocal) {
            dispatch(changeModeValueAC(JSON.parse(modeLocal)))
            dispatch(changeRangeValueAC(JSON.parse(maxValueLocal), maxValueId))
            dispatch(changeRangeValueAC(JSON.parse(minValueLocal), minValueId))
            dispatch(changeCurrentValueAC(JSON.parse(currentValueLocal)))
        }
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("currentValue", JSON.stringify(currentValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("minValue", JSON.stringify(minValue))
        localStorage.setItem("mode", JSON.stringify(mode))
    }, [currentValue, maxValue, minValue, mode])

    const onChange = (value: ActionsType) => {
        dispatch(value)
    }

    return (
        <Grid container className={s.container}>
            <Grid container className={s.wrapperItem}>
                <Grid item xs={8} sm={5} className={s.item}>
                    <TableSettings onChange={onChange}
                                   rangeValues={rangeValues}
                                   error={errors}
                                   changeMode={mode}/>
                </Grid>
                <Grid item xs={8} sm={5} className={s.item}>
                    <TableClicker onChange={onChange}
                                  currentValue={currentValue}
                                  changeMode={mode}
                                  minValue={minValue}
                                  maxValue={maxValue}
                                  error={errors}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

