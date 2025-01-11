import { Task as TaskType } from "@/types/task"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Check, Clipboard, Coins, Trash } from "lucide-react"

type TaskProps = {
    task: TaskType
}

const Task = ({ task }: TaskProps) => {
    return (
        <li>
            <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                    <Clipboard />
                    <CardTitle>{task.title}</CardTitle>
                </CardHeader>

                <CardContent>
                    <span>{task.description.slice(0, 80)}</span>
                </CardContent>

                <CardFooter className="w-full justify-between gap-1">
                    <div>
                        <Button variant={"outline"}><Coins/>{task.points}</Button>
                    </div>
                    <div className="flex flex-row justify-end gap-1">
                        <Button><Check/> Finalizar tarefa</Button>
                        <Button variant={"ghost"}><Trash/>Apagar</Button>
                    </div>
                </CardFooter>
            </Card>
        </li>
    )
}

export default Task