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
  return <> </>
}
