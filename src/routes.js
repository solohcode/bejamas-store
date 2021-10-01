/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Router, Switch, Route, Redirect } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import Home from "./pages/home";





const routes = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
]


function Routes({history}) {


  return (
    <ConnectedRouter history={history}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {
            routes.map((prod,index)=>(
              <Route key={index} path={prod.path} component={prod.component} exact={prod.exact} />
            ))
          }
        </Switch>
      </Router>
    </ConnectedRouter>
  );
}

export default Routes;
