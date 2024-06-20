import * as React from 'react';
const SVGComponent = (props) => (
 <svg width={13} height={13} viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  <path
   d='M12.458 11.917h-1.625V3.25a2.17 2.17 0 0 0-2.167-2.167h-.29A2.16 2.16 0 0 0 6.074.043l-1.73.345a2.716 2.716 0 0 0-2.177 2.655v8.873H.54A.542.542 0 1 0 .54 13h11.917a.542.542 0 1 0 0-1.083m-3.792-9.75c.597 0 1.083.485 1.083 1.083v8.667H8.666zm-5.417.877c0-.772.55-1.442 1.306-1.593l1.731-.346c.32-.065.648.018.9.224s.396.512.396.838v9.75H3.249zM6.5 6.771a.813.813 0 1 1-1.625 0 .813.813 0 0 1 1.625 0'
   fill={props.color ? props.color : '#FFFFFF'}
  />
 </svg>
);
export default SVGComponent;
