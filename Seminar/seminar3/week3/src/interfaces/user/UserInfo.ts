import { SchoolInfo } from "../school/SchoolInfo";

export interface UserInfo {
    name: string;
    phone: string;
    email: string;
    age: string;
    school: SchoolInfo;
}