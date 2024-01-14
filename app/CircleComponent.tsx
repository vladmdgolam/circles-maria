import { useAnimationFrame } from "framer-motion"
import { useRef } from "react"

import { SVGElementProperties } from "./Scene"

export const CircleComponent = ({ cx, cy, r, fill }: SVGElementProperties) => {
  const ref = useRef<SVGCircleElement>(null)
  useAnimationFrame((time, delta) => {
    if (!ref.current) return
    ref.current.style.transform = `rotateY(${time}deg)`
  })

  return <circle cx={cx} cy={cy} r={r} fill={fill} ref={ref} />
}
