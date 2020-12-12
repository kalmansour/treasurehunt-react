import { Route, Switch } from "react-router";

//Components
import SignUpHook from "./SignUpHook";
import SignInHook from "./SignInHook";
import ThingList from "./ThingList";
import TreasureList from "./TreasureList";
import Home from "./Home";
// import SignUpDetail from "./SignUpDetail";
// import SignInDetail from "./SignInDetail";

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
        <SignUpHook />
      </Route>
      <Route path="/signin">
        <SignInHook />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
