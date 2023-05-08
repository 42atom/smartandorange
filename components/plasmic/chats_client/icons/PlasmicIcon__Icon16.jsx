// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon16Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 21 21"}
      version={"1.1"}
      fill={"currentColor"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.556 12.206a1.877 1.877 0 00-.547 1.669l.678 3.916C17.897 19.01 16.92 20 15.813 20c-.292 0-.593-.069-.885-.221l-3.544-1.849a1.918 1.918 0 00-1.769 0l-3.544 1.849a1.907 1.907 0 01-.885.221c-1.107 0-2.084-.99-1.873-2.209l.677-3.916a1.877 1.877 0 00-.547-1.669L.576 9.433C-.552 8.342.07 6.441 1.629 6.216l3.963-.571a1.897 1.897 0 001.43-1.032l1.773-3.562A1.88 1.88 0 0110.5 0c.679 0 1.357.35 1.706 1.051l1.772 3.562c.276.557.812.943 1.431 1.032l3.963.571c1.558.225 2.18 2.126 1.053 3.217l-2.868 2.773z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
