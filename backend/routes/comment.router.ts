import { Router } from "express";
import { createComment, deleteComment, getAllComments, getCountComments } from "../controllers/comment.controller";

export const commentRouter = Router()

commentRouter.get('/count/:id', getCountComments)
commentRouter.get('/:id', getAllComments)
commentRouter.post('/create', createComment)
commentRouter.delete('/:id', deleteComment)