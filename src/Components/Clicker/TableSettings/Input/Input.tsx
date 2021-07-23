import React, {ChangeEvent} from 'react';
import s from "./Input.module.css"
import {TextField} from "@material-ui/core";


type InputType = {
    onChange: (value: number, id: string) => void
    value: number
    id: string
    error: boolean
    text: string
}

export const Input: React.FC<InputType> = ({onChange, value, id, error,text}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.valueAsNumber, id)
    }
    const inputClass = `${error && s.inputError}`

    return (
        <div>
            <TextField variant="outlined" id="standard-number" label={text}
                       type="number" InputLabelProps={{shrink: true,}}
                       value={value} onChange={onChangeHandler} error={error}/>
        </div>
    );
}

