import { useEffect, useState } from "react";
import { Task as TaskType } from "../types/task";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

import Task from "@/components/Task";
import NewTask from "@/components/NewTask";
import ModalTrigger from "@/components/ModalTrigger";

const apiUrl = import.meta.env.VITE_API_URL as string

const Home = () => {
    const [tasks, setTask] = useState<TaskType[]>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${apiUrl}/tasks?status=pending`)
            .then(response => response.json())
            .then(data => setTask(data))
            .then(() => setIsLoading(false))
    }, [])

    return (
        <section className="p-5 gap-5 w-[100%]">
            <Card className="h-[100%] w-full bg-black">

                <CardHeader className="bg-zinc-900">
                    <CardTitle>Home</CardTitle>
                </CardHeader>

                <Separator />

                <CardContent className="p-5">

                    {/* TODO opções de filtro */}
                    <div className="flex mb-5 gap-3">
                        <ModalTrigger icon={<Plus />} variant={"default"}>
                            <NewTask />
                        </ModalTrigger>
                        
                        <ModalTrigger icon={<Filter />} variant={"secondary"}>
                            <div>Filter</div>
                        </ModalTrigger>
                    </div>

                    {/* Lista de tasks */}
                    <ul className="grid grid-cols-2 gap-5">
                        {isLoading ?
                            <li><Skeleton className="w-[40rem] h-[12rem]" /></li>
                            :
                            tasks?.map(task => (<Task key={task.id} task={task} />))
                        }
                    </ul>
                </CardContent>
            </Card>
        </section>
    )
}

export default Home;