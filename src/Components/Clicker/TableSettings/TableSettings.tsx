import React from 'react';
import {
    changeModeValueAC,
    changeRangeValueAC,
    maxValueId,
    minValueId,
    rangeValuesType
} from "../../../state/clicker-reducer";
import {Input} from "./Input/Input";
import {Button} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import SettingsIcon from '@material-ui/icons/Settings';

type TableSettingsType = {
    rangeValues: rangeValuesType
    onChange: (value: any) => void
    error: boolean
    changeMode: boolean
}

export const TableSettings: React.FC<TableSettingsType> = ({rangeValues, onChange, error, changeMode}) => {
    const onChangeCallback = (value: number, id: string) => {
        onChange(changeRangeValueAC(value, id, true))
    }
    const onChangeMode = () => onChange(changeModeValueAC(false))

    const inputAll = [rangeValues[maxValueId], rangeValues[minValueId]].map((i, index) => {
        return <Input key={index} id={i.id} value={i.value} onChange={onChangeCallback} error={error}/>
    })

    return (
        <div>
            <div>
                {inputAll}
            </div>
            <div>
                <Button variant={"contained"} color={"primary"} disabled={!changeMode || error}
                        onClick={onChangeMode}>
                    set
                    <SettingsIcon />
                </Button>
            </div>
        </div>

    );
}

