import React from "react";
import { useSelector } from "react-redux";
import { Article } from "../UI/Article";
import classes from "./Gender.module.css";

export const Gender = () => {
  const genderData = useSelector((state) => state.gender.data);


  const renderAllData = () => { 
    return (
      <>
      <h2 id="gendercomponentnameh2">{genderData.name}</h2>
        <ul className={classes.list}>
          <li className="list">
            <p className={classes.item}>Gender:</p> <p className={classes.description}>{genderData.gender}</p>
          </li>
          <li className="list">
            <p className={classes.item}>Probability</p>
            <p className={classes.description}>{genderData.probability}</p>
          </li>
        </ul>
        </>)
   }

  return (
    <Article  className={classes.article}>
      {(genderData.name.length !== 0) && renderAllData()}
      {(genderData.name.length === 0) && <p className={classes.empty}> Waiting for information </p>}
    </Article>
  );
};

//import { Description, Item, Li } from './styles'
