import React from 'react'
import classes from './Article.module.css'

export const Article = (props) => {
  return (
    <article className={`${classes.main} ${props.className? props.className:''}`}     >
        {props.children}
    </article>
  )
}
