import mongoose from "mongoose";
import { MovieInfo } from "../interfaces/movie/MovieInfo";

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    startDate: {
        type: Date
    },
    thumbnail: {
        type: String
    },
    story: {
        type: String
    },
    comments: [{
        writer: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User"
        },
        comment: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }]
},
{
    timestamps: true
});

export default mongoose.model<MovieInfo & mongoose.Document>("Movie", MovieSchema);