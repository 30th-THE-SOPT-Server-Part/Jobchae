import { MovieResponseDto } from "./MovieResponseDto";

export interface MoviesResponseDto {
    movies: MovieResponseDto[];
    lastPage: number;
}