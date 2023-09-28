import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";

export const authRouter = Router()

authRouter.post('/signin', signIn)
authRouter.post('/signUp', signUp)