import { StatusCodes } from "http-status-codes";
import Reserve from "../Models/ReserveModel.js";


export const getAllDetails = async (req, res) => {
    const details = await Reserve.find();
    res.status(StatusCodes.OK).json({details:details});
};
export const CreateDetails = async (req, res) => {
    const details = await Reserve.create(req.body);
    res.status(StatusCodes.OK).json({ details:details });
};