"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import type { Question, QuizType, DifficultyLevel } from "@/lib/quiz-data"
import { getQuestionsByTypeAndLevel } from "@/lib/quiz-data"

interface QuizContextType {
  questions: Question[]
  currentQuestionIndex: number
  currentQuestion: Question
  score: number
  quizType: QuizType | null
  difficultyLevel: DifficultyLevel | null
  isPaused: boolean
  timeRemaining: number
  selectAnswer: (answerIndex: number) => void
  nextQuestion: () => void
  resetQuiz: () => void
  startQuiz: (type: QuizType, level: DifficultyLevel) => void
  pauseQuiz: () => void
  resumeQuiz: () => void
  setTimeRemaining: (time: number) => void
  saveQuizState: () => void
  loadQuizState: () => boolean
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizType, setQuizType] = useState<QuizType | null>(null)
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(30)

  const currentQuestion = questions[currentQuestionIndex] || ({} as Question)

  const startQuiz = (type: QuizType, level: DifficultyLevel) => {
    const selectedQuestions = getQuestionsByTypeAndLevel(type, level)
    setQuestions(selectedQuestions)
    setQuizType(type)
    setDifficultyLevel(level)
    setCurrentQuestionIndex(0)
    setScore(0)
    setIsPaused(false)
    setTimeRemaining(30)
  }

  const selectAnswer = (answerIndex: number) => {
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setTimeRemaining(30)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setQuestions([])
    setQuizType(null)
    setDifficultyLevel(null)
    setIsPaused(false)
    setTimeRemaining(30)
    if (typeof window !== "undefined") {
      localStorage.removeItem("somoo_quiz_state")
    }
  }

  const pauseQuiz = () => setIsPaused(true)
  const resumeQuiz = () => setIsPaused(false)

  const saveQuizState = useCallback(() => {
    if (typeof window !== "undefined") {
      const state = {
        questions,
        currentQuestionIndex,
        score,
        quizType,
        difficultyLevel,
        timeRemaining,
        timestamp: Date.now(),
      }
      localStorage.setItem("somoo_quiz_state", JSON.stringify(state))
    }
  }, [questions, currentQuestionIndex, score, quizType, difficultyLevel, timeRemaining])

  const loadQuizState = useCallback(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("somoo_quiz_state")
      if (savedState) {
        try {
          const state = JSON.parse(savedState)
          setQuestions(state.questions)
          setCurrentQuestionIndex(state.currentQuestionIndex)
          setScore(state.score)
          setQuizType(state.quizType)
          setDifficultyLevel(state.difficultyLevel)
          setTimeRemaining(state.timeRemaining)
          return true
        } catch (error) {
          console.error("Failed to load quiz state:", error)
          return false
        }
      }
    }
    return false
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("somoo_quiz_state")
      if (savedState) {
        loadQuizState()
      }
    }
  }, [])

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        currentQuestion,
        score,
        quizType,
        difficultyLevel,
        isPaused,
        timeRemaining,
        selectAnswer,
        nextQuestion,
        resetQuiz,
        startQuiz,
        pauseQuiz,
        resumeQuiz,
        setTimeRemaining,
        saveQuizState,
        loadQuizState,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider")
  }
  return context
}
