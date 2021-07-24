import React, {ChangeEvent} from 'react';
import {TextField} from "@material-ui/core";

type InputType = {
    onChange: (value: number, id: string) => void
    value: number
    id: string
    error: boolean
    text: string
}

export const Input : React.FC<InputType> = React.memo(({onChange, value, id, error, text}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.valueAsNumber, id)

    return (
        <div>
            <TextField variant="outlined"
                       label={text}
                       type="number"
                       value={value}
                       onChange={onChangeHandler}
                       error={error}/>
        </div>
    );
})

