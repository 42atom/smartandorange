// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon21Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 64 64"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#F9EBB2"} d={"M8 8h48v48H8z"}></path>

      <g fill={"#394240"}>
        <path
          d={
            "M60 0H4C1.789 0 0 1.789 0 4v56c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4zm-4 56H8V8h48v48z"
          }
        ></path>

        <path
          d={
            "M28 20h20c2.211 0 4-1.789 4-4s-1.789-4-4-4H28c-2.211 0-4 1.789-4 4s1.789 4 4 4z"
          }
        ></path>

        <circle cx={"16"} cy={"16"} r={"4"}></circle>
      </g>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
