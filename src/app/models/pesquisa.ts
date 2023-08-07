import { Articles } from "./articles";

export interface Pesquisa {
    status: string;
    totalResults: number;
    articles: Articles[];
}
