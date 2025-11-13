"use client"

import { Volume2, VolumeX } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export default function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(true)

  useEffect(() => {
    const savedPreference = localStorage.getItem("somoo_sound_enabled")
    if (savedPreference !== null) {
      setSoundEnabled(savedPreference === "true")
    }
  }, [])

  const toggleSound = () => {
    const newState = !soundEnabled
    setSoundEnabled(newState)
    localStorage.setItem("somoo_sound_enabled", newState.toString())
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSound}
      className="rounded-full hover:scale-110 transition-transform"
      aria-label="Toggle sound"
    >
      {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </Button>
  )
}
