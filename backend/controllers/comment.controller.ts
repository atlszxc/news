import { Request, Response } from "express";
import { CommentService } from "../services/comment.service";

export const getAllComments = async (req: Request, res: Response) => {
    try {
        const comments = await CommentService.getAll(req.params.id)
        res.status(200).send(comments)
    } catch (error) {
        res.status(500).send(error)
    }
} 

export const createComment = async (req: Request, res: Response) => {
    try {
        const comment = await CommentService.create(req.body)
        res.status(200).send(comment)
    } catch (error) {
        res.status(403).send(error)
    }
}

export const deleteComment = async (req: Request, res: Response) => {
    try {
        const deletedComment = await CommentService.delete(req.params.id)
        return res.status(200).send(deletedComment)
    } catch (error) {
        res.status(403).send(error)
    }
}

export const getCountComments = async (req: Request, res: Response) => {
    try {
        const countComments = await CommentService.getCommentsCount(req.params.id)
        return res.status(200).send({ count: countComments })
    } catch (error) {
        res.status(500).send(error)
    }
}