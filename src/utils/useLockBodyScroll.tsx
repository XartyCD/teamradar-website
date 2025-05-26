import { useEffect } from "react"

export const useLockPageScroll = (active: boolean) => {
  useEffect(() => {
    if (!active) return

    const html = document.documentElement
    const body = document.body
    const [prevHtml, prevBody] = [html.style.overflow, body.style.overflow]

    html.style.overflow = body.style.overflow = "hidden"

    return () => {
      html.style.overflow = prevHtml
      body.style.overflow = prevBody
    }
  }, [active])
}
