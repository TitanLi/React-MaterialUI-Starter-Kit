//Sample to import LESS or SCSS
//Style-sheets
import './assets/scss/material-dashboard-react.scss';

import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import ExceptionHandler from './layouts/ExceptionHandler';
import { GetBaseUrl } from './commons/commonFuncs';
import Provider from 'react-redux-thunk-store';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import indexRoutes from 'routes/index.jsx';
import reducers from './reducers';

//import './assets/less/material-dashboard-react.less';
//Sample to import LESS or SCSS

//indicate whether application is running on PRD or not
const isPrd = process.env.NODE_ENV === 'production';

//Update for Reserved proxy
const base = GetBaseUrl();
const hist = createBrowserHistory({ basename: base });

const createRouter = () => {
  return (
    <BrowserRouter basename={base || '/'}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

//The Global ExceptionHandler will be disabled when running on development mode.
const renderComponent = () => {
  ReactDOM.render(
    <Provider reducers={reducers}>
      <ExceptionHandler global disabled={!isPrd}>
        {createRouter()}
      </ExceptionHandler>
    </Provider>,
    document.getElementById('root')
  );
};

renderComponent();

/* devblock:start */
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./layouts/Dashboard', () => {
    renderComponent();
  });
}
/* devblock:end */
