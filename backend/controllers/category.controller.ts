import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export const getCategories = async (_: Request, res: Response) => {
    try { 
        const categories = await CategoryService.getAll()
        return res.status(200).send(categories)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const getCategory = async (req: Request, res: Response) => {
    try {
        const category = await CategoryService.getOne(req.params.id)
        return res.status(200).send(category)
    } catch (error) {
        res.status(403).send(error)
    }
}

export const createCategory = async (req: Request, res: Response) => {
    try {
        const category = await CategoryService.create(req.body)
        return res.status(200).send(category)
    } catch (error) {
        res.status(403).send(error)
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const result = await CategoryService.delete(req.params.id)
        return res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
} 