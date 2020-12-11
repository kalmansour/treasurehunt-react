import { useState } from "react";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

//Components
import SignInButton from "./SignInButton";

const SignInDetail = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };
  console.log(SignInDetail);

  if (authStore.user) return <Redirect to="/" />;

  return (
    <div>
      <h3>Signin Page</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div>
            <label>Username</label>
            <input
              name="username"
              value={user.username}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              type="password"
              className="form-control"
              onChange={handleChange}
            />
            <SignInButton className="btn float-right" type="submit">
              Sign in
            </SignInButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default observer(SignInDetail);
