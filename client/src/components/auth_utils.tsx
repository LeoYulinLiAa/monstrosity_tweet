import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../selectors/selectors";

export const RouteAuth: FC<any> = ({ component: Component, path, exact }) => {

  const loggedIn = useSelector(isLoggedInSelector);

  return <Route path={ path } exact={ exact } render={ (props) => (
    !loggedIn ? (
      <Component { ...props } />
    ) : (
      // Redirect to the tweets page if the user is authenticated
      <Redirect to="/tweets" />
    )
  ) } />
};

export const RouteProtected: FC<any> = ({ component: Component, ...rest }) => {

  const loggedIn = useSelector(isLoggedInSelector);

  return <Route{ ...rest } render={ props =>
    loggedIn ? (
      <Component { ...props } />
    ) : (
      // Redirect to the login page if the user is already authenticated
      <Redirect to="/login" />
    )
  }
  />
};
