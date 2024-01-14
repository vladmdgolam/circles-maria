import { useControls } from "leva"

import { CircleComponent, SVGElementProperties } from "./CircleComponent"

interface SVGElement {
  children: SVGElement[] // Assuming children could also be SVG elements
  properties: SVGElementProperties
  tagName: "circle" | "rect"
  type: string
}

export type Shapes = SVGElement[]

export const Scene = ({ shapes }: { shapes: Shapes }) => {
  const { clockwise, counterclockwise } = useControls("Animation Direction", {
    clockwise: false,
    counterclockwise: false,
  })

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 720 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {shapes.map((shape, index) => {
        const { cx, cy, r, width, height, fill, x, y } = shape.properties
        const { tagName } = shape
        if (tagName === "circle") {
          return (
            <CircleComponent
              key={index}
              cx={cx}
              cy={cy}
              r={r}
              fill="white"
              clockwise={clockwise}
              counterclockwise={counterclockwise}
            />
          )
        } else if (tagName === "rect") {
          return <rect key={index} x={x} y={y} width={width} height={height} fill="white" />
        }
      })}
    </svg>
  )
}
