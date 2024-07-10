import { Router } from "express";
const router = Router();
import {
    createDish,
    deleteDish,
    editDish,
    getAllDishes,
    getSingleDish,
} from "../Controller/DishController.js";
import {
    validateDishInput,
    validateIdParam,
    validateUpdateDish,
} from "../Middleware/validationMiddleware.js";

// router.get("/getAllDishes", getAllDishes);
// router.post("/createDish", createDish);

router.route("/").get(getAllDishes).post(validateDishInput, createDish);
router
    .route("/:id")
    .get(getSingleDish)
    .patch(validateUpdateDish, validateIdParam, editDish)
    .delete(validateIdParam, deleteDish);
// router.get("/current-user", getCurrentUser);
export default router;
