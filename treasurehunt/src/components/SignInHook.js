import React from "react";
import { useForm } from "react-hook-form";
import authStore from "../stores/authStore";
import SignInButton from "./SignInButton";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

const SignInHook = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const watchPassword = watch("password");

  const onSubmit = (user) => {
    authStore.signin(user);
    console.log(user);
  };

  if (authStore.user) return <Redirect to="/" />;

  return (
    <div>
      <h2>Signin Page</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>
        <div className="form-group row">
          <div>
            <label>Username</label>
            <input
              name="username"
              className="form-control"
              ref={register({ required: true, minLength: 3, maxLength: 10 })}
            />
            {errors.username && errors.username.type === "required" && (
              <p>This input field is required Lol</p>
            )}
            {errors.username && errors.username.type === "minLength" && (
              <p>Your fingers okay? 3 characters min</p>
            )}
            {errors.username && errors.username.type === "maxLength" && (
              <p>Bruh 10 characters max</p>
            )}

            <label>Password</label>
            <input
              name="password"
              className="form-control"
              ref={register({
                required: true,
                minLength: 3,
                validate: (value) => value === watchPassword,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p>This input field is required Lol</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p>Your fingers okay? 3 characters min</p>
            )}
            {errors.password && errors.password.type === "validate" && (
              <p>Incorrect password</p>
            )}
            <SignInButton className="btn float-right" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default observer(SignInHook);
