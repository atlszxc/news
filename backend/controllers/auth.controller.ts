import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export const signIn = async (req: Request, res: Response) => {
    try {
        const user = await AuthService.signIn(req.body)
        return res.status(200).send(user)
    } catch (error) {
        res.status(403).send(error)
    }
}

export const signUp = async (req: Request, res: Response) => {
    try {
        const user = await AuthService.signUp(req.body)
        return res.status(200).send(user)
    } catch (error) {
        res.status(403).send(error)
    }
}