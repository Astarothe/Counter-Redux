import React from 'react';
import {DisplaySettings} from "./DisplaySettings/DisplaySettings";
import {DisplayCounter} from "./DisplayCounter/DisplayCounter";
import {Grid} from "@material-ui/core";
import s from "./Counter.module.css"

export function Counter() {
    return (
        <Grid container className={s.container}>
            <Grid container className={s.wrapperItem}>
                <Grid item xs={8} sm={5} className={s.item}>
                    <DisplaySettings />
                </Grid>
                <Grid item xs={8} sm={5} className={s.item}>
                    <DisplayCounter />
                </Grid>
            </Grid>
        </Grid>
    );
}
