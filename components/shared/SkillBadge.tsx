interface SkillBadgeProps {
  skill: string
  size?: 'sm' | 'md'
}

export function SkillBadge({ skill, size = 'md' }: SkillBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-2.5 py-1.5',
  }

  return (
    <span
      className={`
        ${sizeClasses[size]}
        font-mono
        border border-border
        text-foreground/80
        bg-background
        hover:border-primary/60 hover:text-foreground
        transition-colors
      `}
    >
      {skill}
    </span>
  )
}
