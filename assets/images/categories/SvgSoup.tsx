import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const SvgSoup = ({fill, ...props}) => {
  return (
    <Svg
      viewBox="100 100 500 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M546 40.445l-177.33 177.33h87.109l133.78-133.78c12.445-12.445 12.445-31.109 0-43.555-12.445-12.445-31.109-12.445-43.555 0zM101.11 248.89c0 105.78 65.332 192.89 155.55 230.22v46.668h186.67V479.11c90.223-37.332 155.55-127.55 155.55-230.22H101.1z"
        fill = {fill}
      />
    </Svg>
  )
}