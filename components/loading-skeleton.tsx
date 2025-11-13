export default function LoadingSkeleton() {
  return (
    <div className="w-full max-w-2xl space-y-4 animate-pulse">
      <div className="bg-secondary/50 h-12 rounded-lg w-3/4 mx-auto" />
      <div className="bg-secondary/50 h-64 rounded-lg" />
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-secondary/50 h-20 rounded-lg" />
        <div className="bg-secondary/50 h-20 rounded-lg" />
        <div className="bg-secondary/50 h-20 rounded-lg" />
        <div className="bg-secondary/50 h-20 rounded-lg" />
      </div>
    </div>
  )
}
