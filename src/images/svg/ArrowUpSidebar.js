import * as React from 'react';
const SVGComponent = (props) => (
 <svg width={10} height={7} viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  <path
   fillRule='evenodd'
   clipRule='evenodd'
   d='M9.578 5.365a.746.746 0 1 1-1.134.97l-2.692-3.15a1 1 0 0 0-1.52 0L1.54 6.334a.746.746 0 1 1-1.134-.97L4.232.888a1 1 0 0 1 1.52 0z'
   fill={props.color}
  />
 </svg>
);
export default SVGComponent;
