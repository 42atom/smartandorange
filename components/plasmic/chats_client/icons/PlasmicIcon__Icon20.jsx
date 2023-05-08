// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon20Icon(props) {
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
          "M30.383 12.699a.751.751 0 00-.713-.519h-9.898l-3.059-9.412a.78.78 0 00-1.424-.005l-.002.005-3.059 9.412H2.331a.75.75 0 00-.442 1.355l.002.001 8.007 5.818-3.059 9.412a.75.75 0 001.155.839l-.002.001L16 23.788l8.006 5.818a.75.75 0 001.152-.845l.002.005-3.059-9.412 8.01-5.818a.747.747 0 00.27-.843l.002.005z"
        }
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
