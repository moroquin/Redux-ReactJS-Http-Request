import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Article } from "../UI/Article";
import classes from "./Name.module.css";
import { genderActions } from "../../store/gender-slice";
import { genderlistActions } from "../../store/genderlist-slice";

export const Name = () => {
  const dispatch = useDispatch();

  const [errorImput, setErrorImput] = useState(false);
  const [nameInput, setNameInput] = useState("");
  

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (nameInput.length === 0){
      setErrorImput(true);
      return;
    }

    if (errorImput){
      setErrorImput(false);
    }
    
    const getData = async (name) => {
      const response = await fetch("https://api.genderize.io/?name=" + name);
      if (!response.ok) {
        genderActions.clear();
        return;
      }
      const responseData = await response.json();

      dispatch(
        genderActions.setgender({
          name: name,
          gender: responseData.gender,
          probability: (responseData.probability * 100).toFixed(2) + "%",
          count: responseData.count,
        })
      );
      dispatch(
        genderlistActions.addItem({
          item:
            name +
            " ( " +
            responseData.gender +
            " - " +
            (responseData.probability * 100).toFixed(2) +
            "%)",
        })
      );
    };

    getData(nameInput);
    setNameInput("");
  };

  let handleChangeInput = (event) => { 
    setNameInput(event.target.value);
    if ((event.target.value.length!== 0)&& (errorImput)){
      setErrorImput(false);
    }
   }


  return (
    <Article className={classes.article}>
      <h2>NAME</h2>
      <p className={classes.comment}>Insert the name to verify the gender</p>
      <form  onSubmit={formSubmissionHandler}>
        <label>
          Name:
          <input
            type="text"
            id="gname"
            name="gname"
            className={classes.inputName}
            value={nameInput}
            onChange={handleChangeInput}
          />
        </label>
        {errorImput && <p className={classes.error}>Error, you must write a name.</p>}
        <br />
        <input id="namesubmitcomponent" type="submit" value="check" className={classes.submit} />
      </form>
    </Article>
  );
};

//import { Comment, Submit } from "./styles";
/*
<Comment >Insert the name to verify the gender</Comment>
        <form>
            <label htmlFor='gname'></label>
            <input type='text' id='gname' name='gname'></input>
            <Submit type='submit' value='check' />
        </form>
*/
