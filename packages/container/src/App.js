import React from "react";
import {BrowserRouter} from "react-router-dom";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";


import {MarketingApp, Header} from './components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export const App = () => {

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header/>
          <MarketingApp/>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
