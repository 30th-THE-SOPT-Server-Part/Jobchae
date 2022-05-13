import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import User from "../models/User";
import bcrypt from "bcryptjs";
import { UserSignInDto } from "../interfaces/user/UserSignInDto";

const createUser = async (userCreateDto: UserCreateDto): Promise<PostBaseResponseDto | null> => {
    try {
        const existUser = await User.findOne({
            email: userCreateDto.email
        });
        if (existUser) return null;

        const user = new User({
            name: userCreateDto.name,
            phone: userCreateDto.phone,
            email: userCreateDto.email,
            age: userCreateDto.age,
            password: userCreateDto.password,
            school: {
                name: userCreateDto.school?.name,
                major: userCreateDto.school?.major
            }
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(userCreateDto.password, salt);
        
        await user.save();

        const data = {
            _id: user.id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const signInUser = async (userSignInDto: UserSignInDto): Promise<PostBaseResponseDto | null | number> => {
    try {
        const user = await User.findOne({
            email: userSignInDto.email
        });
        if (!user) return null;

        const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
        if (!isMatch) return 401;

        const data = {
            _id: user._id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async (userId: string, userUpdateDto: UserUpdateDto) => {
    try {
        // findByIdAndUpdate
        await User.findByIdAndUpdate(userId, userUpdateDto);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findUserById = async (userId: string): Promise<UserResponseDto | null> => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            return null;
        }

        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const delteUser = async (userId: string): Promise<void> => {
    try {
        await User.findByIdAndDelete(userId);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createUser,
    signInUser,
    updateUser,
    findUserById,
    delteUser
}