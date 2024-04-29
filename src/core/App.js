import RootPage from 'pages/RootPage';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import MainRoutes from './routes';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory();
  return (
    <>
      <Router history={history}>
        <Switch>
          <RootPage>
            <MainRoutes />
          </RootPage>
        </Switch>
      </Router>
    </>
  );
}

export default App;
