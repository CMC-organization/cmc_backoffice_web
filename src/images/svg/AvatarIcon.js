import * as React from "react"
const AvatarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={79}
    fill="none"
    {...props}
  >
    <g fill="#C40024" clipPath="url(#a)">
      <path d="M29.625 39.5a19.75 19.75 0 1 0-19.75-19.75 19.77 19.77 0 0 0 19.75 19.75Zm0-32.917a13.167 13.167 0 1 1 0 26.333 13.167 13.167 0 0 1 0-26.333ZM29.625 46.083A29.658 29.658 0 0 0 0 75.708a3.292 3.292 0 1 0 6.583 0 23.042 23.042 0 1 1 46.084 0 3.292 3.292 0 1 0 6.583 0 29.658 29.658 0 0 0-29.625-29.625Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h59.25v79H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default AvatarIcon
