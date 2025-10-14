import express, { Router } from "express";
import { getUserProfile, deleteUser } from "../controllers/userController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { getUserDetails, setCustomClaims } from "../controllers/adminController";

const router: Router = express.Router();

/** Route to get the user's profile - requires authentication */
router.get("/profile", authenticate, getUserProfile);

/** Route to delete a user - requires authentication and admin role */
router.delete("/:id", deleteUser);

router.post("/users/", authenticate, isAuthorized, setCustomClaims);

router.get("/users/:id", authenticate, isAuthorized, getUserDetails);

export default router;