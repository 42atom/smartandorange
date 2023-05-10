// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon23Icon(props) {
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

      <g strokeWidth={"1.7"} strokeLinecap={"round"}>
        <path
          d={
            "M2.844 18.638v-7.325c0-1.011.82-1.83 1.832-1.83h14.649c1.01 0 1.83.819 1.83 1.83v7.325a1.83 1.83 0 01-1.83 1.83H4.675a1.831 1.831 0 01-1.83-1.83z"
          }
          stroke={"#1C1C1C"}
        ></path>

        <path
          d={"M9.271 15.873l.683.682a.965.965 0 001.364 0l3.41-3.41"}
          stroke={"#DF1463"}
        ></path>

        <path
          d={
            "M4.676 9.482v-.916c0-1.01.82-1.83 1.83-1.83h10.987c1.012 0 1.832.82 1.832 1.83v.916M7.033 6.604v-.828c0-.914.741-1.656 1.656-1.656h6.622c.915 0 1.656.742 1.656 1.656v.828"
          }
          stroke={"#1C1C1C"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon23Icon;
/* prettier-ignore-end */
