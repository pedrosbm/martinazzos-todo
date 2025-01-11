import { PropsWithChildren } from "react"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from "./ui/alert-dialog"
import { Button } from "./ui/button"
import { X } from "lucide-react"

type ModalTriggerProps = {
    // ìcone do lucide react
    icon: any,
    variant: "default" | "link" | "secondary" | "outline" | "ghost" | "destructive" | null | undefined
}

/**
 * Componente que renderiza um botão que ao ser clicado exibe um modal, que pode conter qualquer conteúdo vindo de seu children. Feito com o componente AlertDialog do shadc-ui-react.
 * @returns 
 */
const ModalTrigger = ({ icon, variant, children }: PropsWithChildren<ModalTriggerProps>) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button variant={variant}>{icon}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                {children}
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ModalTrigger