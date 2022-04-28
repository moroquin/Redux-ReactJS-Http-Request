/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import GenderItem from "./GenderItem";


describe("Unit tests for Gender Item", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("Should render GenderItem with props", () => {
    const idItem = 1;
    const textItem = "element text";
    
    act(() => {
      ReactDOM.createRoot(container).render(
        <GenderItem
          key={idItem}
          buttonDeleteHandler={() => {  }}
          text={textItem}
          id={idItem}
        />
      );
    });
    const genderItemLi = container.querySelector('li');
    expect(genderItemLi.querySelector('p').textContent).toBe(textItem);
    expect(genderItemLi.querySelectorAll('button').length).toBe(1);
  });

  it("Should the function past by props works", () => {
    const idItem = 101;
    const textItem = "element text";
    const functionItem = jest.fn(x => x);

    act(() => {
      ReactDOM.createRoot(container).render(
        <GenderItem
          key={idItem}
          buttonDeleteHandler={functionItem}
          text={textItem}
          id={idItem}
        />
      );
    });
    const genderItemButton = container.querySelector('button');
    fireEvent.click(genderItemButton);
    expect(functionItem.mock.calls.length).toEqual(1);
    expect(functionItem.mock.calls[0][0]).toEqual(idItem);
    

  });
});
