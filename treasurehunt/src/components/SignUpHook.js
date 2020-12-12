import React from "react";
import { observer } from "mobx-react";
import { useForm } from "react-hook-form";
import authStore from "../stores/authStore";
import SignUpButton from "./SignUpButton";

const SignUpHook = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (user) => {
    authStore.signup(user);
    console.log(user);
  };

  //   const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2>Signup Page</h2>
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
              ref={register({ required: true, minLength: 3 })}
            />
            {errors.password && errors.password.type === "required" && (
              <p>This input field is required Lol</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p>Your fingers okay? 3 characters min</p>
            )}
            <SignUpButton className="btn float-right" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default observer(SignUpHook);
