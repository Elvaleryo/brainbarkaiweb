import { Switch } from 'react-router-dom';
import { Route } from "react-router";
import HomePage from 'pages/HomePage';
import { AppRoutes } from './shared';

function MainRoutes() {
  return (
      <Switch>
        <Route exact path={AppRoutes.HOME} component={HomePage} />
      </Switch>
  );
}

export default MainRoutes;
