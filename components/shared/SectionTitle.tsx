interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className = ''
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
