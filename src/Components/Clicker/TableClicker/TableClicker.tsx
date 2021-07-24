import React from 'react';
import {changeCurrentValueAC} from "../../../state/clicker-reducer";
import {Button} from "@material-ui/core";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import RefreshIcon from '@material-ui/icons/Refresh';
import s from "./TableClicker.module.css"

type TableClickerType = {
    onChange: (value: any) => void
    currentValue: number
    changeMode: boolean
    maxValue: number
    minValue: number
    error: boolean
}

export const TableClicker: React.FC<TableClickerType> = React.memo(
    ({error, currentValue, onChange, changeMode, maxValue, minValue}) => {

        const pressSet = "enter values and press 'set'"
        const incorrectValue = "incorrect value"
        const increment = 1;

        const resultIncrementValue = increment + currentValue
        const disabledIncrementButton = changeMode || maxValue === currentValue
        const disabledResetButton = changeMode || minValue === currentValue
        const currentText = !changeMode ? currentValue : error ? incorrectValue : pressSet
        const textStyle = !changeMode ? s.text : error ? s.error : s.set

        const onClickIncrement = () => maxValue >= resultIncrementValue
            && onChange(changeCurrentValueAC(resultIncrementValue))

        const onClickReset = () => onChange(changeCurrentValueAC(minValue))

        return (
            <div className={s.container}>
                <div className={s.wrapperText}>
                    <p className={textStyle}>{currentText}</p>
                </div>
                <div className={s.wrapperBtn}>
                    <Button variant={"contained"}
                            color={"primary"}
                            disabled={disabledIncrementButton}
                            onClick={onClickIncrement}>
                        <PlusOneIcon/>
                    </Button>
                    <Button variant={"contained"}
                            color={"primary"}
                            disabled={disabledResetButton}
                            onClick={onClickReset}>
                        <RefreshIcon/>
                    </Button>
                </div>
            </div>
        );
    })

