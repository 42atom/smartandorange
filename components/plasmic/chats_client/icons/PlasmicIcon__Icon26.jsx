// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon26Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 20h16M4 20v-4l8-8M4 20h4l8-8m-4-4l2.869-2.869.001-.001c.395-.395.593-.593.821-.667a1 1 0 01.618 0c.228.074.425.272.82.666l1.74 1.74c.396.396.594.594.668.822a1 1 0 010 .618c-.074.228-.272.426-.668.822h0L16 12.001m-4-4l4 4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */
