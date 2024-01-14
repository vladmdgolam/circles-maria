"use client"

import { useMemo } from "react"
import { parse } from "svg-parser"

import maria from "./maria.svg"
import { Scene } from "./Scene"

interface ParsedSVG {
  children: {
    children?: any[] // Replace `any` with a more specific type if possible
  }[]
}

export default function Home() {
  const svg = parse(maria) as ParsedSVG

  const shapes = useMemo(() => {
    if (svg.children[0].children && svg.children[0].children.length > 0) {
      return svg.children[0].children
    }
    return []
  }, [svg])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {shapes && <Scene shapes={shapes} />}
    </main>
  )
}
