import { Task as TaskType } from "@/types/task"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Clipboard } from "lucide-react"

type TaskProps = {
    task: TaskType
}

const Task = ({ task }: TaskProps) => {
    return (
        <li>
            <Card className="task">
                <CardHeader className="">
                    <CardTitle className="flex"><Clipboard className="" /> {task.title}</CardTitle>
                    <span>{task.description}</span>
                </CardHeader>
                <div className="">
                    <Button>Finalizar tarefa</Button>
                    <Button>Delete</Button>
                </div>
            </Card>
        </li>
    )
}

export default Task