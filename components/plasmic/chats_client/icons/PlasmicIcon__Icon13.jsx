// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon13Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
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
          "M42.667 106.667h426.666v42.666H42.667v-42.666zm0 128h426.666v42.666H42.667v-42.666zm0 128h426.666v42.666H42.667v-42.666z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
