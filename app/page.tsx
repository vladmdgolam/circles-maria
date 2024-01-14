"use client"

import { useEffect } from "react"
import { parse } from "svg-parser"

import maria from "./maria.svg"

export default function Home() {
  const svg = parse(maria)

  useEffect(() => {
    const shapes = svg.children[0]
  }, [])

  return <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
}
