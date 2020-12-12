import { useState } from "react";
import { observer } from "mobx-react";

//Stores
import authStore from "../stores/authStore";

//Components
import SignUpButton from "./SignUpButton";

const SignUpDetail = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
  };

  return (
    <div>
      <h3>SignUp Page</h3>
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
            <SignUpButton className="btn float-right" type="submit">
              SignUp
            </SignUpButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default observer(SignUpDetail);
