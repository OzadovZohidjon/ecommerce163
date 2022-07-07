import * as React from "react"

const ClockIcon = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={7} cy={7} r={6} stroke="#505567" strokeWidth={1.5} />
    <path
      d="M7 4.333V7l2 1.333"
      stroke="#505567"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ClockIcon
