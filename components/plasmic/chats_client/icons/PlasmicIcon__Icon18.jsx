// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon18Icon(props) {
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
          "M30 7.249h-5.598l-3.777-5.665A.754.754 0 0020 1.25h-8.001a.745.745 0 00-.621.331l-.002.003-3.777 5.665H2a.75.75 0 000 1.5h3.315l1.938 21.319A.75.75 0 008 30.75h16.002c.39 0 .71-.298.745-.679v-.003l1.938-21.319h3.316a.75.75 0 000-1.5zM12.401 2.75h7.196l2.999 4.499H9.401zm10.913 26.5H8.684L6.821 8.75l18.358-.001zM11 11.25a.75.75 0 00-.75.75v14a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75zm5 0a.75.75 0 00-.75.75v14a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75zm5 0a.75.75 0 00-.75.75v14a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75z"
        }
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
