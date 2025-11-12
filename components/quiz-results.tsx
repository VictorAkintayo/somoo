"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuiz } from "@/hooks/use-quiz"
import { Trophy, RotateCcw, Award, Target, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface QuizResultsProps {
  onRestart: () => void
}

export default function QuizResults({ onRestart }: QuizResultsProps) {
  const { score, questions, resetQuiz, quizType, difficultyLevel } = useQuiz()
  const percentage = Math.round((score / questions.length) * 100)

  const handleRestart = () => {
    resetQuiz()
    onRestart()
  }

  const getPerformanceMessage = () => {
    if (percentage === 100)
      return { emoji: "🏆", message: "Perfect Score!", description: "Outstanding! You aced every question!" }
    if (percentage >= 80)
      return { emoji: "🌟", message: "Excellent!", description: "Amazing performance! You really know your stuff!" }
    if (percentage >= 60)
      return { emoji: "👍", message: "Good Job!", description: "Well done! Keep up the great work!" }
    if (percentage >= 40)
      return { emoji: "📚", message: "Not Bad!", description: "You're getting there! Practice makes perfect!" }
    return { emoji: "💪", message: "Keep Trying!", description: "Don't give up! You'll do better next time!" }
  }

  const performance = getPerformanceMessage()

  const getDifficultyColor = () => {
    if (difficultyLevel === "Easy") return "text-green-600"
    if (difficultyLevel === "Intermediate") return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <Card className="w-full max-w-2xl shadow-2xl border-2 animate-in fade-in zoom-in duration-700">
      <CardHeader className="text-center space-y-4 pb-4">
        <div className="flex justify-center">
          <div className="bg-primary/10 p-6 rounded-full animate-in zoom-in duration-500 delay-100 hover:scale-110 transition-transform">
            <Trophy className="w-20 h-20 text-primary" />
          </div>
        </div>
        <div className="space-y-2 animate-in slide-in-from-top-2 delay-200">
          <CardTitle className="text-5xl font-bold">{performance.emoji}</CardTitle>
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            {performance.message}
          </CardTitle>
          <CardDescription className="text-lg">{performance.description}</CardDescription>
          {quizType && difficultyLevel && (
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                {quizType}
              </span>
              <span className={`px-3 py-1 bg-secondary rounded-full text-sm font-semibold ${getDifficultyColor()}`}>
                {difficultyLevel}
              </span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-secondary/50 p-6 rounded-lg border border-border space-y-4 animate-in slide-in-from-bottom-2 delay-300">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">{score}</span>
            <span className="text-3xl font-bold text-muted-foreground">/ {questions.length}</span>
          </div>
          <Progress value={percentage} className="h-3" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Your Score</span>
            <span className="font-bold text-lg">{percentage}%</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <StatCard icon={<Target className="w-5 h-5" />} label="Correct" value={score} delay="delay-350" />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="Accuracy"
            value={`${percentage}%`}
            delay="delay-400"
          />
          <StatCard icon={<Award className="w-5 h-5" />} label="Total" value={questions.length} delay="delay-450" />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleRestart}
            size="lg"
            className="flex-1 text-lg h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-in slide-in-from-bottom-2 delay-500"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground animate-in fade-in delay-600">
          Thanks for playing Somoo! 🎯
        </p>
      </CardContent>
    </Card>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string | number
  delay: string
}

function StatCard({ icon, label, value, delay }: StatCardProps) {
  return (
    <div
      className={`bg-card p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md text-center animate-in slide-in-from-bottom-2 ${delay}`}
    >
      <div className="text-primary mb-2 flex justify-center">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
