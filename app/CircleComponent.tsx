import { SVGElementProperties } from "./Scene"

export const CircleComponent = ({ cx, cy, r, fill }: SVGElementProperties) => (
  <circle cx={cx} cy={cy} r={r} fill={fill} />
)
