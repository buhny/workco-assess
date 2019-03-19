import React from "react";

const CloseIcon = ({
  style = {},
  fill = "#000",
  height = "1%",
  width = "1%",
  className = "",
  viewBox = "0 0 22 22"
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
    <g id="Mobile-Copy-3" transform="translate(-280.000000, -17.000000)" stroke={fill} stroke-width="2">
        <g id="Group" transform="translate(281.000000, 18.000000)">
            <path d="M0.476190476,0.476190476 L19.7721901,19.7721901" id="Line-3"></path>
            <path d="M19,1 L0,20" id="Line-3"></path>
        </g>
    </g>
  </svg>
);

export default CloseIcon;
