import { Key } from "react";

interface TodoType {
    createdAt: string;
    createdBy: string;
    description: string;
    needsReminder: boolean;
    title: string;
    id: Key;
}

export interface BranchType {
    id: Key;
    degree: string;
    registered: number;
    placed: number;
    higherStudies: number;
    percentagePlaced: number;
}

export interface Yeartype {
    id: Key;
    // fields : string[],   ---> later converted to these two fields
    // values : number[]
    year: number;
    highest: number;
    avg: number;
    median: number;
    domesticOffers: number;
    internationalOffers: number;
}

export type { TodoType };
