import * as React from 'react';
const SVGComponent = (props) => (
 <svg width={8} height={9} viewBox='0 0 8 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  <rect y={0.162} width={7.962} height={8} rx={3.981} fill={props.color ? props.color : '#C40024'} />
 </svg>
);
export default SVGComponent;
