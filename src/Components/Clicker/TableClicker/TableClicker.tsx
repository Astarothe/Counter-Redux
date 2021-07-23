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

export const TableClicker: React.FC<TableClickerType> = ({error, currentValue, onChange, changeMode, maxValue, minValue}) => {
    const onClickIncrement = () => {
        if (maxValue >= currentValue + 1) {
            onChange(changeCurrentValueAC(currentValue + 1))
        }
    }
    const onClickReset = () => {
        onChange(changeCurrentValueAC(minValue))
    }
    return (
        <div className={s.containerTableClicker}>
            <div className={s.containerCurrentValue}>
                <p className={s.currentValue}>{!changeMode ? currentValue : error ? "incorrect value" :"chaining"}</p>
            </div>
            <div className={s.containerButtons}>
                <Button variant={"contained"} color={"primary"}
                        disabled={changeMode || maxValue === currentValue} onClick={onClickIncrement}>
                    <PlusOneIcon/>
                </Button>
                <Button variant={"contained"} color={"primary"} disabled={changeMode || minValue === currentValue}
                        onClick={onClickReset}>
                    <RefreshIcon/>
                </Button>
            </div>
        </div>
    );
}

