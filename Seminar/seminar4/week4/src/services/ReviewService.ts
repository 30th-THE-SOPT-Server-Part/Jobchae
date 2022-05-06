import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import { ReviewResponseDto } from "../interfaces/review/ReviewResponseDto";
import Review from "../models/Review";

const createReview = async (movieId: string, reviewCreateDto: ReviewCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const review = new Review({
            title: reviewCreateDto.title,
            content: reviewCreateDto.content,
            writer: reviewCreateDto.writer,
            movie: movieId
        });

        await review.save();

        const data = {
            _id: review._id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getReviews = async (movieId: string): Promise<ReviewResponseDto[]> => {
    try {
        const reviews = await Review.find({ 
            movie: movieId
        }).populate('writer', 'name').populate('movie');

        const data = await Promise.all(reviews.map(async (review: any) => {
            const result = {
                writer: review.writer.name,
                movie: review.movie,
                title: review.title,
                content: review.content
            };
            
            return result;
        }));

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createReview,
    getReviews
}