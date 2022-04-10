import React from 'react'
import { Article } from '../UI/Article'
import classes from './Gender.module.css'
import { Description, Item, Li } from './styles'

//https://api.genderize.io/?name=oliver
export const Gender = () => {
    return (
        <Article>
            <h2>name</h2>
            <ul className={classes.list}>
                <Li>
                    <Item className={classes.item}>Gender:</Item>
                    <Description className={classes.description}>Male</Description>
                </Li>
                <Li>
                    <Item className={classes.item}>Probability</Item>
                    <Description className={classes.description}>95%</Description>
                </Li>
                <Li>
                    <Item className={classes.item}>Count</Item>
                    <Description className={classes.description}>95</Description>
                </Li>
            </ul>
        </Article>
    )
}
