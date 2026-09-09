interface SectionSlideProps {
  id: string
  children: React.ReactNode
}

export function SectionSlide({ id, children }: SectionSlideProps) {
  return (
    <div id={id} className="h-[100dvh] w-[100dvw] shrink-0 overflow-y-auto">
      <div className="relative min-h-full flex flex-col justify-center px-6 pt-20 pb-16">
        {children}
      </div>
    </div>
  )
}
