interface SectionTitleProps {
  index: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  index,
  title,
  subtitle,
  align = 'left',
  className = ''
}: SectionTitleProps) {
  const centered = align === 'center'

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span className="font-mono text-sm text-primary tabular-nums">{index}</span>
        <span className="h-px w-12 bg-border" />
      </div>
      <h2 className="font-mono text-2xl md:text-3xl font-semibold tracking-tight text-foreground uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-muted-foreground max-w-xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
