import mongoose from "mongoose";
import { FileInfo } from "../interfaces/file/FileInfo";

const FileSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    }
}, {
    timestamps: true // createdAt, updatedAt 자동기록
});

export default mongoose.model<FileInfo & mongoose.Document>("File", FileSchema);