import * as React from "react"
const AddIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g fill="#C40024" clipPath="url(#a)">
      <path d="M19.167 9.166H17.5V7.499a.833.833 0 1 0-1.667 0v1.667h-1.666a.833.833 0 0 0 0 1.667h1.666v1.666a.833.833 0 1 0 1.667 0v-1.666h1.667a.833.833 0 1 0 0-1.667ZM7.5 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-8.333a3.333 3.333 0 1 1 0 6.666 3.333 3.333 0 0 1 0-6.666ZM7.5 11.666a7.508 7.508 0 0 0-7.5 7.5.833.833 0 0 0 1.667 0 5.833 5.833 0 0 1 11.666 0 .833.833 0 0 0 1.667 0 7.508 7.508 0 0 0-7.5-7.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default AddIcon
