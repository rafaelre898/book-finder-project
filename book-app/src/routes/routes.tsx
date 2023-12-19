import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../pages/public/SignIn';
import Books from '../pages/private/Books';
import Favorite from '../pages/private/Fav';
import PageLayout from '../layouts/SideDrawer';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <PageLayout>
            <PrivateRoute exact path='/books' component={Books} />
            <PrivateRoute exact path='/favorite' component={Favorite} />
          </PageLayout>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
