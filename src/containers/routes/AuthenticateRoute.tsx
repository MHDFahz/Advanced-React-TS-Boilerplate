import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { RouteKeys } from './route-keys';

interface CustomProps {
  component: any;
  exact?: boolean;
  path?: string;
}

const AuthenticateRoute: React.FunctionComponent<CustomProps> = (props) => {
  const auth = useAuth();
  const { component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(childProps) => {
        if (auth.isAuthenticated) {
          return <props.component {...childProps} />;
        }
        auth.redirectSave('');
        return (
          <Redirect
            to={{
              pathname: RouteKeys.Login,
            }}
            from={childProps.location.pathname}
          />
        );
      }}
    />
  );
};

export default AuthenticateRoute;
