// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon22Icon(props) {
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

      <g strokeWidth={"1.699"} strokeLinecap={"round"}>
        <path
          d={
            "M20.85 12V6.51a3.66 3.66 0 00-3.66-3.66H6.51a3.66 3.66 0 00-3.66 3.66v10.98a3.66 3.66 0 003.66 3.66h5.34M7.003 12h2.999M7.003 8.002h5.996"
          }
          stroke={"#1C1C1C"}
        ></path>

        <path
          d={
            "M20.79 15.883l-1.953-1.986a.501.501 0 00-.717 0l-3.757 3.819a.521.521 0 00-.145.42l.214 1.996c.013.12.107.215.225.228l1.963.219a.503.503 0 00.414-.148l3.756-3.819a.522.522 0 000-.73z"
          }
          stroke={"#DF1463"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
