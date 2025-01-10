type Task = {
    id: number;
    userId: number;
    title: string;
    description: string;
    status: "pending" | "completed";
    points: number;
    completedAt?: Date;
}

export type { Task };
