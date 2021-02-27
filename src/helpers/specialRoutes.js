/**
 * Redirect routes based on user authentication in react.
 * https://ui.dev/react-router-v5-protected-routes-authentication/
 */

import { Redirect, Route } from "react-router-dom";

/**
 * Forward the route to targetPath if a user exists (ie, already signed in)
 */
export const ForwardingRoute = ({
  user,
  targetPath,
  children,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={() => {
        return !user ? children : <Redirect to={{ pathname: targetPath }} />;
      }}
    />
  );
};

/**
 * Redirect user to the `fallbackPath` when they are not signed in, protecting
 * the route specified by `path`
 */
export const ProtectedRoute = ({
  user,
  fallbackPath,
  children,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect
            to={{ pathname: fallbackPath, state: { from: location } }}
          />
        );
      }}
    />
  );
};
