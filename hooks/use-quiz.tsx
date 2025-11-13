"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Question, QuizType, DifficultyLevel } from "@/lib/quiz-data"
import { getQuestionsByTypeAndLevel } from "@/lib/quiz-data"

interface AnswerHistory {
  questionIndex: number
  question: Question
  selectedAnswer: number | null
  isCorrect: boolean
  timeTaken: number
}

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
  startQuiz: (type: QuizType, level: DifficultyLevel, practiceMode?: boolean) => void
  pauseQuiz: () => void
  resumeQuiz: () => void
  setTimeRemaining: (time: number) => void
  saveQuizState: () => void
  loadQuizState: () => boolean
  hintsUsed: number
  applyHint: () => void
  eliminatedOptions: number[]
  isPracticeMode: boolean
  answerHistory: AnswerHistory[]
  recordAnswer: (selectedAnswer: number | null, timeTaken: number) => void
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
  const [hintsUsed, setHintsUsed] = useState(0)
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([])
  const [isPracticeMode, setIsPracticeMode] = useState(false)
  const [answerHistory, setAnswerHistory] = useState<AnswerHistory[]>([])

  const currentQuestion = questions[currentQuestionIndex] || ({} as Question)

  const startQuiz = (type: QuizType, level: DifficultyLevel, practiceMode = false) => {
    const selectedQuestions = getQuestionsByTypeAndLevel(type, level)
    setQuestions(selectedQuestions)
    setQuizType(type)
    setDifficultyLevel(level)
    setCurrentQuestionIndex(0)
    setScore(0)
    setIsPaused(false)
    setTimeRemaining(practiceMode ? 999 : 30)
    setHintsUsed(0)
    setEliminatedOptions([])
    setIsPracticeMode(practiceMode)
    setAnswerHistory([])
  }

  const selectAnswer = (answerIndex: number) => {
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const recordAnswer = (selectedAnswer: number | null, timeTaken: number) => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    const record: AnswerHistory = {
      questionIndex: currentQuestionIndex,
      question: currentQuestion,
      selectedAnswer,
      isCorrect,
      timeTaken,
    }
    setAnswerHistory((prev) => [...prev, record])
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setTimeRemaining(isPracticeMode ? 999 : 30)
      setEliminatedOptions([])
    }
  }

  const applyHint = () => {
    if (hintsUsed >= 3 || eliminatedOptions.length > 0) return

    const wrongOptions = currentQuestion.options
      .map((_, index) => index)
      .filter((index) => index !== currentQuestion.correctAnswer)

    if (wrongOptions.length > 0) {
      const randomWrongOption = wrongOptions[Math.floor(Math.random() * wrongOptions.length)]
      setEliminatedOptions([randomWrongOption])
      setHintsUsed((prev) => prev + 1)
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
    setHintsUsed(0)
    setEliminatedOptions([])
    setIsPracticeMode(false)
    setAnswerHistory([])
    if (typeof window !== "undefined") {
      localStorage.removeItem("somoo_quiz_state")
    }
  }

  const pauseQuiz = () => setIsPaused(true)
  const resumeQuiz = () => setIsPaused(false)

  const saveQuizState = () => {
    if (typeof window !== "undefined") {
      const state = {
        questions,
        currentQuestionIndex,
        score,
        quizType,
        difficultyLevel,
        timeRemaining,
        hintsUsed,
        eliminatedOptions,
        isPracticeMode,
        answerHistory,
        timestamp: Date.now(),
      }
      localStorage.setItem("somoo_quiz_state", JSON.stringify(state))
    }
  }

  const loadQuizState = () => {
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
          setHintsUsed(state.hintsUsed || 0)
          setEliminatedOptions(state.eliminatedOptions || [])
          setIsPracticeMode(state.isPracticeMode || false)
          setAnswerHistory(state.answerHistory || [])
          return true
        } catch (error) {
          console.error("Failed to load quiz state:", error)
          return false
        }
      }
    }
    return false
  }

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
        hintsUsed,
        applyHint,
        eliminatedOptions,
        isPracticeMode,
        answerHistory,
        recordAnswer,
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
