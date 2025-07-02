import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../store/auth-store";

interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  restricted?: boolean; // Only accessible if NOT logged in
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
