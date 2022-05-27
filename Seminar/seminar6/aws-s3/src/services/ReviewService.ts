import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import { ReviewInfo } from "../interfaces/review/ReviewInfo";
import { ReviewOptionType } from "../interfaces/review/ReviewOptionType";
import { ReviewResponseDto } from "../interfaces/review/ReviewResponseDto";
import { ReviewsResponseDto } from "../interfaces/review/ReviewsResponseDto";
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

const getReviews = async (movieId: string, search: string, option: ReviewOptionType, page: number): Promise<ReviewsResponseDto> => {
    const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);

    let reviews: ReviewInfo[] = [];
    const perPage: number = 2;

    try {
        const pattern: RegExp = regex(search);

        if (option === 'title') {
            reviews = await Review.find({ title: { $regex: pattern } })
                .where('movie').equals(movieId)
                .populate('writer')
                .sort({ createdAt: -1 })
                .skip(perPage * (page - 1))
                .limit(perPage);
        } else if (option === 'content') {
            reviews = await Review.find({ content: { $regex: pattern } })
                .where('movie').equals(movieId)
                .populate('writer')
                .sort({ createdAt: -1 })
                .skip(perPage * (page - 1))
                .limit(perPage);
        } else {
            reviews = await Review.find({
                $or: [
                    { title: { $regex: pattern } },
                    { content: { $regex: pattern } }
                ]
            })
            .where('movie').equals(movieId)
            .populate('writer')
            .sort({ createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage);
        }

        const total = await Review.countDocuments({});
        const lastPage: number = Math.ceil(total / perPage);

        const data = {
            reviews,
            lastPage
        }
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