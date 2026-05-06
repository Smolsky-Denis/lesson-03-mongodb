import {Request, Response} from 'express'
import {blogRepository} from "../../repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";


export const deleteBlogById = async (req: Request<{id: string}>, res: Response) => {
    const id = req.params.id

    await blogRepository.deleteBlogById(id)
        ? res.sendStatus(HttpStatus.NoContent)
        : res.sendStatus(HttpStatus.NotFound)
}