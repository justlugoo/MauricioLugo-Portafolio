import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
            <h1 className="text-9xl font-bold text-primary/20 mb-8">404</h1>
            <h2 className="text-3xl font-bold text-foreground mb-4">Página no encontrada</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
                Lo sentimos, no pudimos encontrar la página que estás buscando.
                Es posible que haya sido movida o eliminada.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/">
                    Volver al inicio
                </Link>
            </Button>
        </div>
    )
}
