type Task = {
    id: number;
    userId: number;
    title: string;
    description: string;
    status: "pending" | "in-progress" | "completed";
    points: number;
    completedAt?: Date;
}

export type { Task };
