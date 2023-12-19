import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const resetPassword = localStorage.getItem('resetPassword');
  const {isLoggedIn} = useAuthContext()

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          resetPassword === 'true' ? (
            <Redirect
              to={{
                pathname: '/ResetPassword',
                state: { from: props.location },
              }}
            />
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
