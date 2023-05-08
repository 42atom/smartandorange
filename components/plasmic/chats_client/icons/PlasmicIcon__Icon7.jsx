// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17 23a2 2 0 002-2V3a2 2 0 00-2-2H7a2 2 0 00-2 2v18a2 2 0 002 2zM7 3h2.5l.5 1h4l.5-1H17v18H7zm6 16a1 1 0 11-1-1 1 1 0 011 1z"
        }
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
