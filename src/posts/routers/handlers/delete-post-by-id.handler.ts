import {Request, Response} from 'express'
import {HttpStatus} from "../../../core/types/http-statuses";
import {postRepository} from "../../repositories/posts.repository";


export const deletePostById = async (req: Request<{id: string}>, res: Response) => {
    const id = req.params.id

    await postRepository.deletePostById(id)
        ? res.sendStatus(HttpStatus.NoContent)
        : res.sendStatus(HttpStatus.NotFound)
}