import { StatusCodes } from "http-status-codes";
import Dishes from "../Models/DishesModel.js";


export const getAllDishes = async (req, res) => {
    const dishes = await Dishes.find();
    res.status(StatusCodes.OK).json({ dishes });
};

export const createDish = async (req, res) => {
    const dish = await Dishes.create(req.body);
    res.status(StatusCodes.CREATED).json({ dish });
};

export const getSingleDish = async (req, res) => {
    const dish = await Dishes.findById(req.params.id);
    res.status(StatusCodes.OK).json({ dish });
};

export const editDish = async (req, res) => {
    const updatedDish = await Dishes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res
        .status(StatusCodes.OK)
        .json({ msg: "Dish is modified", Dish: updatedDish });
};

export const deleteDish = async (req, res) => {
    const removedDish = await Dishes.findByIdAndDelete(req.params.id);
    res
        .status(StatusCodes.CREATED)
        .json({ msg: "job  Deleted...", Dish: removedDish });
};


