/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable no-undef */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";

import store from "./store";
import { genderActions } from "./store/gender-slice";
import { genderlistActions } from "./store/genderlist-slice";
import App from "./App";
import { fireEvent, waitFor } from "@testing-library/react";

describe("Integration test, App component", () => {
  let container;
  let responseFetch;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    responseFetch = {
      name: "Oliver",
      gender: "male",
      probability: 0.99,
      count: 32776,
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(responseFetch),
      })
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    global.fetch.mockClear();
  });

  it("Should Name component accept a name and change genderState and genderlistState", async () => {
    //arrange
    const idItemInserted = store.getState().genderlist.id;
    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
    //act
    fireEvent.change(container.querySelector("#gname"), {
      target: { value: "Oliver" },
    });
    await act(async () => {
      await waitFor(() => {
        fireEvent.click(container.querySelector("#namesubmitcomponent"));
      });
    });
    expect(store.getState().gender.data.gender).toBe(responseFetch.gender);
    expect(store.getState().genderlist.id).toEqual(idItemInserted + 1);
    act(() => {
      store.dispatch(genderActions.clear());
      store.dispatch(genderlistActions.removeItem({ id: idItemInserted }));
    });
  });

  it("should gender component show data when  name the state is changed and show the consult in the history", async () => {
    //arrange
    const idItemInserted = store.getState().genderlist.id;
    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
    //act
    fireEvent.change(container.querySelector("#gname"), {
      target: { value: "Oliver" },
    });
    await act(async () => {
      await waitFor(() => {
        fireEvent.click(container.querySelector("#namesubmitcomponent"));
      });
    });
    expect(container.querySelector("#gendercomponentnameh2").textContent).toBe(
      responseFetch.name
    );
    expect(
      container.querySelector("#genderlistcomponentul").children[0]
    ).not.toBeNull();
    act(() => {
      store.dispatch(genderActions.clear());
      store.dispatch(genderlistActions.removeItem({ id: idItemInserted }));
    });
  });

  it("should genderlist component remove the items at the genderlist state when click remove button", async () => {
    //arrange
    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
    //act
    fireEvent.change(container.querySelector("#gname"), {
      target: { value: "Oliver" },
    });
    await act(async () => {
      await waitFor(() => {
        fireEvent.click(container.querySelector("#namesubmitcomponent"));
      });
    });
    let deleteButton = container.querySelector("#genderlistcomponentul")
      .children[0].children[1];

    act(() => {
      fireEvent.click(deleteButton);
    });

    //assert
    expect(store.getState().genderlist.list.length).toBe(0);
  });
});
