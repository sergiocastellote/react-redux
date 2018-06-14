// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import AllPost from './containers/AllPost';
import PostForm from './containers/PostForm';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/list" component={AllPost} />
      <Route exact path="/form" component={PostForm} />
    </Switch>
  </App>;

export default AppRoutes;