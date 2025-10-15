import express, { Router } from "express";
import { getUserProfile, deleteUser } from "../controllers/userController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { getUserDetails, setCustomClaims } from "../controllers/adminController";

const router: Router = express.Router();

router.post("/setCustomClaims", authenticate, setCustomClaims)

export default router;