// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SuitcaseMenusvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -43.5 1111 1111"}
      className={classNames("plasmic-default__svg", className, "icon")}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M694.857 153.6v263.314l43.886-43.885h-358.4l43.886 43.885V153.6h270.628zm87.772 219.429v-87.772h131.657V777.51h87.771V285.257c0-48.274-39.497-87.771-87.771-87.771H782.629V153.6c0-48.274-39.498-87.771-87.772-87.771H424.23c-48.275 0-87.772 39.497-87.772 87.771v43.886H197.486c-48.275 0-87.772 39.497-87.772 87.771v177.006h87.772V285.257h138.971v87.772H197.486V460.8h716.8v-87.771H782.629zM197.486 870.4V551.497h-87.772V870.4c0 48.274 39.497 87.771 87.772 87.771h716.8c48.274 0 87.771-39.497 87.771-87.771H197.486z"
        }
        fill={"#0C92F2"}
      ></path>

      <path
        d={"M424.229 197.486h270.628v87.771H424.23z"}
        fill={"#0C92F2"}
      ></path>

      <path
        d={"M292.571 555.886H819.2v219.428H292.571z"}
        fill={"#A8C8E6"}
      ></path>

      <path
        d={"M292.571 555.886l263.315 219.428H292.57z"}
        fill={"#61B6F2"}
      ></path>

      <path d={"M555.886 555.886H819.2v219.428z"} fill={"#FC830A"}></path>
    </svg>
  );
}

export default SuitcaseMenusvgIcon;
/* prettier-ignore-end */
