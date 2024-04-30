import * as React from 'react';
const SVGComponent = (props) => (
 <svg width={20} height={20} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  <g clipPath='url(#a)' fill={props.color}>
   <path d='M18.928 3.398a2.5 2.5 0 0 0-1.92-.898H3.535L3.5 2.208A2.5 2.5 0 0 0 1.018 0H.833a.833.833 0 0 0 0 1.667h.185a.833.833 0 0 1 .828.735l1.147 9.75a4.167 4.167 0 0 0 4.138 3.681h8.702a.834.834 0 0 0 0-1.666H7.131A2.5 2.5 0 0 1 4.78 12.5h9.933a4.166 4.166 0 0 0 4.101-3.427l.654-3.629a2.5 2.5 0 0 0-.542-2.046m-1.095 1.75-.655 3.629a2.5 2.5 0 0 1-2.464 2.056H4.516l-.784-6.666h13.276a.833.833 0 0 1 .825.981M5.833 20a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334m8.334 0a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333' />
  </g>
  <defs>
   <clipPath id='a'>
    <path fill='#fff' d='M0 0h20v20H0z' />
   </clipPath>
  </defs>
 </svg>
);
export default SVGComponent;
