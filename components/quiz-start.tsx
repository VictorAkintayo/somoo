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
  Brain,
  Medal,
  Music2,
  Laugh,
} from "lucide-react"
import type { QuizType, DifficultyLevel } from "@/lib/quiz-data"
import { useQuiz } from "@/hooks/use-quiz"
import { getTranslations, type Language } from "@/lib/translations"

interface QuizStartProps {
  onStart: () => void
}

const QUIZ_TYPES: Array<{ value: QuizType; label: string; icon: React.ReactNode }> = [
  { value: "Technology", label: "Technology", icon: <Code className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Academia", label: "Academia", icon: <GraduationCap className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Engineering", label: "Engineering", icon: <Wrench className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Law", label: "Law", icon: <Scale className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Economics", label: "Economics", icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "General", label: "General", icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Science", label: "Science", icon: <Beaker className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "History", label: "History", icon: <Clock className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Politics", label: "Politics", icon: <Landmark className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Music", label: "Music", icon: <Music2 className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Sports", label: "Sports", icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" /> },
  { value: "Fun", label: "Fun", icon: <Laugh className="w-4 h-4 md:w-5 md:h-5" /> },
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
  const [isPracticeMode, setIsPracticeMode] = useState(false)
  const [hasSavedQuiz, setHasSavedQuiz] = useState(false)
  const [highScores, setHighScores] = useState<Record<string, number>>({})
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const t = getTranslations(currentLang)
  const { startQuiz, loadQuizState, resetQuiz, quizType, difficultyLevel, currentQuestionIndex, questions } = useQuiz()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("somoo_quiz_state")
      if (savedState) {
        setHasSavedQuiz(true)
      }

      const savedHighScores = localStorage.getItem("somoo_high_scores")
      if (savedHighScores) {
        setHighScores(JSON.parse(savedHighScores))
      }
    }
  }, [])

  useEffect(() => {
    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>
      setCurrentLang(customEvent.detail)
    }

    document.addEventListener("languageChange", handleLanguageChange)
    return () => document.removeEventListener("languageChange", handleLanguageChange)
  }, [])

  const handleStartQuiz = () => {
    if (selectedType && selectedDifficulty) {
      startQuiz(selectedType, selectedDifficulty, isPracticeMode)
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
      <Card className="w-full max-w-2xl shadow-2xl border-2 animate-in fade-in zoom-in duration-700 mx-4">
        <CardHeader className="text-center space-y-4 md:space-y-6 pb-6 md:pb-8 pt-8 md:pt-12 px-4 md:px-6">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-4 md:p-6 rounded-2xl animate-in zoom-in duration-500 delay-100">
              <div className="text-4xl md:text-6xl font-bold text-primary">
                So<span className="text-chart-1">Moo</span>
              </div>
            </div>
          </div>
          <CardTitle className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent text-balance">
            {t.welcome}
          </CardTitle>
          <CardDescription className="text-base md:text-lg text-muted-foreground max-w-md mx-auto text-pretty">
            <span className="font-semibold text-foreground">{t.appTagline.split("—")[0]}</span>
            {t.appTagline.includes("—") && ` — ${t.appTagline.split("—")[1]}`}
            <br />
            Test your knowledge across multiple categories and challenge yourself!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6 pb-8 md:pb-12 px-4 md:px-6">
          {hasSavedQuiz && (
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 animate-in fade-in slide-in-from-top-4">
              <div className="flex items-center gap-2 md:gap-3">
                <PlayCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <h3 className="font-semibold text-base md:text-lg">Continue Your Quiz</h3>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                You have a saved quiz in progress. Pick up where you left off!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleContinueQuiz} className="flex-1 py-3" size="lg">
                  Continue Quiz
                </Button>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <Button
              onClick={() => setStep("features")}
              size="lg"
              className="text-base md:text-lg h-12 md:h-14 px-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-in fade-in slide-in-from-bottom-4 delay-200 group"
            >
              {hasSavedQuiz ? "Start New Quiz" : "Get Started"}
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (step === "features") {
    return (
      <Card className="w-full max-w-4xl shadow-2xl border-2 animate-in fade-in slide-in-from-right duration-500 mx-4">
        <CardHeader className="text-center space-y-3 md:space-y-4 pb-4 md:pb-6 px-4 md:px-6">
          <div className="flex justify-center">
            <div className="bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                So<span className="text-chart-1">Moo</span>
              </div>
            </div>
          </div>
          <CardTitle className="text-xl md:text-3xl font-bold text-balance">{t.featuresTitle}</CardTitle>
          <CardDescription className="text-sm md:text-base text-muted-foreground px-2">
            {t.featuresDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 md:space-y-8 pb-8 md:pb-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <FeatureCard
              icon={<Timer className="w-6 h-6 md:w-8 md:h-8" />}
              title={t.timedQuestionsTitle}
              description={t.timedQuestionsDescription}
              color="text-blue-500"
              delay="delay-100"
            />
            <FeatureCard
              icon={<Trophy className="w-6 h-6 md:w-8 md:h-8" />}
              title={t.scoreTrackingTitle}
              description={t.scoreTrackingDescription}
              color="text-yellow-500"
              delay="delay-200"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6 md:w-8 md:h-8" />}
              title={t.instantFeedbackTitle}
              description={t.instantFeedbackDescription}
              color="text-purple-500"
              delay="delay-300"
            />
          </div>

          <div className="flex justify-center pt-2 md:pt-4">
            <Button
              onClick={() => setStep("selection")}
              size="lg"
              className="text-base md:text-lg h-12 md:h-14 px-8 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-in fade-in slide-in-from-bottom-4 delay-400 group"
            >
              {t.continueButton}
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl shadow-2xl border-2 animate-in fade-in slide-in-from-right duration-500 mx-4">
      <CardHeader className="text-center space-y-3 md:space-y-4 pb-4 md:pb-6 px-4 md:px-6">
        <div className="flex justify-center">
          <div className="bg-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              So<span className="text-chart-1">Moo</span>
            </div>
          </div>
        </div>
        <CardTitle className="text-xl md:text-3xl font-bold text-balance">{t.customizeQuizTitle}</CardTitle>
        <CardDescription className="text-sm md:text-base text-muted-foreground px-2">
          {t.customizeQuizDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 md:space-y-8 px-4 md:px-6">
        <div className="space-y-3 md:space-y-4 animate-in fade-in slide-in-from-bottom-2 delay-100">
          <h3 className="text-base md:text-lg font-semibold text-center flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            {t.selectQuizCategoryTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {QUIZ_TYPES.map((type) => {
              const highScoreKey = `${type.value}-${selectedDifficulty}`
              const hasHighScore = highScores[highScoreKey] !== undefined

              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-lg border-2 transition-all duration-300 hover:scale-[1.02] relative ${
                    selectedType === type.value
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border bg-secondary/50 hover:border-primary/50"
                  }`}
                >
                  {hasHighScore && (
                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full p-1">
                      <Medal className="w-3 h-3" />
                    </div>
                  )}
                  <div className={selectedType === type.value ? "text-primary" : "text-muted-foreground"}>
                    {type.icon}
                  </div>
                  <span className="font-medium text-xs md:text-sm text-center">{type.label}</span>
                  {hasHighScore && selectedDifficulty && (
                    <span className="text-[10px] text-yellow-600 font-semibold">Best: {highScores[highScoreKey]}%</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-3 md:space-y-4 animate-in fade-in slide-in-from-bottom-2 delay-200">
          <h3 className="text-base md:text-lg font-semibold text-center flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            {t.selectDifficultyLevelTitle}
          </h3>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {DIFFICULTY_LEVELS.map((level) => (
              <button
                key={level.value}
                onClick={() => setSelectedDifficulty(level.value)}
                className={`p-2.5 md:p-4 rounded-lg border-2 font-semibold text-[10px] sm:text-xs md:text-base transition-all duration-300 hover:scale-[1.02] ${
                  selectedDifficulty === level.value ? "border-primary shadow-md scale-105" : level.color
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 p-4 bg-secondary/30 rounded-lg border-2 border-border/50 animate-in fade-in slide-in-from-bottom-2 delay-250">
          <Brain className="w-5 h-5 text-primary" />
          <div className="flex-1">
            <p className="font-semibold text-sm">{t.practiceModeTitle}</p>
            <p className="text-xs text-muted-foreground">{t.practiceModeDescription}</p>
          </div>
          <button
            onClick={() => setIsPracticeMode(!isPracticeMode)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isPracticeMode ? "bg-primary" : "bg-muted"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isPracticeMode ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <Button
          onClick={handleStartQuiz}
          size="lg"
          disabled={!selectedType || !selectedDifficulty}
          className="w-full text-base md:text-lg h-12 md:h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-2 delay-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!selectedType || !selectedDifficulty
            ? t.selectCategoryDifficultyButton
            : isPracticeMode
              ? t.startPracticeModeButton
              : t.startQuizButton}
        </Button>

        <p className="text-center text-xs md:text-sm text-muted-foreground animate-in fade-in delay-400">
          {t.upToQuestions} • {t.multipleChoice} • {t.goodLuck}
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
      className={`bg-secondary/50 p-4 md:p-6 rounded-xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-in fade-in zoom-in ${delay}`}
    >
      <div className={`${color} mb-2 md:mb-3`}>{icon}</div>
      <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2 text-foreground">{title}</h3>
      <p className="text-xs md:text-sm text-foreground/70 text-pretty">{description}</p>
    </div>
  )
}
