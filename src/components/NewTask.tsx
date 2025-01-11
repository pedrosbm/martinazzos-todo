import { MouseEvent, useState } from "react"
import { AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Task } from "@/types/task"
import { Slider } from "./ui/slider"
import { Coins } from "lucide-react"
import { Button } from "./ui/button"

const apiUrl = import.meta.env.VITE_API_URL as string

const NewTask = () => {
    const [task, setTask] = useState<Task>({ points: 0, status: "pending" } as Task)
    const [error, setError] = useState<boolean>(false)

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        if (task.title == "" || task.description == "" || task.points == 0) {
            e.preventDefault()
            setError(true)
            return
        }
        fetch(`${apiUrl}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        }).then(() => {
            setTask({ points: 0, status: "pending" } as Task)
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }

    const handleSliderChange = (value: number[]) => {
        setTask({ ...task, ["points"]: value[0] })
    }

    return (
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>Adicionar nova tarefa</AlertDialogTitle>
                {error && <p className="text-red-500">Todos os campos são obrigatórios</p>}
            </AlertDialogHeader>

            <AlertDialogDescription>
                {/* Campos */}
                <form className="flex flex-col gap-5">
                    <Input onChange={handleChange} name="title" type="text" placeholder="Título" />
                    <Textarea onChange={handleChange} name="description" placeholder="Descrição"></Textarea>
                    <div className="flex flex-col items-center gap-2">
                        <h2>Prioridade</h2>
                        {/* Slider */}
                        <Slider className="cursor-e-resize" onValueChange={handleSliderChange} defaultValue={[0]} max={150} step={50} />
                        {<div className="flex flex-row items-center gap-5">
                            {task.points != 0 && <p>{task.points <= 50 ? "Baixa" : task.points == 100 ? "Média" : "Alta"}</p>}
                            <Button variant={"outline"} type="button" className="flex items-center gap-2"><Coins /> {task.points}</Button>
                        </div>}
                    </div>
                </form>
            </AlertDialogDescription>

            <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleSubmit}>Criar</AlertDialogAction>
            </AlertDialogFooter>
        </>
    )
}

export default NewTask