import { Router } from "express";
const router = Router();
import { login, logout, register } from "../Controller/AuthController.js";


import {
    validateRegisterInput,
    validateLoginInput,
} from "../Middleware/validationMiddleware.js";

router.post("/signup", validateRegisterInput, register);
router.post("/signin", validateLoginInput, login);
router.get("/logout", logout);

export default router;