import React from "react";
import ReactDom from 'react-dom';
import { App } from "./App";

// * Init function
export const init = (el) => {
  el && (ReactDom.render(
    <App/>,
    el
  ))
};

// * Dev mode
if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('_dev-root');
  root && (init(root));
}
