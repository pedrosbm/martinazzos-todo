import { useState } from "react"
import { AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Task } from "@/types/task"
import { Slider } from "./ui/slider"
import { Coins } from "lucide-react"
import { Button } from "./ui/button"

const NewTask = () => {
    const [task, setTask] = useState<Task>({points: 0} as Task)
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        if (task.title && task.description && task.points > 0) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleSubmit = () => {
        console.log(task)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
        validateForm()
    }
    return (
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>Adicionar nova tarefa</AlertDialogTitle>
                <p>todos os campos são obrigatórios</p>
            </AlertDialogHeader>

            <AlertDialogDescription>
                <form className="flex flex-col gap-5">
                    <Input onChange={handleChange} type="text" placeholder="Título" />
                    <Textarea onChange={handleChange} placeholder="Descrição"></Textarea>
                    <div className="flex flex-col items-center gap-2">
                        <h2>Prioridade</h2>
                        <Slider onValueChange={(value: number[]) => setTask({ ...task, points: value[0] })} defaultValue={[0]} max={150} step={50} />
                        {<div className="flex flex-row items-center gap-5">
                            {task.points != 0 && <p>{task.points <= 50 ? "Baixa" : task.points == 100 ? "Média" : "Alta"}</p>}
                            <Button variant={"outline"} className="flex items-center gap-2"><Coins /> {task.points}</Button>
                        </div>}
                    </div>
                </form>
            </AlertDialogDescription>

            <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction disabled={!isFormValid} onClick={handleSubmit}>Criar</AlertDialogAction>
            </AlertDialogFooter>
        </>
    )
}

export default NewTask