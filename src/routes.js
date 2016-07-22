import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { browserHistory as history } from 'react-router';

import App from 'layout/App';
import {
  NotFound,
  Home,
} from 'containers';

export default (store) => {

  /**
   * Routes
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
