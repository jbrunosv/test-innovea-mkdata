import { Source } from "./source";

export interface Articles {
    source: Source;
    author: string;
    title:string;
    description: string;
    publishedAt: string;
}
