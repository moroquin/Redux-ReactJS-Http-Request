/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import GenderList from "./GenderList";

import store from "../../store";
import { Provider } from "react-redux";
import {genderlistActions} from '../../store/genderlist-slice'
import { fireEvent } from "@testing-library/react";

describe("Gender lists test suite", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("at the beggining print empty list", () => {
    //arrange
    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <GenderList />
        </Provider>
      );
    });
    //act
    //assert
    expect(container.querySelector("li")).toBeNull();
  });

  it("should show the item inserted", () => {
    //arrange
    const dataInsert = "oliver ( male - 99.00%)";
    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <GenderList />
        </Provider>
      );
    });
    //act
    act(() => { 
      store.dispatch(genderlistActions.addItem({item: dataInsert}));
     })
     
    //assert
    expect(Array.from(container.querySelectorAll("li")).length).toEqual(1);
    expect(container.querySelector("li").children[0].textContent).toBe(dataInsert);
    act(() => { 
      store.dispatch(genderlistActions.removeItem({id: 0}));
     })
  });

  it("should remove the item inserted", () => {
    //arrange
    const dataInsert = "oliver ( male - 99.00%)";
    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <GenderList />
        </Provider>
      );
    });

    act(() => { 
      store.dispatch(genderlistActions.addItem({item: dataInsert}));
     })

    
    //act
     fireEvent.click(container.querySelector('li').querySelector('button'));
     //assert
     expect(container.querySelector("li")).toBeNull();
  });
});
