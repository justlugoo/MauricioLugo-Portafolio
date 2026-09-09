import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
            <p className="font-mono text-sm text-primary mb-4">$ curl {"{"}página{"}"}</p>
            <h1 className="font-mono text-7xl font-bold text-foreground mb-4">404</h1>
            <h2 className="text-xl text-foreground mb-4">Página no encontrada</h2>
            <p className="text-muted-foreground mb-10 max-w-md">
                No pudimos encontrar la página que estás buscando.
                Es posible que haya sido movida o eliminada.
            </p>
            <Button asChild className="rounded-none px-8 h-11 font-mono text-sm uppercase tracking-wide">
                <Link href="/">
                    Volver al inicio
                </Link>
            </Button>
        </div>
    )
}
