"use client"

import { useState } from "react"
import { QuizProvider } from "@/hooks/use-quiz"
import QuizStart from "./quiz-start"
import QuizQuestion from "./quiz-question"
import QuizResults from "./quiz-results"
import ThemeToggle from "./theme-toggle"
import SoundToggle from "./sound-toggle"
import { LanguageSelector } from "./language-selector"
import LoadingSkeleton from "./loading-skeleton"

export default function QuizApp() {
  return (
    <QuizProvider>
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 flex items-center gap-1 sm:gap-2">
        <LanguageSelector />
        <SoundToggle />
        <ThemeToggle />
      </div>
      <QuizContent />
    </QuizProvider>
  )
}

function QuizContent() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-secondary/20 to-background">
      <QuizRouter />
    </div>
  )
}

function QuizRouter() {
  const [view, setView] = useState<"start" | "quiz" | "results">("start")
  const [isLoading, setIsLoading] = useState(false)

  const handleStart = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setView("quiz")
    }, 500)
  }

  const handleFinish = () => setView("results")
  const handleReturnHome = () => setView("start")
  const handleRestart = () => setView("start")

  if (isLoading) {
    return <LoadingSkeleton />
  }

  if (view === "start") {
    return <QuizStart onStart={handleStart} />
  }

  if (view === "quiz") {
    return <QuizQuestion onFinish={handleFinish} onReturnHome={handleReturnHome} />
  }

  return <QuizResults onRestart={handleRestart} />
}
