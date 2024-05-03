import * as React from 'react';
const SVGComponent = (props) => (
 <svg width={26} height={25} viewBox='0 0 26 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  <g clipPath='url(#a)'>
   <path
    d='M21.714 20.964c4.789-4.796 4.789-12.571 0-17.367s-12.55-4.796-17.339 0-4.788 12.57 0 17.367c4.788 4.795 12.551 4.795 17.34 0'
    fill='#fff'
   />
   <path
    d='M17.752 16.994a6.57 6.57 0 0 0 0-9.283 6.546 6.546 0 0 0-9.268 0 6.57 6.57 0 0 0 0 9.283 6.546 6.546 0 0 0 9.268 0m-6.722-6.825 4.361 4.368m-4.361 0 4.361-4.369'
    stroke='#C40024'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
   />
  </g>
  <defs>
   <clipPath id='a'>
    <path fill='#fff' d='M.783 0h24.522v24.56H.783z' />
   </clipPath>
  </defs>
 </svg>
);
export default SVGComponent;
