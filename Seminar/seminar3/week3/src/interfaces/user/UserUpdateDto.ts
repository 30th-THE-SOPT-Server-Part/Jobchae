import { SchoolInfo } from "../school/SchoolInfo";

export interface UserUpdateDto {
    // update 들어올 수도 있고 아닐 수도 있음 -> optional
    name?: string;
    phone?: string;
    email?: string;
    age?: number;
    school?: SchoolInfo;
}