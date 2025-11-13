import { Award, Zap, Target, Trophy, Star, TrendingUp } from "lucide-react"

interface AchievementBadgeProps {
  type: "perfect" | "speed" | "accuracy" | "master" | "first" | "streak"
  title: string
  description: string
}

export default function AchievementBadge({ type, title, description }: AchievementBadgeProps) {
  const icons = {
    perfect: <Trophy className="w-6 h-6" />,
    speed: <Zap className="w-6 h-6" />,
    accuracy: <Target className="w-6 h-6" />,
    master: <Award className="w-6 h-6" />,
    first: <Star className="w-6 h-6" />,
    streak: <TrendingUp className="w-6 h-6" />,
  }

  const colors = {
    perfect: "from-yellow-500 to-amber-500",
    speed: "from-blue-500 to-cyan-500",
    accuracy: "from-green-500 to-emerald-500",
    master: "from-purple-500 to-pink-500",
    first: "from-orange-500 to-red-500",
    streak: "from-indigo-500 to-violet-500",
  }

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-card animate-in slide-in-from-bottom-2 hover:scale-105 transition-transform">
      <div className={`p-2 rounded-full bg-gradient-to-br ${colors[type]} text-white`}>{icons[type]}</div>
      <div className="flex-1">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
