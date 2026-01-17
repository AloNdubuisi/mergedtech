interface CommunityCardProps {
  name: string
  role: string
  achievement: string
  color: string
  initials: string
}

export default function CommunityCard({ name, role, achievement, color, initials }: CommunityCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      {/* Avatar */}
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
        <span className="text-white font-bold text-xl">{initials}</span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-sm text-primary mb-4">{role}</p>
      <p className="text-sm text-muted-foreground italic">"{achievement}"</p>
    </div>
  )
}
