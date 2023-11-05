import { Request, Response } from "express";
import response from "../interfaces/response.interface";
import {getAllUserService} from "../services/userService"

const getAllUser = async (_req: Request, res: Response) => {
    try {
      const response: response = await getAllUserService();
      res.status(200).json(response);
    } catch (error) {
      res.status(200).json({ statusCode: "400", message: `${error}` });
    }
  };

  export default{
    getAllUser
  }