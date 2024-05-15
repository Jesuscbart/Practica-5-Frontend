export type Film = {
    id: string;
    brand: string;
    name: string;
    iso: number;
    formatThirtyFive: boolean;
    formatOneTwenty: boolean;
    color: boolean;
    process: string;
    staticImageUrl: string;
    description: string;
}

export type FilmResponse = {
    results: Film[];
};