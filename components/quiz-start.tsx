"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Trophy,
  Timer,
  Zap,
  GraduationCap,
  Code,
  Wrench,
  Scale,
  TrendingUp,
  BookOpen,
  Beaker,
  Clock,
  Landmark,
  Sparkles,
  ArrowRight,
  PlayCircle,
} from "lucide-react"
import type { QuizType, DifficultyLevel } from "@/lib/quiz-data"
import { useQuiz } from "@/hooks/use-quiz"

interface QuizStartProps {
  onStart: () => void
}

const QUIZ_TYPES: Array<{ value: QuizType; label: string; icon: React.ReactNode }> = [
  { value: "Technology", label: "Technology", icon: <Code className="w-5 h-5" /> },
  { value: "Academia", label: "Academia", icon: <GraduationCap className="w-5 h-5" /> },
  { value: "Engineering", label: "Engineering", icon: <Wrench className="w-5 h-5" /> },
  { value: "Law", label: "Law", icon: <Scale className="w-5 h-5" /> },
  { value: "Economics", label: "Economics", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "General", label: "General", icon: <BookOpen className="w-5 h-5" /> },
  { value: "Science", label: "Science", icon: <Beaker className="w-5 h-5" /> },
  { value: "History", label: "History", icon: <Clock className="w-5 h-5" /> },
  { value: "Politics", label: "Politics", icon: <Landmark className="w-5 h-5" /> },
]

const DIFFICULTY_LEVELS: Array<{ value: DifficultyLevel; label: string; color: string }> = [
  { value: "Easy", label: "Easy", color: "bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20" },
  {
    value: "Intermediate",
    label: "Intermediate",
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20 hover:bg-yellow-500/20",
  },
  { value: "Hard", label: "Hard", color: "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20" },
]

export default function QuizStart({ onStart }: QuizStartProps) {
  const [step, setStep] = useState<"welcome" | "features" | "selection">("welcome")
  const [selectedType, setSelectedType] = useState<QuizType | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | null>(null)
  const [hasSavedQuiz, setHasSavedQuiz] = useState(false)
  const { startQuiz, loadQuizState, resetQuiz, quizType, difficultyLevel, currentQuestionIndex, questions } = useQuiz()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("somoo_quiz_state")
      if (savedState) {
        setHasSavedQuiz(true)
      }
    }
  }, [])

  const handleStartQuiz = () => {
    if (selectedType && selectedDifficulty) {
      startQuiz(selectedType, selectedDifficulty)
      onStart()
    }
  }

  const handleContinueQuiz = () => {
    const loaded = loadQuizState()
    if (loaded) {
      onStart()
    }
  }

  const handleStartNewQuiz = () => {
    resetQuiz()
    setHasSavedQuiz(false)
  }

  if (step === "welcome") {
    return (
      <Card className="w-full max-w-2xl shadow-2xl border-2 animate-in fade-in zoom-in duration-700">
        <CardHeader className="text-center space-y-6 pb-8 pt-12">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-6 rounded-2xl animate-in zoom-in duration-500 delay-100">
              <div className="text-6xl font-bold text-primary">
                So<span className="text-chart-1">Moo</span>
              </div>
            </div>
          </div>
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent text-balance">
            Welcome to SoMoo
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground max-w-md mx-auto text-pretty">
            <span className="font-semibold text-foreground">Ṣé o mọ̀?</span> — Do you know it?
            <br />
            Test your knowledge across multiple categories and challenge yourself!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-12">
          {hasSavedQuiz && (
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
              <div className="flex items-center gap-3">
                <PlayCircle className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Continue Your Quiz</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                You have a saved quiz in progress. Pick up where you left off!
              </p>
              <div className="flex gap-3">
                <Button onClick={handleContinueQuiz} className="flex-1" size="lg">
                  Continue Quiz
                </Button>
                <Button onClick={handleStartNewQuiz} variant="outline" className="flex-1 bg-transparent" size="lg">
                  Start New
                </Button>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <Button
              onClick={() => setStep("features")}
              size="lg"
              className="text-lg h-14 px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-in fade-in slide-in-from-bottom-4 delay-200 group"
            >
              {hasSavedQuiz ? "Start New Quiz" : "Get Started"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (step === "features") {
    return (
      <Card className="w-full max-w-4xl shadow-2xl border-2 animate-in fade-in slide-in-from-right duration-500">
        <CardHeader className="text-center space-y-4 pb-6">
          <div className="flex justify-center">
            <div className="bg-primary/10 px-6 py-3 rounded-xl">
              <div className="text-4xl font-bold text-primary">
                So<span className="text-chart-1">Moo</span>
              </div>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-balance">What Makes SoMoo Special?</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Experience the most engaging way to test your knowledge
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Timer className="w-8 h-8" />}
              title="Timed Questions"
              description="30 seconds per question to keep you focused and engaged"
              color="text-blue-500"
              delay="delay-100"
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8" />}
              title="Score Tracking"
              description="Real-time progress monitoring and performance analytics"
              color="text-yellow-500"
              delay="delay-200"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Instant Feedback"
              description="Get immediate results with detailed explanations"
              color="text-purple-500"
              delay="delay-300"
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setStep("selection")}
              size="lg"
              className="text-lg h-14 px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-in fade-in slide-in-from-bottom-4 delay-400 group"
            >
              Continue
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl shadow-2xl border-2 animate-in fade-in slide-in-from-right duration-500">
      <CardHeader className="text-center space-y-4 pb-6">
        <div className="flex justify-center">
          <div className="bg-primary/10 px-6 py-3 rounded-xl">
            <div className="text-4xl font-bold text-primary">
              So<span className="text-chart-1">Moo</span>
            </div>
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-balance">Customize Your Quiz</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Choose your category and difficulty level to begin
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 delay-100">
          <h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Select Quiz Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {QUIZ_TYPES.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-300 hover:scale-[1.02] ${
                  selectedType === type.value
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border bg-secondary/50 hover:border-primary/50"
                }`}
              >
                <div className={selectedType === type.value ? "text-primary" : "text-muted-foreground"}>
                  {type.icon}
                </div>
                <span className="font-medium text-sm">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 delay-200">
          <h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Select Difficulty Level
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {DIFFICULTY_LEVELS.map((level) => (
              <button
                key={level.value}
                onClick={() => setSelectedDifficulty(level.value)}
                className={`p-4 rounded-lg border-2 font-semibold transition-all duration-300 hover:scale-[1.02] ${
                  selectedDifficulty === level.value ? "border-primary shadow-md scale-105" : level.color
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleStartQuiz}
          size="lg"
          disabled={!selectedType || !selectedDifficulty}
          className="w-full text-lg h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-2 delay-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!selectedType || !selectedDifficulty ? "Select Category & Difficulty" : "Start Quiz"}
        </Button>

        <p className="text-center text-sm text-muted-foreground animate-in fade-in delay-400">
          Up to 10 questions • Multiple choice • Good luck!
        </p>
      </CardContent>
    </Card>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  delay: string
}

function FeatureCard({ icon, title, description, color, delay }: FeatureCardProps) {
  return (
    <div
      className={`bg-secondary/50 p-6 rounded-xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-in fade-in zoom-in ${delay}`}
    >
      <div className={`${color} mb-3`}>{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground text-pretty">{description}</p>
    </div>
  )
}
