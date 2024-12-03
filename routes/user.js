import express, { Router } from "express";
import { register } from "../controllers/user.js";

const router = Router();

router.route("/").post(register);

export default router;
