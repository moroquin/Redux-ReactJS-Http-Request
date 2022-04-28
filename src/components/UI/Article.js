import React from 'react'
import classes from './Article.module.css'
//import { ArticleMain } from './styles'

export const Article = (props) => {
  return (
    <article className={`${classes.main} ${props.className? props.className:''}`}     >
        {props.children}
    </article>
  )
}