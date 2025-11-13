"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Download, X } from "lucide-react"

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)

      // Check if user has dismissed the prompt before
      const dismissed = localStorage.getItem("somoo_pwa_dismissed")
      if (!dismissed) {
        setShowPrompt(true)
      }
    }

    window.addEventListener("beforeinstallprompt", handler)

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowPrompt(false)
    }

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setDeferredPrompt(null)
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem("somoo_pwa_dismissed", "true")
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-in slide-in-from-bottom-4">
      <Card className="border-2 border-primary/20 shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Install SoMoo</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1 -mr-2" onClick={handleDismiss}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <CardDescription className="text-sm">
            Install SoMoo on your device for a better experience and offline access
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="flex gap-2">
            <Button onClick={handleInstall} className="flex-1" size="sm">
              Install Now
            </Button>
            <Button onClick={handleDismiss} variant="outline" size="sm">
              Maybe Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
