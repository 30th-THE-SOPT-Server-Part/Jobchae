import { MovieCommentInfo } from "./MovieInfo";

export interface MovieResponseDto {
    title: string;
    director: string;
    startDate?: Date;
    thumbnail?: string;
    story?: string;
    comments?: MovieCommentInfo[];
}