import { Route, Switch } from "react-router";
// import { observer } from "mobx-react";

//Components
import SignUpDetail from "./SignUpDetail";
import SignInDetail from "./SignInDetail";
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <h1>Hello</h1>
        <SignUpDetail />
      </Route>
      <Route path="/login">
        <h1>Hello</h1>
        <SignInDetail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
