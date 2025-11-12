"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useQuiz } from "@/hooks/use-quiz"
import { Clock, CheckCircle2, XCircle, Pause, Play, Home, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizQuestionProps {
  onFinish: () => void
  onReturnHome: () => void
}

export default function QuizQuestion({ onFinish, onReturnHome }: QuizQuestionProps) {
  const {
    currentQuestion,
    questions,
    selectAnswer,
    nextQuestion,
    score,
    currentQuestionIndex,
    isPaused,
    pauseQuiz,
    resumeQuiz,
    timeRemaining,
    setTimeRemaining,
    saveQuizState,
    resetQuiz,
  } = useQuiz()
  const [timeLeft, setTimeLeft] = useState(timeRemaining > 0 ? timeRemaining : 30)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [showHomeConfirm, setShowHomeConfirm] = useState(false)

  const [hasQuestions, setHasQuestions] = useState(true)

  useEffect(() => {
    setHasQuestions(questions.length > 0 && currentQuestion && currentQuestion.options)
  }, [questions, currentQuestion])

  useEffect(() => {
    setTimeLeft(timeRemaining > 0 ? timeRemaining : 30)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setShowFeedback(false)
  }, [currentQuestionIndex, timeRemaining])

  useEffect(() => {
    if (isPaused || isAnswered) {
      setTimeRemaining(timeLeft)
    }
  }, [isPaused, isAnswered, timeLeft, setTimeRemaining])

  useEffect(() => {
    if (isPaused || isAnswered) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestionIndex, isPaused, isAnswered])

  const handleTimeUp = () => {
    if (!isAnswered) {
      setIsAnswered(true)
      setShowFeedback(true)
      playSound("timeout")
      setTimeout(() => {
        handleNext()
      }, 2000)
    }
  }

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return

    setSelectedAnswer(index)
    setIsAnswered(true)
    selectAnswer(index)
    setShowFeedback(true)

    const isCorrect = index === currentQuestion.correctAnswer
    playSound(isCorrect ? "correct" : "incorrect")

    setTimeout(() => {
      handleNext()
    }, 2000)
  }

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      onFinish()
    } else {
      nextQuestion()
    }
  }

  const handlePauseToggle = () => {
    if (isAnswered) return
    if (isPaused) {
      resumeQuiz()
    } else {
      setTimeRemaining(timeLeft)
      pauseQuiz()
      saveQuizState()
    }
  }

  const handleReset = () => {
    setShowResetConfirm(true)
  }

  const confirmReset = () => {
    resetQuiz()
    onReturnHome()
  }

  const handleHome = () => {
    setShowHomeConfirm(true)
  }

  const confirmHome = (save: boolean) => {
    if (save) {
      saveQuizState()
    } else {
      resetQuiz()
    }
    onReturnHome()
  }

  const playSound = (type: "correct" | "incorrect" | "timeout") => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    if (type === "correct") {
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime) // C5
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1) // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2) // G5
    } else if (type === "incorrect") {
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1)
    } else {
      oscillator.frequency.setValueAtTime(300, audioContext.currentTime)
    }

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100
  const isCorrect = selectedAnswer !== null && selectedAnswer === currentQuestion.correctAnswer

  if (!hasQuestions) {
    return null
  }

  return (
    <>
      <Card className="w-full max-w-3xl shadow-2xl border-2 animate-in fade-in zoom-in duration-500 relative">
        <CardHeader className="space-y-4 pb-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleHome} disabled={isAnswered}>
                <Home className="w-4 h-4 mr-1" />
                Home
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset} disabled={isAnswered}>
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
            <Button
              variant={isPaused ? "default" : "outline"}
              size="sm"
              onClick={handlePauseToggle}
              disabled={isAnswered}
            >
              {isPaused ? (
                <>
                  <Play className="w-4 h-4 mr-1" />
                  Resume
                </>
              ) : (
                <>
                  <Pause className="w-4 h-4 mr-1" />
                  Pause
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock
                className={cn(
                  "w-5 h-5 transition-colors",
                  timeLeft <= 5 ? "text-destructive animate-pulse" : "text-muted-foreground",
                )}
              />
              <span
                className={cn(
                  "text-lg font-bold tabular-nums transition-colors",
                  timeLeft <= 5 ? "text-destructive" : "text-foreground",
                )}
              >
                {timeLeft}s
              </span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Score: {score}</span>
            <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {isPaused && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
              <div className="text-center space-y-4 p-6">
                <Pause className="w-16 h-16 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">Quiz Paused</h3>
                <p className="text-muted-foreground">Click Resume to continue or use the buttons above</p>
                <Button onClick={resumeQuiz} size="lg">
                  <Play className="w-4 h-4 mr-2" />
                  Resume Quiz
                </Button>
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold leading-relaxed text-balance animate-in slide-in-from-top-2 duration-500">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrectAnswer = index === currentQuestion.correctAnswer
              const showAsCorrect = showFeedback && isCorrectAnswer
              const showAsIncorrect = showFeedback && isSelected && !isCorrectAnswer

              return (
                <Button
                  key={index}
                  variant={isSelected && !showFeedback ? "default" : "outline"}
                  size="lg"
                  className={cn(
                    "w-full justify-start text-left h-auto py-4 px-6 text-base transition-all duration-300 hover:scale-[1.02] animate-in slide-in-from-right-2",
                    showAsCorrect && "bg-green-500/10 border-green-500 hover:bg-green-500/20",
                    showAsIncorrect && "bg-destructive/10 border-destructive hover:bg-destructive/20",
                    isAnswered && !isSelected && !isCorrectAnswer && "opacity-50",
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswered}
                >
                  <span className="flex-1">{option}</span>
                  {showAsCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 animate-in zoom-in duration-300" />}
                  {showAsIncorrect && <XCircle className="w-5 h-5 text-destructive animate-in zoom-in duration-300" />}
                </Button>
              )
            })}
          </div>

          {showFeedback && (
            <div
              className={cn(
                "p-4 rounded-lg border-2 animate-in slide-in-from-bottom-2 duration-500",
                isCorrect
                  ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400"
                  : "bg-destructive/10 border-destructive text-destructive",
              )}
            >
              <p className="font-semibold">
                {isCorrect ? "🎉 Correct!" : selectedAnswer === null ? "⏱️ Time's up!" : "❌ Incorrect!"}
              </p>
              <p className="text-sm mt-1 opacity-90">
                {isCorrect
                  ? "Great job! Moving to the next question..."
                  : `The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {showResetConfirm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <h3 className="text-xl font-bold">Reset Quiz?</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Are you sure you want to reset? All progress will be lost and you'll return to the home screen.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowResetConfirm(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" className="flex-1" onClick={confirmReset}>
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showHomeConfirm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <h3 className="text-xl font-bold">Return to Home?</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Would you like to save your progress and continue later?</p>
              <div className="flex flex-col gap-3">
                <Button onClick={() => confirmHome(true)} className="w-full">
                  Save & Return Home
                </Button>
                <Button variant="outline" onClick={() => confirmHome(false)} className="w-full">
                  Return Without Saving
                </Button>
                <Button variant="ghost" onClick={() => setShowHomeConfirm(false)} className="w-full">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
