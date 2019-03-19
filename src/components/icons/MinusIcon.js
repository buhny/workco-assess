import React from "react";

const MinusIcon = ({
  style = {},
  fill = "#000",
  height = "1%",
  width = "1%",
  className = "",
  viewBox = "0 0 16 2"
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
    <g id="Mobile-Copy-4" transform="translate(-57.000000, -239.000000)" stroke={fill} stroke-width="2">
      <path d="M58,240 L72,240" id="Line-2"></path>
    </g>
  </svg>
);

export default MinusIcon;
