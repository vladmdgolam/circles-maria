import { useAnimationFrame } from "framer-motion"
import { useControls } from "leva"
import { useRef, useState } from "react"

export interface SVGElementProperties {
  cx?: number
  cy?: number
  r?: number
  width?: number
  height?: number
  fill?: string
  x?: number
  y?: number
}

type CircleProps = {
  clockwise?: boolean
  counterclockwise?: boolean
}

export const CircleComponent = ({
  cx,
  cy,
  r,
  fill,
  clockwise,
  counterclockwise,
}: SVGElementProperties & CircleProps) => {
  const ref = useRef<SVGCircleElement>(null)
  const [pathDirection, setPathDirection] = useState<"clockwise" | "counterclockwise">(
    Math.random() > 0.5 ? "clockwise" : "counterclockwise"
  )

  const { side } = useControls({
    side: {
      value: 10,
      min: 0.1,
      max: 100,
      step: 0.01,
    },
  })

  useAnimationFrame((time, delta) => {
    if (!ref.current) return
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
    if (
      (clockwise && pathDirection === "clockwise") ||
      (counterclockwise && pathDirection === "counterclockwise")
    ) {
      ref.current.style.transform = `translate(${x}px, ${y}px)`
    }
  })

  // Calculate the top-left corner of the rectangle
  const rectX = cx! - side / 2
  const rectY = cy! - side / 2

  return (
    <>
      <rect x={rectX} y={rectY} width={side} height={side} stroke="red" fill="none" />

      <circle cx={cx} cy={cy} r={r} fill={fill} ref={ref} />
    </>
  )
}
