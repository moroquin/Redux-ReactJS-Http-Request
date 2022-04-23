import React from "react";
import classes from './GenderItem.module.css'

const GenderItem = (props) => {
  return <li className={classes.item} key={props.id}>{props.text}</li>;
};

export default GenderItem;
