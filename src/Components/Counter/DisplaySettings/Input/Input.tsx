import React, {ChangeEvent} from 'react';
import {TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../../state/store";
import {rangeValuesTypes} from "../DisplaySettings";
import {changeRangeValueAC} from "../../../../state/clicker-reducer";

type InputType = {
    id: string
}

export const Input: React.FC<InputType> = React.memo((props) => {
    const {id} = props

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        !isNaN(e.currentTarget.valueAsNumber) &&
        dispatch(changeRangeValueAC(e.currentTarget.valueAsNumber, id))

    const error = useSelector<StoreType, boolean>
    (state => state.error.errorRangeValues)

    const input = useSelector<StoreType, rangeValuesTypes>
    (state => state.counter.rangeValues.filter(i => i.id === id)[0])

    return (
        <div>
            <TextField variant="outlined"
                       label={input.text}
                       type="number"
                       value={input.value}
                       onChange={onChangeHandler}
                       error={error}/>
        </div>
    );
})

