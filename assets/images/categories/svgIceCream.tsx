import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const svgIceCream = ({fill, ...props}) => {
  return (
    <Svg
      viewBox="0 0 24 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 10h-.063c0-.313.063-.625.063-1 0-5-4.063-9-9-9-5 0-9 4-9 9v1a3 3 0 00-3 3c0 1.688 1.313 3 3 3h18a3 3 0 003-3c0-1.625-1.375-3-3-3zM10.187 30.875c.313.688 1 1.188 1.813 1.188.75 0 1.438-.5 1.75-1.188L20 18H4l6.188 12.875z"
        fill = {fill}
      />
    </Svg>
  )
}