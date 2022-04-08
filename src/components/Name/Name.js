import React from 'react'
import { Article } from '../UI/Article'
import classes from './Name.module.css';

export const Name = () => {
  return (
    <Article >
        <h2>NAME</h2>
        <p className={classes.comment}>Insert the name to verify the gender</p>
        <form>
            <label htmlFor='gname'></label>
            <input type='text' id='gname' name='gname'></input>
            <input type='submit' className={classes.button} value='check' />
        </form>
    </Article>
  )
}
