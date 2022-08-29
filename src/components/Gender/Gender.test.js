/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from "react-dom/client";

import { act } from "react-dom/test-utils";

import { Gender } from "./Gender";

import store from "../../store";
import { Provider } from "react-redux";
import { genderActions } from "../../store/gender-slice";

describe("Gender component", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should display message for waiting the first data fetched", () => {
    //arrange

    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <Gender />
        </Provider>
      );
    });

    //act

    //assert
    expect(container.querySelector('p[class*="empty"]')).not.toBeNull();
  });

  it("should does not display message for waiting information when the state is not empty", () => {
    //arrange
    const dataInsert = {
      count: "5",
      gender: "male",
      name: "oliver",
      probability: "0.99",
    };

    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <Gender />
        </Provider>
      );
    });

    //act

    act(() => {
      store.dispatch(genderActions.setgender(dataInsert));
    });

    //assert
    expect(container.querySelector('p[class*="empty"]')).toBeNull();
    act(() => {
      store.dispatch(genderActions.clear());
    });
  });

  it("Should display the data store in redux", () => {
    //arrange
    const dataInsert = {
      count: "5",
      gender: "male",
      name: "oliver",
      probability: "0.99",
    };

    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <Gender />
        </Provider>
      );
    });

    //act

    act(() => {
      store.dispatch(genderActions.setgender(dataInsert));
    });

    //assert
    expect(container.querySelector("h2").textContent).toBe(dataInsert.name);
    expect(
      document.querySelector("ul li:nth-child(1)").children[1].textContent
    ).toEqual(dataInsert.gender);
    expect(
      document.querySelector("ul li:nth-child(2)").children[1].textContent
    ).toEqual(dataInsert.probability);

    act(() => {
      store.dispatch(genderActions.clear());
    });
  });
});
