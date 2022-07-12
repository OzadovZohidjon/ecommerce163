import * as React from "react"

const ProfileIcon = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 10a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      fill="#F2F3F5"
      stroke="#505567"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.026 14.742c1.456.93.543 2.758-1.207 2.758H5.18c-1.75 0-2.663-1.829-1.207-2.758A11.173 11.173 0 0 1 10 13c2.23 0 4.302.642 6.026 1.742Z"
      fill="#F2F3F5"
      stroke="#505567"
      strokeWidth={1.5}
    />
  </svg>
)

export default ProfileIcon