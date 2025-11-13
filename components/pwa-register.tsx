"use client"

import { useEffect } from "react"

export default function PWARegister() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("[v0] Service Worker registered successfully:", registration.scope)
        })
        .catch((error) => {
          console.log("[v0] Service Worker registration failed:", error)
        })
    }
  }, [])

  return null
}
