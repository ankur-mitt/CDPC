import { Key } from "react";

interface TodoType {
    createdAt: string;
    createdBy: string;
    description: string;
    needsReminder: boolean;
    title: string;
    id: Key;
}

export type { TodoType };
