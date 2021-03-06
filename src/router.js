import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import AddUrl from "./routes/AddUrl.js";

import NewEmail from "./routes/NewEmail.js";
import Que from "./routes/Que.js";

function RouterConfig({ history }) {
  return (
      <Router history={history}>
          <Route path="/" component={IndexPage}>
              <Route path="/add_url" component={AddUrl} />
              <Route path="/newEmail" component={NewEmail} />
              <Route path="/que_lib" component={Que} />
          </Route>
      </Router>
  );
}

export default RouterConfig;



