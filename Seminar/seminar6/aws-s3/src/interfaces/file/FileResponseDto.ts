import mongoose from "mongoose";

export interface FileResponseDto {
    _id: mongoose.Schema.Types.ObjectId;
    link: string;
}