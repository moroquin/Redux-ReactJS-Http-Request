import React from 'react'
import { Article } from '../UI/Article'
import classes from './Gender.module.css'

//https://api.genderize.io/?name=oliver
export const Gender = () => {
    return (
        <Article>
            <h2>name</h2>
            <ul className={classes.list}>
                <li>
                    <p className={classes.item}>Gender:</p>
                    <p className={classes.description}>Male</p>
                </li>
                <li>
                    <p className={classes.item}>Probability</p>
                    <p className={classes.description}>95%</p>
                </li>
                <li>
                    <p className={classes.item}>Count</p>
                    <p className={classes.description}>95</p>
                </li>
            </ul>
        </Article>
    )
}
