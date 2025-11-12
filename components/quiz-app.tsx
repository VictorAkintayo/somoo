"use client"

import { useState } from "react"
import { QuizProvider } from "@/hooks/use-quiz"
import QuizStart from "./quiz-start"
import QuizQuestion from "./quiz-question"
import QuizResults from "./quiz-results"

export default function QuizApp() {
  return (
    <QuizProvider>
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

  const handleStart = () => setView("quiz")
  const handleFinish = () => setView("results")
  const handleReturnHome = () => setView("start")
  const handleRestart = () => setView("start")

  if (view === "start") {
    return <QuizStart onStart={handleStart} />
  }

  if (view === "quiz") {
    return <QuizQuestion onFinish={handleFinish} onReturnHome={handleReturnHome} />
  }

  return <QuizResults onRestart={handleRestart} />
}
