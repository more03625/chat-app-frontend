import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Messanger = React.lazy(() => import("./pages/messanger/Messanger"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>This is form fallback!</div>}>
        <Switch>
          <Route exact path="/" component={Messanger} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;