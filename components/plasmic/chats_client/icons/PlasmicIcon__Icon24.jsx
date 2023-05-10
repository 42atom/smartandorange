// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon24Icon(props) {
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

      <g strokeWidth={"1.702"}>
        <path
          d={"M12.01 2.851a4.066 4.066 0 110 8.133 4.066 4.066 0 010-8.133z"}
          stroke={"#DF1463"}
        ></path>

        <path
          d={
            "M5.937 17.57l-.398 1.368a1.727 1.727 0 001.658 2.21h9.626a1.727 1.727 0 001.658-2.21l-.4-1.367a6.325 6.325 0 00-12.144 0z"
          }
          stroke={"#1C1C1C"}
        ></path>
      </g>
    </svg>
  );
}

export default Icon24Icon;
/* prettier-ignore-end */
