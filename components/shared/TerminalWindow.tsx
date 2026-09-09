import type { ReactNode } from "react"

interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
}

export function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`border border-border bg-background/70 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 font-mono text-xs text-muted-foreground truncate">{title}</span>
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </div>
  )
}
