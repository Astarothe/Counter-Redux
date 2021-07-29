import React, {useEffect} from 'react';
import {Button} from "@material-ui/core";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import RefreshIcon from '@material-ui/icons/Refresh';
import s from "./DisplayCounter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../state/store";
import {changeCurrentValue} from "../../../state/count-reducer";

export const DisplayCounter: React.FC = React.memo(() => {
    const increment = 1
    const dispatch = useDispatch()

    let [maxValue, minValue] = useSelector<StoreType, number[]>
    (state => state.counter.rangeValues.map(i => i.value))

    const error = useSelector<StoreType, boolean>
    (state => state.error.errorRangeValues)

    const currentValue = useSelector<StoreType, number>
    (state => state.countValue.currentValue)

    const mode = useSelector<StoreType, boolean>
    (state => state.mode.mode)

    let currentText: number | string = currentValue
    let textStyle = s.text

    if (mode && error) {
        currentText = "incorrect value"
        textStyle = s.error
    } else if (mode) {
        currentText = "enter values and press 'set'"
        textStyle = s.set
    } else if (maxValue === currentValue && !mode) textStyle = s.red + " " + s.text

    useEffect(() => {
        mode && dispatch(changeCurrentValue(minValue))
    }, [mode, dispatch, minValue])

    const onClickIncrement = () => dispatch(changeCurrentValue(increment + currentValue))
    const onClickReset = () => dispatch(changeCurrentValue(minValue))

    return (
        <div className={s.container}>
            <div className={s.wrapperText}>
                <p className={textStyle}>{currentText}</p>
            </div>
            <div className={s.wrapperBtn}>
                <Button variant={"contained"}
                        color={"primary"}
                        disabled={mode || maxValue === currentValue}
                        onClick={onClickIncrement}>
                    <PlusOneIcon/>
                </Button>
                <Button variant={"contained"}
                        color={"primary"}
                        disabled={mode || minValue === currentValue}
                        onClick={onClickReset}>
                    <RefreshIcon/>
                </Button>
            </div>
        </div>
    );
})

