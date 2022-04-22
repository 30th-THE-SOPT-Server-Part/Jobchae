import { SchoolInfo } from "../school/SchoolInfo";

export interface userUpdateDto {
    name?: string;
    phone?: string;
    email?: string;
    age?: number;
    school?: SchoolInfo;
}