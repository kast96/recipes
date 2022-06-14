import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const SvgGlassMartiniAlt = ({fill, ...props}) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40h-56V271.64L502.05 57.6zM443.77 48l-48 48H116.24l-48-48h375.53z"
        fill = {fill}
      />
    </Svg>
  )
}