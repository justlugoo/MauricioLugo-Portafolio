import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function SkillBadge({ skill, variant = 'secondary', size = 'md' }: SkillBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  }

  return (
    <Badge
      variant={variant}
      className={`
        ${sizeClasses[size]}
        relative
        bg-primary/5 hover:bg-primary/10
        border border-primary/20 hover:border-primary/30
        text-foreground/80 hover:text-foreground
        font-medium
        rounded-lg
        transition-all duration-300
        cursor-default
        hover:scale-[1.02]
      `}
    >
      {skill}
    </Badge>
  )
}
