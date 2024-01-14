"use client"

import useHotkey from "@/hooks/useHotkey"
import { Leva } from "leva"
import { useMemo, useState } from "react"
import { parse } from "svg-parser"

import maria from "./maria.svg"
import { Scene } from "./Scene"

interface ParsedSVG {
  children: {
    children?: any[] // Replace `any` with a more specific type if possible
  }[]
}

const Menu = () => {
  const [menu, setMenu] = useState<boolean | null>(true)
  useHotkey("m", () => setMenu((menu) => !menu))

  return <Leva hidden={!menu} />
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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Menu />
      {shapes && <Scene shapes={shapes} />}
    </main>
  )
}
