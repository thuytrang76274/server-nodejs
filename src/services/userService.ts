import { userModel } from "../models/user.models";

const getAllUserService = async () => {
    let foundUser: any[] = await userModel.findAll();
    
    return {
      statusCode: "200",
      message: "lấy người dùng thành công",
      data: foundUser,
    };
  };

export {
  getAllUserService
}