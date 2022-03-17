import { HTMLAttributes } from "react"

const ICCancel = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.129 12.033 5.644-5.671a.813.813 0 0 0 0-1.126.804.804 0 0 0-1.128-.008L12 10.898l-5.645-5.67a.804.804 0 0 0-1.12 0 .813.813 0 0 0-.009 1.134l5.645 5.67-5.645 5.672a.813.813 0 0 0 .075 1.059.804.804 0 0 0 1.054.075L12 13.167l5.645 5.671c.32.242.77.21 1.053-.075a.813.813 0 0 0 .075-1.06l-5.644-5.67Z"
      fill="#70727D"
    />
  </svg>
)

export default ICCancel