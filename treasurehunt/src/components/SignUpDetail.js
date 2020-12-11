import { useState } from "react";
import authStore from "../stores/authStore";
// import SignUpButton from "./SignUpButton";

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
      <h3>SignUp</h3>
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
            <button className="btn float-right" type="submit">
              SignUp
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default observer(SignUpDetail);
