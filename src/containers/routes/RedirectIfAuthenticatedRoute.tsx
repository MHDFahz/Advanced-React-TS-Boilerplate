import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteKeys } from './route-keys';
import { useAuth } from '../../hooks/useAuth';

interface CustomProps {
  component: any;
  redirectTo?: string;
  exact?: boolean;
  path?: string;
}

const RedirectIfAuthenticatedRoute: React.FunctionComponent<CustomProps> = (
  props
) => {
  const auth = useAuth();
  const { component, redirectTo, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(childProps) => {
        if (!auth.isAuthenticated) {
          return <props.component {...childProps} />;
        }
        auth.redirectSave(childProps.location.pathname);
        return (
          <Redirect
            to={{
              pathname: RouteKeys.Home,
            }}
            from={childProps.location.pathname}
          />
        );
      }}
    />
  );
};

export default RedirectIfAuthenticatedRoute;
