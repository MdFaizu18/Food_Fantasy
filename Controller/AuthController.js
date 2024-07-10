import { StatusCodes } from "http-status-codes";
import Customer from "../Models/CustomerModel.js";
import { comparePassword, hashPassword } from "../Utils/passwordUtilis.js";
import { UnauthenticatedError } from "../Error/customError.js";
import { createJWT } from "../Utils/tokenUtils.js";


export const register = async (req, res) => {
    try {
        // for admin authentication 
        const { password } = req.body;
        const isAdminAccount = password == process.env.ADMIN_PASSWORD;
        console.log('isAdminAccount:', isAdminAccount);
        req.body.role = isAdminAccount ? 'admin' : 'user';

        const hashedPassword = await hashPassword(req.body.password);
        req.body.password = hashedPassword;
        const user = await Customer.create(req.body);
        res.status(StatusCodes.CREATED).json({ msg: "user created" });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }

};

export const login = async (req, res) => {
    const user = await Customer.findOne({ email: req.body.email });
    const isValidUser =
        user && (await comparePassword(req.body.password, user.password));
    if (!isValidUser) throw new UnauthenticatedError("Invalid Credentials");
  
    //   for jwt token generation 
    const token = createJWT({ userId: user._id, role: user.role });
    console.log(token);
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
        expires: new Date(Date.now() + oneDay),
        // secure: process.env.NODE_ENV === "production",
    });
    if (isValidUser) {
        const oneDay = 1000 * 60 * 60 * 24;
        res.cookie('loggedIn', 'true', {
            expires: new Date(Date.now() + oneDay), // Set expiration time to 2 minutes from now
        });
    }

    console.log(req.cookies);
    res.status(StatusCodes.OK).json({ msg: "user is logged in" });
};

export const logout = (req, res) => {
    res.cookie('token', 'logout', {
        expires: new Date(Date.now()),
    });
    res.cookie('loggedIn', 'false', {
        expires: new Date(Date.now()), // Set expiration time to 2 minutes from now
    });
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

