import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Protected from "./helpers/Protected";

const Messanger = lazy(() => import("./pages/messanger/Messanger"));
const Login = lazy(() => import("./pages/auth/login/Login"));
const Register = lazy(() => import("./pages/auth/register/Register"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>This is form fallback!</div>}>
        <Switch>
          <Route exact path="/login">
            <Protected component={Login} />
          </Route>
          <Route exact path="/register">
            <Protected component={Register} />
          </Route>
          <Route exact path="/" >
            <Protected component={Messanger} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
