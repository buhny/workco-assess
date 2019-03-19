import React from "react";

const CartIcon = ({
  style = {},
  fill = "#000",
  height = "1%",
  width = "1%",
  className = "",
  viewBox = "0 0 72 57"
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
    <g id="Mobile-Copy-3" transform="translate(-125.000000, -222.000000)" fill={fill} fillRule="nonzero">
      <path
      d="M196.719273,238.308833 C196.434063,237.909544 195.972403,237.672089 195.4788,237.672089 L139.969339,237.672089 L135.866879,223.10485 C135.683584,222.451469 135.084263,222 134.402041,222 L126.52112,222 C125.681462,222 125,222.677581 125,223.512458 C125,224.347335 125.681462,225.024916 126.52112,225.024916 L133.249032,225.024916 L142.833607,259.060512 C139.316779,259.115716 136.471524,261.973505 136.471524,265.483164 C136.471524,269.027609 139.371539,271.91111 142.936283,271.91111 L144.885598,271.91111 C144.633853,272.502481 144.49467,273.152082 144.49467,273.833444 C144.49467,276.561162 146.726913,278.780694 149.469492,278.780694 C152.212832,278.780694 154.445075,276.561162 154.445075,273.833444 C154.445075,273.152082 154.305132,272.502481 154.054147,271.91111 L170.161284,271.91111 C169.846412,272.559954 169.664638,273.284422 169.664638,274.05275 C169.664638,276.780468 171.896881,279 174.63946,279 C177.382039,279 179.614282,276.780468 179.614282,274.05275 C179.614282,273.285178 179.432508,272.560711 179.117636,271.91111 L181.789483,271.91111 C182.629141,271.91111 183.310603,271.233529 183.310603,270.398652 C183.310603,269.563775 182.629141,268.886194 181.789483,268.886194 L142.935522,268.886194 C141.048573,268.886194 139.513003,267.359368 139.513003,265.483164 C139.513003,263.60696 141.048573,262.080134 142.935522,262.080134 L144.83388,262.080134 C144.83464,262.080134 144.835401,262.080134 144.836162,262.080134 C144.836922,262.080134 144.837683,262.080134 144.839204,262.080134 L187.991849,262.080134 C188.75393,262.080134 189.37911,261.520524 189.490152,260.793788 L196.914737,239.683657 C197.077497,239.220845 197.004483,238.708878 196.719273,238.308833 Z M174.638699,275.973572 C173.573155,275.973572 172.706117,275.111471 172.706117,274.051238 C172.706117,272.991005 173.573155,272.128904 174.638699,272.128904 C175.704244,272.128904 176.571282,272.991005 176.571282,274.051238 C176.571282,275.111471 175.704244,275.973572 174.638699,275.973572 Z M151.402075,273.831931 C151.402075,274.891408 150.534276,275.754265 149.468732,275.754265 C148.403187,275.754265 147.536149,274.892164 147.536149,273.831931 C147.536149,272.771698 148.403187,271.909597 149.468732,271.909597 C150.534276,271.909597 151.402075,272.772455 151.402075,273.831931 Z M192.153632,244.056173 L181.686047,244.056173 L182.16596,240.696248 L193.335542,240.696248 L192.153632,244.056173 Z M189.538067,251.492929 L180.623545,251.492929 L181.254049,247.081845 L191.09037,247.081845 L189.538067,251.492929 Z M186.87915,259.055218 L179.542789,259.055218 L180.190786,254.517844 L188.475565,254.517844 L186.87915,259.055218 Z M168.676671,259.055218 L168.676671,254.517844 L177.118124,254.517844 L176.469367,259.055218 L168.676671,259.055218 Z M157.841735,259.055218 L157.192977,254.517844 L165.634431,254.517844 L165.634431,259.055218 L157.841735,259.055218 Z M145.990691,259.055218 L144.712951,254.517844 L154.120316,254.517844 L154.768313,259.055218 L145.990691,259.055218 Z M168.676671,244.056173 L168.676671,240.696248 L179.092538,240.696248 L178.612625,244.056173 L168.676671,244.056173 Z M178.180627,247.081089 L177.550122,251.492172 L168.676671,251.492172 L168.676671,247.081089 L178.180627,247.081089 Z M165.634431,244.056173 L155.697717,244.056173 L155.217804,240.696248 L165.633671,240.696248 L165.633671,244.056173 L165.634431,244.056173 Z M165.634431,247.081089 L165.634431,251.492172 L156.760979,251.492172 L156.130475,247.081089 L165.634431,247.081089 Z M153.687557,251.492929 L143.861124,251.492929 L142.618369,247.081845 L153.057053,247.081845 L153.687557,251.492929 Z M152.144381,240.697004 L152.624294,244.056929 L141.767303,244.056929 L140.821166,240.697004 L152.144381,240.697004 Z">
      </path>
    </g>

  </svg>
);

export default CartIcon;
