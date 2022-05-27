import File from "../models/File";
import { FileResponseDto } from "../interfaces/file/FileResponseDto";

const createFile = async (link: string, fileName: string): Promise<FileResponseDto> => {
    try {
        const file = new File({
            link,
            fileName
        });

        await file.save();

        const data = {
            _id: file._id,
            link
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createFiles = async (imageList: { location: string, originalname: string }[]): Promise<FileResponseDto[]> => {
    try {
        const data = await Promise.all(imageList.map(async image => {
            const file = new File({
                link: image.location,
                fileName: image.originalname
            });

            await file.save();

            return {
                _id: file._id,
                link: file.link
            };
        }));

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    createFile,
    createFiles
}