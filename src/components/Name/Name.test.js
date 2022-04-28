/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import { Name } from "./Name";

import store from "../../store";
import { Provider } from "react-redux";
import { fireEvent, waitFor } from "@testing-library/react";

describe("Name component integration test", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("Should prevent sending an empty name and showing an error", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <Name />
        </Provider>
      );
    });
    let errorItem = container.querySelector('p[class*="error"]');
    expect(errorItem).toBeNull();
    fireEvent.click(container.querySelector('input[type="submit"]'));
    errorItem = container.querySelector('p[class*="error"]');
    expect(errorItem).not.toBeNull();
  });

  it("Should show error message, and delete when you type a name", () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <Name />
        </Provider>
      );
    }); 

    fireEvent.click(container.querySelector('input[type="submit"]'));
    let errorItem = container.querySelector('p[class*="error"]');
    expect(errorItem).not.toBeNull();
    fireEvent.change(container.querySelector("#gname"), {
      target: { value: "Oliver" },
    });
    errorItem = container.querySelector('p[class*="error"]');
    expect(errorItem).toBeNull();
  });

  it("Should fetch data and change the redux state", async () => {
    let responseFetch = {
      name: "Oliver",
      gender: "male",
      probability: 0.99,
      count: 32776,
    };

    act(() => {
      ReactDOM.createRoot(container).render(
        <Provider store={store}>
          <Name />
        </Provider>
      );
    });

    jest
      .spyOn(global, "fetch")
      .mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(responseFetch),
        })
      );

    fireEvent.change(container.querySelector("#gname"), {
      target: { value: "Oliver" },
    });

    await waitFor(() => {
      fireEvent.click(container.querySelector('input[type="submit"]'));
    });
    responseFetch.probability = "99.00%";
    expect(store.getState().gender.data).toStrictEqual(responseFetch);
    expect(store.getState().genderlist.id).toEqual(1);
    expect(store.getState().genderlist.list[0]).toStrictEqual({
      id: 0,
      text: "Oliver ( male - 99.00%)",
    });
    global.fetch.mockClear()
  });
});
