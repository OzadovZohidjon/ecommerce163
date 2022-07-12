import * as React from "react"

const ClockIcon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={8} cy={8} r={6} stroke="#505567" strokeWidth={1.5} />
    <path
      d="M8 5.333V8l2 1.333"
      stroke="#505567"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ClockIcon