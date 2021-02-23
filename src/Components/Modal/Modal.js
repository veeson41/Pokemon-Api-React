import React, { Fragment } from "react";
import { Backdrop } from "./Backdrop";

export const Modal = ({ children, show }) => {
  return <Fragment>{show && <div>{children}</div>}</Fragment>;
};
