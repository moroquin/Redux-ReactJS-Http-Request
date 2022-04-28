import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Article } from "../UI/Article";
import GenderItem from "./GenderItem";
import classes from "./GenderList.module.css";
import { genderlistActions } from "../../store/genderlist-slice";
import { useDispatch } from "react-redux";

const GenderList = () => {
  const dispatch = useDispatch();
  const genderListItems = useSelector((state) => state.genderlist.list);

  const buttonDeleteHandler = useCallback(
    (idItem) => {
      dispatch(
        genderlistActions.removeItem({
          id: idItem,
        })
      );
    },
    [dispatch]
  );

  return (
    <Article  className={classes.article}>
      <h2>History of consulted names</h2>
      <ul id="genderlistcomponentul" className={classes.list}>
        {genderListItems.map((item) => (
          <GenderItem
            key={item.id}
            buttonDeleteHandler={buttonDeleteHandler}
            text={item.text}
            id={item.id}
          />
        ))}
      </ul>
    </Article>
  );
};

export default GenderList;
