import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

//Components
import SignUpDetail from "./SignUpDetail";
import SignInDetail from "./SignInDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpDetail />
      </Route>
      <Route path="/signin">
        <SignInDetail />
      </Route>
      <Route path="/"></Route>
    </Switch>
  );
};

export default observer(Routes);
