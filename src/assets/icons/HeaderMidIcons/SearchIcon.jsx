import * as React from "react"

const SearchIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M5 11.146a6.144 6.144 0 1 1 12.288-.002A6.144 6.144 0 0 1 5 11.146Z"
      stroke="#7D818E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.488 15.49 19 19.002"
      stroke="#7D818E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SearchIcon