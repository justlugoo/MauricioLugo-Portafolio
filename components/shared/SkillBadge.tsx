import { SKILL_ICONS } from "@/lib/skill-icons"

interface SkillBadgeProps {
  skill: string
  size?: 'sm' | 'md'
}

export function SkillBadge({ skill, size = 'md' }: SkillBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1 gap-1.5',
    md: 'text-sm px-2.5 py-1.5 gap-2',
  }
  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
  const Icon = SKILL_ICONS[skill]

  return (
    <span
      className={`
        inline-flex items-center
        ${sizeClasses[size]}
        font-mono
        border border-border
        text-foreground/80
        bg-background
        hover:border-primary/60 hover:text-foreground
        transition-colors
      `}
    >
      {Icon && <Icon className={`${iconSize} shrink-0`} />}
      {skill}
    </span>
  )
}
