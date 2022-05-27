import { MovieInfo } from "../movie/MovieInfo";

export interface ReviewResponseDto {
    writer: string;
    title: string;
    content: string;
    movie: MovieInfo;
}