import * as React from 'react';
const SVGComponent = (props) => (
 <svg
  width='25px'
  height='25px'
  viewBox='0 0 24 24'
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  stroke='#C40024'
  strokeWidth={1}
  strokeLinecap='round'
  strokeLinejoin='miter'
  data-darkreader-inline-stroke=''
  style={{
   '--darkreader-inline-stroke': '#ff4365',
  }}
  xmlnsXlink='http://www.w3.org/1999/xlink'
  transform='matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)'
  {...props}
 >
  <g id='SVGRepo_bgCarrier' strokeWidth={0} />
  <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
  <g id='SVGRepo_iconCarrier'>
   <circle cx={12} cy={12} r={10} />
   <polyline points='16 14 12 9 8 14' />
  </g>
 </svg>
);
export default SVGComponent;
