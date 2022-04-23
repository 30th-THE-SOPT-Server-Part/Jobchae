import express, { Request, Response, Router } from 'express';
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!
import mongoose from 'mongoose';

const router: Router = express.Router(); 

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '유저 조회 성공'
    });
});

module.exports = router;



// router.get('/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
    
//     const user = await User.findById(id);
    
//     return res.status(200).json({
//         status: 200,
//         message: '유저 조회 성공',
//         data: user
//     });
// });




// UserService.ts
// const findUserById = async (id: string) => {
//     try {
//         const user = await User.findById(id);
        
//         return user;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

// UserController.ts

/**
 *  @route GET /user/:id
 *  @desc Get Specific User
 *  @access Private
 */
// const findUser = async (req: Request, res: Response) => {
//     const { id } = req.params;

//     try {
//         const user = await UserSevice.findById(id);

//         return res.status(200).json({
//             status: 200,
//             message: "유저 조회 성공",
//             data: user
//         });
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }


// export interface UserCreateDto {
//     name: string;
//     email: string;
//     phone: string;
//     location: string;
// }

// const createUser = async (req: Request, res: Response) => {
//     const userCreateDto: UserCreateDto = req.body;

//     try {
//         const newUser = await UserService.createUser(userCreateDto);

//         const data = {
//             id: newUser.id
//         };

//         return res.status(201).json({
//             status: 201,
//             message: "유저 생성 성공",
//             data
//         });
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }