import mongoose from "mongoose";

export interface ReviewCreateDto {
    writer: mongoose.Types.ObjectId;
    title: string;
    content: string;
}