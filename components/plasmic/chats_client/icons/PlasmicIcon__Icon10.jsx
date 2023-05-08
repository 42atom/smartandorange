// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon10Icon(props) {
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
          "M2.863 16.213v-.474a3.773 3.773 0 014.513-3.7c3.052.611 6.196.611 9.248 0a3.773 3.773 0 014.513 3.7v.474a4.06 4.06 0 01-4.06 4.061H6.923a4.06 4.06 0 01-4.061-4.06z"
        }
        stroke={"#1C1C1C"}
        strokeWidth={"1.7"}
        strokeLinecap={"round"}
      ></path>

      <circle cx={"12.761"} cy={"3.777"} r={"1.777"} fill={"#DF1463"}></circle>

      <circle cx={"14.2"} cy={"8.261"} r={"1.184"} fill={"#DF1463"}></circle>

      <circle cx={"9.716"} cy={"7.838"} r={"1.777"} fill={"#DF1463"}></circle>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
