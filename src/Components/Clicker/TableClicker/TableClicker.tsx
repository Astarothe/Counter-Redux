import React from 'react';
import {changeCurrentValueAC} from "../../../state/clicker-reducer";
import {Button} from "@material-ui/core";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import RefreshIcon from '@material-ui/icons/Refresh';

type TableClickerType = {
    onChange: (value: any) => void
    currentValue: number
    changeMode: boolean
    maxValue: number
    minValue: number
}

export const TableClicker: React.FC<TableClickerType> = ({currentValue, onChange, changeMode, maxValue, minValue}) => {
    const onClickIncrement = () => {
        if (maxValue >= currentValue + 1) {
            onChange(changeCurrentValueAC(currentValue + 1))
        }
    }
    const onClickReset = () => {
        onChange(changeCurrentValueAC(minValue))
    }
    return (
        <div>
            <div>
                {!changeMode ? currentValue : "chaining"}
            </div>
            <div>

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

