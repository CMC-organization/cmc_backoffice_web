import * as React from "react";
const SVGComponent = (props) => (
  <svg
    fill="#3466e3"
    width={24}
    height={24}
    viewBox="0 0 3 3"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#3466e3"
    strokeWidth={0}
    {...props}
  >
    <path
      fill="#fff"
      d="M1.485 0a1.485 1.485 0 0 1 1.484 1.485 1.485 1.485 0 0 1-1.484 1.484A1.485 1.485 0 0 1 0 1.485 1.485 1.485 0 0 1 1.485 0z"
      stroke="none"
    />
    <g
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#ccc"
      strokeWidth={0.048}
    />
    <path
      d="M1.485.247C.804.247.247.804.247 1.485s.557 1.237 1.237 1.237 1.237-.557 1.237-1.237S2.165.247 1.485.247zm.52 1.027-.594.594a.12.12 0 0 1-.173 0l-.272-.272a.12.12 0 0 1 0-.173.12.12 0 0 1 .173 0l.186.186.507-.507a.12.12 0 0 1 .173 0 .12.12 0 0 1 0 .173z"
      stroke="none"
    />
  </svg>
);
export default SVGComponent;


