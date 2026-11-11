"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useSectionPager } from "@/hooks/useSectionPager"

interface GoToSectionButtonProps extends Omit<ButtonProps, "onClick"> {
  sectionId: string
}

/** Botón que lleva a otra sección del pager. Permite que quien lo usa siga siendo un componente de servidor. */
export function GoToSectionButton({ sectionId, ...props }: GoToSectionButtonProps) {
  const { goToId } = useSectionPager()

  return <Button onClick={() => goToId(sectionId)} {...props} />
}
