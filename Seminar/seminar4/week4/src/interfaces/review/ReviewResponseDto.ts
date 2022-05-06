import { MovieInfo } from "../movie/MovieInfo";

export interface ReviewResponseDto {
    writer: string;
    movie: MovieInfo;
    title: string;
    content: string;
}