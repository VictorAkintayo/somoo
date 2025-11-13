"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface AnswerHistory {
  questionIndex: number
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  selectedAnswer: number | null
  isCorrect: boolean
  timeTaken: number
}

interface ReviewScreenProps {
  answerHistory: AnswerHistory[]
  onClose: () => void
}

export default function ReviewScreen({ answerHistory, onClose }: ReviewScreenProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const incorrectAnswers = answerHistory.filter((a) => !a.isCorrect)
  const correctAnswers = answerHistory.filter((a) => a.isCorrect)

  if (incorrectAnswers.length === 0) {
    return (
      <Card className="w-full max-w-2xl shadow-2xl border-2 animate-in fade-in zoom-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-600">Perfect Score!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">You answered all questions correctly. There is nothing to review.</p>
          <Button onClick={onClose} size="lg" className="w-full">
            Back to Results
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-3xl shadow-2xl border-2 animate-in fade-in zoom-in max-h-[90vh] overflow-hidden flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Review Missed Questions</CardTitle>
        <p className="text-sm text-muted-foreground">
          Review the {incorrectAnswers.length} question{incorrectAnswers.length !== 1 ? "s" : ""} you got wrong
        </p>
      </CardHeader>
      <CardContent className="space-y-4 overflow-y-auto flex-1 px-4">
        {incorrectAnswers.map((answer, idx) => {
          const isExpanded = expandedIndex === idx

          return (
            <div key={idx} className="border-2 border-destructive/20 rounded-lg overflow-hidden bg-destructive/5">
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full p-4 flex items-start justify-between gap-4 hover:bg-destructive/10 transition-colors text-left"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="font-semibold text-sm">Question {answer.questionIndex + 1}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {answer.timeTaken}s
                    </span>
                  </div>
                  <p className="text-sm font-medium">{answer.question.question}</p>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="p-4 pt-0 space-y-3 animate-in slide-in-from-top-2">
                  <div className="space-y-2">
                    {answer.question.options.map((option, optIdx) => {
                      const isCorrectAnswer = optIdx === answer.question.correctAnswer
                      const wasSelected = optIdx === answer.selectedAnswer

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded border-2 text-sm ${
                            isCorrectAnswer
                              ? "bg-green-500/10 border-green-500"
                              : wasSelected
                                ? "bg-destructive/10 border-destructive"
                                : "bg-secondary border-border"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {isCorrectAnswer && (
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            )}
                            {wasSelected && !isCorrectAnswer && (
                              <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                            )}
                            <span className="flex-1">{option}</span>
                            {wasSelected && <span className="text-xs text-muted-foreground">(Your answer)</span>}
                            {isCorrectAnswer && <span className="text-xs text-green-600 font-semibold">(Correct)</span>}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {answer.question.explanation && (
                    <div className="bg-primary/5 border border-primary/20 p-3 rounded">
                      <p className="text-sm font-semibold mb-1">Explanation:</p>
                      <p className="text-sm text-muted-foreground">{answer.question.explanation}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}

        <Button onClick={onClose} size="lg" className="w-full mt-6">
          Back to Results
        </Button>
      </CardContent>
    </Card>
  )
}
