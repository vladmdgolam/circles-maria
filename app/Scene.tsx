interface SVGElementProperties {
  cx?: number
  cy?: number
  r?: number
  fill?: string
  tagName: string
  type: string
}

interface SVGElement {
  children: SVGElement[] // Assuming children could also be SVG elements
  properties: SVGElementProperties
  tagName: string
  type: string
}

export type Shapes = SVGElement[]

export const Scene = ({ shapes }: { shapes: Shapes }) => {
  return (
    <svg
      width="720"
      height="124"
      viewBox="0 0 720 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {shapes.map((shape, index) => {
        const { cx, cy, r, fill, tagName } = shape.properties
        return <circle key={index} cx={cx} cy={cy} r={r} fill={"white"} />
      })}
    </svg>
  )
}
