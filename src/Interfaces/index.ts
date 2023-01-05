import { ChangeEventHandler, ReactElement } from "react";
import { MouseEventHandler } from "react";

export interface TextField {
  label: string;
  type: string;
  placeholder: string;
  className: string;
  onChange: ChangeEventHandler;
}

export interface IButton {
  buttonText: string;
  classNames?: string;
  spinner?: ReactElement;
  onClickFn?: MouseEventHandler;
  loading: Boolean;
}

export interface IUser {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}
