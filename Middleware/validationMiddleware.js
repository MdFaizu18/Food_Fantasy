import mongoose from "mongoose";
import { body, param, validationResult } from "express-validator";
import {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
} from "../Error/customError.js";
import Customer from "../Models/CustomerModel.js";
import Dishes from "../Models/DishesModel.js";

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((err) => err.msg);
                if (errorMessages[0].startsWith("no dishes ")) {
                    throw new NotFoundError(errorMessages);
                }
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
};

// for user login and regiter purposeses 
export const validateRegisterInput = withValidationErrors([
    body("name").notEmpty().withMessage("Name must Required"),
    body("email")
        .notEmpty()
        .withMessage("Email must required")
        .isEmail()
        .withMessage("Invalid email formate")
        .custom(async (email) => {
            const user = await Customer.findOne({ email });
            if (user) {
                throw new BadRequestError("email already exits");
            }
        }),
    body("password")
        .notEmpty()
        .withMessage("password is Required")
        .isLength({ min: 8 })
        .withMessage("password must contain at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
    body("email")
        .notEmpty()
        .withMessage("Email must required")
        .isEmail()
        .withMessage("Invalid email formate"),
    body("password").notEmpty().withMessage("password is Required"),
]);

//*------------------ for admin page ------------------------------------------
export const validateDishInput = withValidationErrors([
    body("status").notEmpty().withMessage("Status is required"),
    body("image").notEmpty().withMessage("Image is required"),
    body("name").notEmpty().withMessage("Name is required"),
    body("price").notEmpty().withMessage("price  is required"),
    body("desc").notEmpty().withMessage("Description is required"),
    body("rate").notEmpty().withMessage("Rating is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("quantity").notEmpty().withMessage("Quantity is required"),

]);

export const validateIdParam = withValidationErrors([
    param("id").custom(async (value, { req }) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new BadRequestError("Invalid MOngoDB Id ");
        const dish = await Dishes.findById(value);

        if (!dish) throw new NotFoundError(`no dish with id :${value}`);

        // const isAdmin = req.user.role === "admin";
        // const isOwner = req.user.userId === job.createdBy.toString();
        // if (!isAdmin && !isOwner)
        //   throw new UnauthorizedError("not authorized to access ");
    }),
]);

export const validateUpdateDish = withValidationErrors([
    body("imageUrl").notEmpty().withMessage("Image must Required"),
    body("name").notEmpty().withMessage("Name must Required"),
    body("status").notEmpty().withMessage("Status must Required"),
    body("price").notEmpty().withMessage("Price is required"),
    body("newPrice").notEmpty().withMessage("NewPrice is required"),
    body("desc").notEmpty().withMessage("NewPrice is required"),
    body("rate").notEmpty().withMessage("Rating is required"),
    body("category").notEmpty().withMessage("Category is required"),
]);


export const validateReserveInput = withValidationErrors([
    body("reserveName").notEmpty().withMessage("Name is required"),
    body("reserveDate").notEmpty().withMessage("Date is required"),
    body("reserveTime").notEmpty().withMessage("Time is required"),
    body("reserveMember").notEmpty().withMessage("Member is required"),
    body("reserveNote").notEmpty().withMessage("Note is required"),
]);