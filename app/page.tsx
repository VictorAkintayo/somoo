import QuizApp from "@/components/quiz-app"
import PWAInstallPrompt from "@/components/pwa-install-prompt"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <QuizApp />
      <PWAInstallPrompt />
    </main>
  )
}
