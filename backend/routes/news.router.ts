import { Router } from "express";
import { createNews, deleteNews, getAllNews, getCountNews, getNews, getRandomNews, groupedNews } from "../controllers/news.controller";

export const newsRouter = Router()

newsRouter.get('/random', getRandomNews)
newsRouter.get('/', getCountNews)
newsRouter.get('/grouped', groupedNews)
newsRouter.get('/:id', getAllNews)
newsRouter.get('/one/:id', getNews)
newsRouter.post('/create', createNews)
newsRouter.delete('/:id', deleteNews)