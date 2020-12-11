import { Route, Switch } from "react-router";

//Components
import SignUpDetail from "./SignUpDetail";
import SignInDetail from "./SignInDetail";
import ThingList from "./ThingList";
import TreasureList from "./TreasureList";
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/things/treasure">
        <TreasureList />
      </Route>
      <Route path="/things/random">
        <ThingList />
      </Route>
      <Route path="/signup">
        <SignUpDetail />
      </Route>
      <Route path="/login">
        <SignInDetail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
