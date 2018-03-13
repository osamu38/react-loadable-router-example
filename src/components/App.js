import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import * as routes from '../routes';

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Switch>
        <Route exact path="/" component={routes.Home} />
        <Route exact path="/about" component={routes.About} />
        <Route exact path="/news" component={routes.News} />
      </Switch>
    </div>
  );
}
