import { useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"

import { SVGElementProperties } from "./Scene"

export const CircleComponent = ({ cx, cy, r, fill }: SVGElementProperties) => {
  const ref = useRef<SVGCircleElement>(null)
  const [pathDirection, setPathDirection] = useState<"clockwise" | "counterclockwise">(
    Math.random() > 0.5 ? "clockwise" : "counterclockwise"
  )

  useAnimationFrame((time, delta) => {
    if (!ref.current) return
    const side = 5
    const speed = 0.05 // Adjust speed as necessary
    const timeAdjustedSpeed = (time * speed) % (side * 4)
    let x, y
    if (pathDirection === "clockwise") {
      if (timeAdjustedSpeed <= side) {
        x = timeAdjustedSpeed - side / 2
        y = -side / 2
      } else if (timeAdjustedSpeed <= side * 2) {
        x = side / 2
        y = -side / 2 + (timeAdjustedSpeed - side)
      } else if (timeAdjustedSpeed <= side * 3) {
        x = side / 2 - (timeAdjustedSpeed - side * 2)
        y = side / 2
      } else {
        x = -side / 2
        y = side / 2 - (timeAdjustedSpeed - side * 3)
      }
    } else {
      // counterclockwise
      if (timeAdjustedSpeed <= side) {
        x = side / 2 - timeAdjustedSpeed
        y = -side / 2
      } else if (timeAdjustedSpeed <= side * 2) {
        x = -side / 2
        y = -side / 2 + (timeAdjustedSpeed - side)
      } else if (timeAdjustedSpeed <= side * 3) {
        x = -side / 2 + (timeAdjustedSpeed - side * 2)
        y = side / 2
      } else {
        x = side / 2
        y = side / 2 - (timeAdjustedSpeed - side * 3)
      }
    }
    if (pathDirection !== "clockwise") ref.current.style.transform = `translate(${x}px, ${y}px)`
  })

  return <circle cx={cx} cy={cy} r={r} fill={fill} ref={ref} />
}
