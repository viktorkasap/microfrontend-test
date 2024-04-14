import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from "@material-ui/core";

import { Pricing, Landing } from './components'

export const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exacct path='/pricing' component={Pricing}/>
          <Route path='/' component={Landing}/>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
