import React, {useCallback, useEffect, useMemo} from 'react';
import {Input} from "./Input/Input";
import {Button} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import s from "./DisplaySettings.module.css"
import {changeModeValueAC} from "../../../state/mode-reducer";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../state/store";
import {changeErrorStatus} from "../../../state/errors-reducer";


export type rangeValuesTypes = {
    value: number
    id: string
    text: string
}

export const DisplaySettings: React.FC = React.memo(() => {
    const dispatch = useDispatch()

    const rangeValues = useSelector<StoreType, Array<rangeValuesTypes>>
    (state => state.counter.rangeValues)

    const error = useSelector<StoreType, boolean>
    (state => state.error.errorRangeValues)

    const changeMode = useSelector<StoreType, boolean>
    (state => (state.mode.mode));

    const [maxValue, minValue] = rangeValues.map(t => t.value);
    const result = useMemo(() =>
        minValue >= maxValue || minValue < 0 || maxValue <= 0, [maxValue, minValue])

    useEffect(() => {
        dispatch(changeErrorStatus(result))
    }, [dispatch, result])

    const onChangeMode = useCallback(() =>
        dispatch(changeModeValueAC(false)), [dispatch])

    return (
        <div className={s.container}>
            <div className={s.wrapperInputs}>
                {rangeValues.map(input => <Input key={input.id} id={input.id}/>)}
            </div>
            <div>
                <Button variant={"contained"}
                        color={"primary"}
                        disabled={!changeMode || error}
                        onClick={onChangeMode}>set
                    <SettingsIcon/>
                </Button>

            </div>
        </div>
    );
})

