import React, {useCallback} from 'react';
import {
    ActionsType, changeModeValueAC, changeRangeValueAC,
    maxValueId, minValueId, rangeValuesType
} from "../../../state/clicker-reducer";
import {Input} from "./Input/Input";
import {Button} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import s from "./TableSettings.module.css"

type TableSettingsType = {
    rangeValues: rangeValuesType
    onChange: (value: ActionsType) => void
    error: boolean
    changeMode: boolean
}

export const TableSettings: React.FC<TableSettingsType> = React.memo(
    ({rangeValues, onChange, error, changeMode}) => {

        const disabledButton = !changeMode || error

        const onChangeCallback = useCallback((value: number, id: string) => {
            !isNaN(value) && onChange(changeRangeValueAC(value, id, true))
        }, [onChange])

        const onChangeMode = useCallback(() => onChange(changeModeValueAC(false)), [onChange])

        const inputAll = [rangeValues[maxValueId], rangeValues[minValueId]].map(input => (
            <Input key={input.id} onChange={onChangeCallback} error={error} {...input}/>
        ))

        return (
            <div className={s.containerTableSettings}>
                <div className={s.containerInputs}>
                    {inputAll}
                </div>
                <div>
                    <Button variant={"contained"} color={"primary"} disabled={disabledButton}
                            onClick={onChangeMode}>set
                        <SettingsIcon/>
                    </Button>
                </div>
            </div>
        );
    })

