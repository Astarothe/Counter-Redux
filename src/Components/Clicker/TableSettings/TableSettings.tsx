import React, {useCallback} from 'react';
import {
    ActionsType,
    changeMaxRangeValueAC, changeMaxRangeValueACType,
    changeMinRangeValueAC,
    changeMinRangeValueACType,
    changeModeValueAC,
    rangeValuesType
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

        function actionHandler(action: changeMinRangeValueACType | changeMaxRangeValueACType){
            !isNaN(action.value) && onChange(action)
            !changeMode && onChange(changeModeValueAC(true))
        }
        const onChangeMaxCallback = (value: number) => {
            actionHandler(changeMaxRangeValueAC(value))
        }

        const onChangeMinCallback = (value: number) => {
            actionHandler(changeMinRangeValueAC(value))
        }

        const onChangeMode = useCallback(() => onChange(changeModeValueAC(false)), [onChange])

        return (
            <div className={s.container}>
                <div className={s.wrapperInputs}>
                    <Input onChange={onChangeMaxCallback} error={error} value={rangeValues.maxValue.value} text={rangeValues.maxValue.text}/>
                    <Input onChange={onChangeMinCallback} error={error} value={rangeValues.minValue.value} text={rangeValues.minValue.text}/>
                </div>
                <div>
                    <Button variant={"contained"}
                            color={"primary"}
                            disabled={disabledButton}
                            onClick={onChangeMode}>set
                        <SettingsIcon/>
                    </Button>
                </div>
            </div>
        );
    })

