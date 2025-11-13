"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useQuiz } from "@/hooks/use-quiz"
import { Clock, CheckCircle2, XCircle, Pause, Play, Home, RotateCcw, Lightbulb, Info, Infinity } from "lucide-react"
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
    hintsUsed,
    applyHint,
    eliminatedOptions,
    isPracticeMode,
    recordAnswer,
  } = useQuiz()
  const [timeLeft, setTimeLeft] = useState(timeRemaining)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [showHomeConfirm, setShowHomeConfirm] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())

  const isSoundEnabled = () => {
    if (typeof window === "undefined") return true
    return localStorage.getItem("somoo_sound_enabled") !== "false"
  }

  const handleHome = () => {
    setShowHomeConfirm(true)
  }

  const handleReset = () => {
    setShowResetConfirm(true)
  }

  const confirmReset = () => {
    resetQuiz()
    onReturnHome()
  }

  const confirmHome = (save: boolean) => {
    if (save) {
      saveQuizState()
    }
    onReturnHome()
  }

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return

    const timeTaken = Math.floor((Date.now() - startTime) / 1000)
    recordAnswer(index, timeTaken)

    setSelectedAnswer(index)
    setIsAnswered(true)
    selectAnswer(index)
    setShowFeedback(true)

    const isCorrect = index === currentQuestion.correctAnswer
    if (isSoundEnabled()) playSound(isCorrect ? "correct" : "incorrect")

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
      pauseQuiz()
      saveQuizState()
    }
  }

  const handleHint = () => {
    if (isAnswered || hintsUsed >= 3 || eliminatedOptions.length > 0) return
    applyHint()
  }

  const playSound = (type: "correct" | "incorrect" | "timeout") => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    if (type === "correct") {
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1)
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2)
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

  const handleTimeUp = () => {
    if (!isAnswered) {
      const timeTaken = Math.floor((Date.now() - startTime) / 1000)
      recordAnswer(null, timeTaken)
      setIsAnswered(true)
      setShowFeedback(true)
      if (isSoundEnabled()) playSound("timeout")
      setTimeout(() => {
        handleNext()
      }, 2000)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isAnswered || isPaused) return

      if (event.key >= "1" && event.key <= "4") {
        const index = Number.parseInt(event.key) - 1
        if (index < currentQuestion.options.length) {
          handleAnswerSelect(index)
        }
      }

      if (event.code === "Space") {
        event.preventDefault()
        handlePauseToggle()
      }

      if (event.key === "h" || event.key === "H") {
        handleHint()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isAnswered, isPaused, currentQuestion])

  useEffect(() => {
    setTimeLeft(isPracticeMode ? 999 : 30)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setShowFeedback(false)
    setStartTime(Date.now())
  }, [currentQuestionIndex, isPracticeMode])

  useEffect(() => {
    if (isPaused || isAnswered || isPracticeMode) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp()
          return 0
        }
        const newTime = prev - 1
        setTimeRemaining(newTime)
        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestionIndex, isPaused, isAnswered, isPracticeMode])

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer

  return (
    <>
      <Card className="w-full max-w-3xl shadow-2xl border-2 animate-in fade-in zoom-in duration-500 relative">
        <CardHeader className="space-y-4 pb-4">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleHome}
                disabled={isAnswered}
                className="px-2 sm:px-3 bg-transparent"
              >
                <Home className="w-4 h-4 sm:mr-1" />
                <span className="hidden sm:inline">Home</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                disabled={isAnswered}
                className="px-2 sm:px-3 bg-transparent"
              >
                <RotateCcw className="w-4 h-4 sm:mr-1" />
                <span className="hidden sm:inline">Reset</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleHint}
                disabled={isAnswered || hintsUsed >= 3 || eliminatedOptions.length > 0}
                className="relative px-2 sm:px-3"
              >
                <Lightbulb className="w-4 h-4 sm:mr-1" />
                <span className="hidden sm:inline">Hint ({3 - hintsUsed})</span>
                <span className="sm:hidden text-xs">({3 - hintsUsed})</span>
              </Button>
            </div>
            {!isPracticeMode && (
              <Button
                variant={isPaused ? "default" : "outline"}
                size="sm"
                onClick={handlePauseToggle}
                disabled={isAnswered}
                className="px-2 sm:px-3"
              >
                {isPaused ? (
                  <>
                    <Play className="w-4 h-4 sm:mr-1" />
                    <span className="hidden sm:inline">Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4 sm:mr-1" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                )}
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-muted-foreground">
              Q {currentQuestionIndex + 1}/{questions.length}
            </span>
            {isPracticeMode && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">Practice</span>
            )}
            <div className="flex items-center gap-1 sm:gap-2">
              {isPracticeMode ? (
                <>
                  <Infinity className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  <span className="text-sm sm:text-lg font-bold text-muted-foreground">∞</span>
                </>
              ) : (
                <>
                  <Clock
                    className={cn(
                      "w-4 h-4 sm:w-5 sm:h-5 transition-colors",
                      timeLeft <= 5 ? "text-destructive animate-pulse" : "text-muted-foreground",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm sm:text-lg font-bold tabular-nums transition-colors",
                      timeLeft <= 5 ? "text-destructive" : "text-foreground",
                    )}
                  >
                    {timeLeft}s
                  </span>
                </>
              )}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-muted-foreground">Score: {score}</span>
            <span className="text-muted-foreground">{Math.round(progress)}%</span>
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
              const showAsIncorrect = showFeedback && isSelected && !isCorrect
              const isEliminated = eliminatedOptions.includes(index)

              return (
                <Button
                  key={index}
                  variant={isSelected && !showFeedback ? "default" : "outline"}
                  size="lg"
                  className={cn(
                    "w-full justify-start text-left h-auto py-4 px-6 text-base transition-all duration-300 hover:scale-[1.02] animate-in slide-in-from-right-2 whitespace-normal break-words",
                    showAsCorrect && "bg-green-500/10 border-green-500 hover:bg-green-500/20",
                    showAsIncorrect && "bg-destructive/10 border-destructive hover:bg-destructive/20",
                    isAnswered && !isSelected && !isCorrectAnswer && "opacity-50",
                    isEliminated && "opacity-30 line-through",
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswered || isEliminated}
                >
                  <span className="flex-1 break-words">{option}</span>
                  {showAsCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 animate-in zoom-in duration-300 flex-shrink-0 ml-2" />
                  )}
                  {showAsIncorrect && (
                    <XCircle className="w-5 h-5 text-destructive animate-in zoom-in duration-300 flex-shrink-0 ml-2" />
                  )}
                </Button>
              )
            })}
          </div>

          {showFeedback && (
            <div
              className={cn(
                "p-4 rounded-lg border-2 animate-in slide-in-from-bottom-2 duration-500 space-y-2",
                isCorrect
                  ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400"
                  : "bg-destructive/10 border-destructive text-destructive",
              )}
            >
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold">
                    {isCorrect ? "Correct!" : selectedAnswer === null ? "Time's up!" : "Incorrect!"}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm mt-1 opacity-90">
                      The correct answer was: {currentQuestion.options[currentQuestion.correctAnswer]}
                    </p>
                  )}
                  {currentQuestion.explanation && (
                    <p className="text-sm mt-2 opacity-80 border-t border-current pt-2">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="text-xs text-muted-foreground text-center pt-2">
            Keyboard: 1-4 (answers) • Space (pause) • H (hint)
          </div>
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
