import express from "express";
import usercontroller from "../controllers/usercontroller";


const router = express.Router();

router.get("/getall", usercontroller.getAllUser)
export default router;