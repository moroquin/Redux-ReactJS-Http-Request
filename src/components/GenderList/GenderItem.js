import React from "react";
import classes from "./GenderItem.module.css";
import Trash from "../icons/Trash";

const GenderItem = React.memo((props) => {
  const buttonDeleteHandler = (event) => {};

  return (
    <li className={classes.item} key={props.id}>
      <p>{props.text}</p>

      <button className={classes.search_button} onClick={buttonDeleteHandler}>
        <Trash width={20} height={20} />
      </button>
    </li>
  );
});

export default GenderItem;
