/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";

import GenderList from './GenderList';

import store from '../../store';
import { Provider } from 'react-redux';

 
let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


it('can render and update a counter', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Provider store={store}><GenderList /></Provider>);
  });

  const title = container.querySelector('h2');
  expect(title.textContent).toBe('History of consulted names');
  const listItem = container.querySelector('ul');
  const itmes = listItem.querySelectorAll('li');
  expect(itmes.length).toBe(0);
  

  
});