import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages";
import { ForwardingRoute, ProtectedRoute } from "./helpers/specialRoutes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

  // Do things with the user info
  // const displayInfo = user
  //   ? `user: ${user.displayName}, avatar: ${user.photoURL}`
  //   : "no user logged in";
  // console.log(displayInfo);

  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>

      <ProtectedRoute
        user={user}
        fallbackPath={ROUTES.SIGN_IN}
        path={ROUTES.BROWSE}
        exact
      >
        <Browse />
      </ProtectedRoute>

      <ForwardingRoute
        user={user}
        targetPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <SignIn />
      </ForwardingRoute>

      <ForwardingRoute
        user={user}
        targetPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <SignUp />
      </ForwardingRoute>
    </Router>
  );
}

// export default App;
