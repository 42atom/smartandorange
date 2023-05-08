// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon19Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.383 12.699a.751.751 0 00-.713-.519h-9.898l-3.059-9.412a.78.78 0 00-1.424-.005l-.002.005-3.059 9.412H2.331a.75.75 0 00-.442 1.355l.002.001 8.007 5.818-3.059 9.412a.75.75 0 001.155.839l-.002.001L16 23.788l8.006 5.818a.75.75 0 001.152-.845l.002.005-3.059-9.412 8.01-5.818a.747.747 0 00.27-.843l.002.005zm-9.604 5.762a.75.75 0 00-.27.845l-.002-.005 2.514 7.736-6.581-4.783a.747.747 0 00-.883.001l.002-.002-6.581 4.783 2.514-7.736a.747.747 0 00-.27-.838l-.002-.001-6.58-4.78h8.135a.747.747 0 00.71-.513l.002-.005 2.514-7.735 2.514 7.735c.1.303.381.519.713.519h8.135z"
        }
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
