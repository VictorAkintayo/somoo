"use client"

import { useState, useEffect } from "react"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Language } from "@/lib/translations"

const languages = [
  { code: "en" as Language, name: "English", flag: "🇬🇧" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
  { code: "yo" as Language, name: "Yorùbá", flag: "🇳🇬" },
  { code: "ig" as Language, name: "Igbo", flag: "🇳🇬" },
  { code: "ha" as Language, name: "Hausa", flag: "🇳🇬" },
]

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<Language>("en")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("somoo_language") as Language
      if (saved) {
        setCurrentLang(saved)
        document.dispatchEvent(new CustomEvent("languageChange", { detail: saved }))
      }
    }
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("somoo_language", lang)
      document.dispatchEvent(new CustomEvent("languageChange", { detail: lang }))
    }
  }

  const current = languages.find((l) => l.code === currentLang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5 h-9 px-2 sm:px-3 text-xs sm:text-sm bg-transparent">
          <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">{current?.flag}</span>
          <span className="hidden sm:inline">{current?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`text-sm cursor-pointer ${currentLang === lang.code ? "bg-accent font-medium" : ""}`}
          >
            <span className="mr-2 text-base">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
