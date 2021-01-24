import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact} />
      ))}
    </Switch>
  </Router>,
  document.getElementById('root')
);