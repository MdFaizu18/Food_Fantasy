import { Router } from "express";
const router = Router();

import {
    CreateDetails,
    getAllDetails,
} from "../Controller/ReserveController.js";
import { validateReserveInput } from "../Middleware/validationMiddleware.js";

router.get("/reserve-details", getAllDetails);
router.post("/reserve-details", validateReserveInput, CreateDetails);

export default router;