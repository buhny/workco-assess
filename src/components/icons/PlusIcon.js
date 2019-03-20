import React from "react";

const PlusIcon = ({
  style = {},
  fill = "#000",
  height = "1%",
  width = "1%",
  className = "",
  viewBox = "0 0 16 15"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  <g id="Mobile-Copy-4" transform="translate(-247.000000, -233.000000)" stroke={fill} strokeWidth="2">
      <g id="Group-2" transform="translate(248.000000, 234.000000)">
          <path d="M0.333333333,6.5 L13.6833229,6.5" id="Line-2"></path>
          <path d="M7,0 L7,13" id="Line-2"></path>
      </g>
  </g>
  </svg>
);

export default PlusIcon;
