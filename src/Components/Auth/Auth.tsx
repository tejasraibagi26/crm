import "./auth.css";
import { Text } from "../TextFields";
import Button from "../Button";
import React, { useState } from "react";
import { IUser } from "../../Interfaces";
import { isEmpty } from "../../Helpers";

const Auth = (props: any) => {
  const [userValues, setUserValues] = useState<IUser>({
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const isRegister = props?.authType === "register" ? true : false;
  return (
    <section className="auth">
      <div className="container">
        <div className="header">
          <h1 className="title">{props.authType}</h1>
        </div>
        {isRegister
          ? renderRegister(userValues, setUserValues)
          : renderLogin(userValues, setUserValues)}
      </div>
    </section>
  );
};

const renderRegister = (userValues: IUser, setUserValues: any) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>();

  const registerUser = () => {
    setLoading(true);
    try {
      isEmpty(userValues);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues((prev: any) => ({
      ...prev,
      [e?.target?.name]: e.target.value,
    }));
  };

  return (
    <form>
      <Text
        label="Email"
        type="email"
        placeholder="email@example.com"
        className="textfield"
        onChange={onChange}
      />
      <Text
        label="Username"
        type="text"
        placeholder="Username"
        onChange={onChange}
        className="textfield"
      />
      <Text
        label="Password"
        type="password"
        placeholder="Enter Password"
        onChange={onChange}
        className="textfield"
      />
      <Text
        label="Confirm Password"
        type="password"
        placeholder="Cofirm Password"
        onChange={onChange}
        className="textfield"
      />
      <Button
        buttonText={"Register"}
        classNames={"btn-h-80-px btn-center btn-font-lg"}
        onClickFn={registerUser}
        loading={loading}
      />
      {error && <p className="error">{error}</p>}
    </form>
  );
};

const renderLogin = (userValues: IUser, setUserValues: any) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues((prev: any) => ({
      ...prev,
      [e?.target?.name]: e.target.value,
    }));
  };

  const loginUser = () => {
    delete userValues.confirmPassword;
    delete userValues.username;

    console.log(userValues);
  };

  return (
    <form>
      <Text
        label="Email"
        type="email"
        placeholder="email@example.com"
        className="textfield"
        onChange={onChange}
      />
      {/* <Text
        label="Username"
        type="text"
        placeholder="Username"
        onChange={onChange}
        className="textfield"
      /> */}
      <Text
        label="Password"
        type="password"
        placeholder="Enter Password"
        onChange={onChange}
        className="textfield"
      />
      {/* <Text
        label="Confirm Password"
        type="password"
        placeholder="Cofirm Password"
        onChange={onChange}
        className="textfield"
      /> */}
      <Button
        buttonText={"Login"}
        classNames={"btn-h-80-px btn-center btn-font-lg"}
        onClickFn={loginUser}
        loading={loading}
      />
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Auth;
