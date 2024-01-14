"use client"

import { useEffect } from "react"
import { parse } from "svg-parser"

import maria from "./maria.svg"

interface ParsedSVG {
  children: {
    children?: any[] // Replace `any` with a more specific type if possible
  }[]
}

export default function Home() {
  const svg = parse(maria) as ParsedSVG

  useEffect(() => {
    if (svg.children[0].children && svg.children[0].children.length > 0) {
      const shapes = svg.children[0].children
      console.log(shapes)
    }
  }, [])

  return <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
}
