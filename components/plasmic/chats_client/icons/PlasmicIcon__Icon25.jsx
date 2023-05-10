// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon25Icon(props) {
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
          "M2.832 4.387h.511c.86 0 1.618.56 1.87 1.381l3.065 9.958a1.957 1.957 0 001.87 1.381h6.963c.826 0 1.563-.518 1.842-1.295l2.04-5.68c.686-1.913-.731-3.928-2.763-3.928h-7.57"
        }
        stroke={"#1C1C1C"}
        strokeWidth={"1.7"}
        strokeLinecap={"round"}
      ></path>

      <circle cx={"10.171"} cy={"20.532"} r={"1.468"} fill={"#DF1463"}></circle>

      <circle cx={"17.02"} cy={"20.532"} r={"1.468"} fill={"#DF1463"}></circle>
    </svg>
  );
}

export default Icon25Icon;
/* prettier-ignore-end */
