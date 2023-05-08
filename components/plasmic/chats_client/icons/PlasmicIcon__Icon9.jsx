// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon9Icon(props) {
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

      <g strokeWidth={"1.699"}>
        <path
          d={"M7.472 8.029h8.44"}
          stroke={"#DF1463"}
          strokeLinecap={"round"}
        ></path>

        <path
          d={
            "M18.864 2.85H4.701a.915.915 0 00-.677 1.53l7.759 8.535 7.759-8.535a.915.915 0 00-.678-1.53z"
          }
          stroke={"#1C1C1C"}
        ></path>

        <path
          d={"M11.783 12.915v8.236"}
          stroke={"#1C1C1C"}
          strokeLinecap={"square"}
        ></path>

        <path
          d={"M7.208 21.15h9.15"}
          stroke={"#1C1C1C"}
          strokeLinecap={"round"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
