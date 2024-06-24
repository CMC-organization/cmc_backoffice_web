import * as React from 'react';
const SVGComponent = (props) => (
 <svg width={10} height={7} viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  <path
   fillRule='evenodd'
   clipRule='evenodd'
   d='M.414 1.633a.746.746 0 1 1 1.134-.97l2.692 3.15a1 1 0 0 0 1.52 0L8.452.664a.746.746 0 1 1 1.134.97L5.76 6.11a1 1 0 0 1-1.52 0z'
   fill={props.color}
  />
 </svg>
);
export default SVGComponent;
