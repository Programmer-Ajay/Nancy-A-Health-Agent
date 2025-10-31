
import {Router} from "express";

import {
    loginUser,
    // logoutUser,
    registerUser,
    // refreshAccessToken,
    getUserDetails
} from "../controllers/users.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { get } from "mongoose";

const router = Router()
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
// router.route("/logout").post(verifyJWT, logoutUser)
// router.route("/refresh-token").post(refreshAccessToken)
router.route("/me").get(verifyJWT, getUserDetails)

export default router