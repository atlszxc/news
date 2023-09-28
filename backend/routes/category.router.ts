import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategory } from "../controllers/category.controller";

export const categoryRouter = Router()

categoryRouter.get('/', getCategories)
categoryRouter.get('/:id', getCategory)
categoryRouter.post('/create', createCategory)
categoryRouter.delete('/:id', deleteCategory)
