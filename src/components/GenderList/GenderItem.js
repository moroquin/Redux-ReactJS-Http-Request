import React from "react";
import classes from "./GenderItem.module.css";
import Trash from "../icons/Trash";


//import { genderlistActions } from "../../store/genderlist-slice";
//import { useDispatch } from "react-redux";


const GenderItem = React.memo((props) => {

  // const dispatch = useDispatch();

  // const buttonDeleteHandler = (event) => {
  //   dispatch(
  //     genderlistActions.removeItem({
  //       id: props.id
  //     })
  //   );
  // };

  return (
    <li className={classes.item} key={props.id}>
      <p>{props.text}</p>

      <button className={classes.search_button} onClick={()=> props.buttonDeleteHandler(props.id)}>
        <Trash width={20} height={20} />
      </button>
    </li>
  );
});

export default GenderItem;
