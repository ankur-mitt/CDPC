import { Key } from "react";

interface TodoType {
    createdAt: string;
    createdBy: string;
    description: string;
    needsReminder: boolean;
    title: string;
    id: Key;
}

interface Resource {
    company: string;
    year: string;
    role: string;
    type: string;
    resourcetype: string;
    name: string;
}

export type { TodoType, Resource };
