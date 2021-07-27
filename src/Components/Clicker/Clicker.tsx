import React from 'react';
import {TableSettings} from "./TableSettings/TableSettings";
import {TableClicker} from "./TableClicker/TableClicker";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../state/store";
import {Grid} from "@material-ui/core";
import s from "./Clicker.module.css"
import {ActionsType, initStateType} from "../../state/clicker-reducer";


export function Clicker() {
    const dispatch = useDispatch()
    const {rangeValues, currentValue, mode} = useSelector<StoreType, initStateType>(state => ({...state.counter}))

    let minValue = rangeValues.minValue.value
    let maxValue = rangeValues.maxValue.value
    let errors = false

    if (minValue >= maxValue || minValue < 0 || maxValue < 0) errors = true;

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

