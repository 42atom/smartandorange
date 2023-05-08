// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-1 0 19 19"}
      className={classNames("plasmic-default__svg", className, "cf-icon-svg")}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.417 9.583A7.917 7.917 0 118.5 1.666a7.917 7.917 0 017.917 7.917zm-3.08-1.993l-1.472-.174-1.485-.176-1.247-2.704c-.345-.747-.908-.747-1.253 0L6.633 7.24l-1.485.176-1.471.174c-.817.097-.991.633-.387 1.192l1.088 1.006 1.098 1.015-.292 1.467-.289 1.453c-.16.807.296 1.138 1.014.737l2.598-1.455 2.598 1.455c.717.401 1.173.07 1.013-.737l-.58-2.92 1.097-1.015 1.089-1.006c.604-.559.43-1.095-.387-1.192z"
        }
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
