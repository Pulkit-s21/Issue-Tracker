"use client"

import dynamic from "next/dynamic"
import "easymde/dist/easymde.min.css"
import React from "react"

// avoiding navigator issue from Next.JS
const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
})

const MarkdownEditor = (props: any) => {
  return <SimpleMdeEditor {...props} />
}

export default MarkdownEditor
