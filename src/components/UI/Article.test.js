/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Article } from "./Article";

describe("Unit test for the Article component", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should render children elments", () => {
    
    act(() => {
        ReactDOM.createRoot(container).render(<Article><h1>Working!</h1></Article>);
    });

    expect(container.querySelector("h1").textContent).toBe("Working!");
  });
});
