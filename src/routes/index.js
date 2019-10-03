import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import ShowMeetup from '../pages/ShowMeetup';
import NewMeetup from '../pages/NewMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" exact component={SingUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
      <Route path="/meetup" exact component={ShowMeetup} isPrivate />
      <Route path="/new/meetup" exact component={NewMeetup} isPrivate />
    </Switch>
  );
}
