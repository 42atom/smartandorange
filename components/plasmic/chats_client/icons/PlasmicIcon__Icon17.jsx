// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.731 8.16a.76.76 0 00-.019-.095l.001.005a.732.732 0 00-.182-.342l-6.297-6.296a.75.75 0 00-.336-.181l-.005-.001a.659.659 0 00-.091-.019h-.004a.682.682 0 00-.092-.018h-9.449a.75.75 0 00-.75.75v22.038c0 .414.336.75.75.75h15.742a.75.75 0 00.75-.75V8.259a.897.897 0 00-.02-.103l.001.005zm-6.278-4.387l3.736 3.735h-3.736zM15.008 23.25V2.712h7.945v5.546c0 .414.336.75.75.75h5.547V23.25zm2.734 4a.75.75 0 00-.75.75v1.27H2.75V8.731H10a.75.75 0 000-1.5H2a.75.75 0 00-.75.75V30.02c0 .414.336.75.75.75h15.742a.75.75 0 00.75-.75V28a.75.75 0 00-.75-.75z"
        }
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
