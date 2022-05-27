import { ReviewInfo } from "./ReviewInfo";

export interface ReviewsResponseDto {
    reviews: ReviewInfo[];
    lastPage: number;
}