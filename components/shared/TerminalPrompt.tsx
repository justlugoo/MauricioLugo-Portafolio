interface TerminalPromptProps {
  command: string
  className?: string
}

export function TerminalPrompt({ command, className = "" }: TerminalPromptProps) {
  return (
    <p className={`font-mono text-sm text-primary mb-6 ${className}`}>
      <span className="text-muted-foreground">$</span> {command}
    </p>
  )
}
