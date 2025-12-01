import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function SkillBadge({ skill, variant = 'outline', size = 'md' }: SkillBadgeProps) {
  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5',
  }

  return (
    <Badge
      variant={variant}
      className={`
        ${sizeClasses[size]}
        hover:bg-primary hover:text-primary-foreground hover:border-primary
        transition-all duration-200 cursor-default font-medium rounded-full
      `}
    >
      {skill}
    </Badge>
  )
}
