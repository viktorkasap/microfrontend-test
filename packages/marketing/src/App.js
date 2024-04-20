import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import { Pricing, Landing } from './components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
});

export const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exacct path='/pricing' component={Pricing}/>
          <Route path='/' component={Landing}/>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
