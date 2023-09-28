import { Request, Response } from "express";
import { NewsService } from "../services/news.service";

export const getAllNews = async (req: Request, res: Response) => {
    try {
        if(req.query.count) {
            const news = await NewsService.getCountNews(Number(req.query.count))
            return res.status(200).send(news)
        }
    
        const news = await NewsService.getAll(req.params.id)
    
        return res.status(200).send(news)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getCountNews = async (req: Request, res: Response) => {
    try {
        const news = await NewsService.getCountNews(Number(req.query.count))
        return res.status(200).send(news)   
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getNews = async (req: Request, res: Response) => {
    try {
        const news = await NewsService.getOne(req.params.id)
        return res.status(200).send(news)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createNews = async (req: Request, res: Response) => {
    try {
        const news = await NewsService.create(req.body)
        return res.status(201).send(news)
    } catch (error) {
        res.status(403).send(error)
    }
}

export const getRandomNews = async (_: Request, res: Response) => {
    try {
        const news = await NewsService.getRandomNews()
        return res.status(200).send(news)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteNews = async (req: Request, res: Response) => {
    try {
        const deletedNews = await NewsService.delete(req.params.id)
        return res.status(200).send(deletedNews)
    } catch (error) {
        res.status(403).send(error)
    }
}

export const groupedNews = async (_: Request, res: Response) => {
    try {
        const news = await NewsService.groupedNews()
        return res.status(200).send(news)
    } catch (error) {
        res.status(500).send(error)
    }
}

