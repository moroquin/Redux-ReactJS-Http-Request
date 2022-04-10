import React from 'react'
import { Article } from '../UI/Article'
import { Comment, Submit } from './styles'
//import classes from './Name.module.css'

export const Name = () => {
  return (
    <Article >
      <h2>NAME</h2>
      <Comment >Insert the name to verify the gender</Comment>
      <form>
        <label htmlFor='gname'></label>
        <input type='text' id='gname' name='gname'></input>
        <Submit type='submit' value='check' />
      </form>
    </Article>
  )
}

/*
<Comment >Insert the name to verify the gender</Comment>
        <form>
            <label htmlFor='gname'></label>
            <input type='text' id='gname' name='gname'></input>
            <Submit type='submit' value='check' />
        </form>
*/
