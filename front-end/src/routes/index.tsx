/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Goals from '../pages/Goals';
import Dashboard from '../pages/Dashboard';
import BadgeInfo from '../pages/BadgeInfo';
import HelpAbout from '../pages/HelpAbout';
import Tips from '../pages/Tips';

const PrivateRoute = ({
    component: Component,
    ...rest
}: {
    component: any;
}) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/', state: { from: props.location } }}
                />
            )
        }
    />
);

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/goals" exact component={Goals} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/badgeinfo/:badge+" exact component={BadgeInfo} />
        <Route path="/help" exact component={HelpAbout} />
        <Route path="/tips" exact component={Tips} />
    </Switch>
);

export default Routes;
