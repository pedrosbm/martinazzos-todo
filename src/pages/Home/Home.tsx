import { useEffect, useState } from "react";
import { Task as TaskType } from "../../types/task";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Task from "@/components/Task";

const apiUrl = import.meta.env.VITE_API_URL as string

const Home = () => {
    const [tasks, setTask] = useState<TaskType[]>()

    useEffect(() => {
        fetch(`${apiUrl}/tasks`)
            .then(response => response.json())
            .then(data => setTask(data))
    }, [])

    return (
        <section className="p-5 gap-5 w-[100%]">
            <Card className="h-[100%] w-full bg-black">
                <CardHeader className="bg-zinc-900">
                    <CardTitle>Home</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="p-5">
                    <ul className=" flex flex-col gap-5">
                        {tasks?.map(task => (
                            <Task key={task.id} task={task} />
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>
    )
}

export default Home;